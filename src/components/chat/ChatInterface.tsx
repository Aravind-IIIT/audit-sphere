import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { MessageSquareText, Send, Loader } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface OllamaResponseChunk {
  message?: {
    role: string;
    content: string;
  };
  done?: boolean;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean; source?: string }>>([
    {
      isBot: true,
      text: "Hello! I'm your AI Compliance Assistant. I can help you with GDPR and compliance-related questions. Please note that my responses are for informational purposes only and should not be considered legal advice.",
      source: "System"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setIsLoading(true);

    // Add a placeholder for the bot's response
    setMessages(prev => [...prev, { text: "Typing...", isBot: true, source: "Compy" }]);

    try {
      const response = await fetch('http://localhost:55000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "llama3.2",
          messages: [
            {
              role: "system",
              content: "You are a compliance assistant. Provide concise and informative responses to user queries."
            },
            {
              role: "user",
              content: input
            }
          ],
          stream: true,
          // Optional parameters for concise and controlled responses
          max_tokens: 100, // Limit the response length
          temperature: 0.7, // Control randomness (lower = more deterministic)
          top_p: 0.5, // Nucleus sampling for better quality
          stop: ["\n\n"] // Stop generating after a clear delimiter
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Failed to connect to Ollama API');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const parsedChunk: OllamaResponseChunk = JSON.parse(chunk);

        if (parsedChunk.message?.content) {
          botResponse += parsedChunk.message.content;

          // Update the last bot message in the messages array
          setMessages(prev => {
            const updatedMessages = [...prev];
            updatedMessages[updatedMessages.length - 1].text = formatResponse(botResponse);
            return updatedMessages;
          });
        }

        if (parsedChunk.done) break;
      }

      // Add a follow-up message asking if the user needs more details
      const followUpMessage = "Would you like more details on this?";
      setMessages(prev => [...prev, { text: followUpMessage, isBot: true, source: "Compy" }]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to Ollama API. Make sure Ollama is running on port 55000.",
        variant: "destructive"
      });
      console.error('Ollama API Error:', error);

      // Remove the placeholder bot message in case of an error
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  // Helper function to format the response
  const formatResponse = (response: string): string => {
    const sentences = response.split(". ").filter(sentence => sentence.trim() !== "");
    return sentences.map((sentence, index) => `• ${sentence.trim()}.`).join("\n");
  };

  return (
    <div className="flex flex-col h-[600px] border rounded-lg bg-background">
      <div className="flex items-center gap-2 p-4 border-b">
        <MessageSquareText className="h-5 w-5 text-primary" />
        <h2 className="font-semibold">Compliance Assistant</h2>
      </div>

      <ScrollArea className="flex-1 p-4 overflow-y-auto" ref={scrollRef}>
        <div className="flex flex-col gap-4">
          {messages.map((msg, i) => (
            <ChatMessage
              key={i}
              message={msg.text}
              isBot={msg.isBot}
              source={msg.source}
            />
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a compliance-related question..."
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={isLoading}>
          {isLoading ? <Loader className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
}

