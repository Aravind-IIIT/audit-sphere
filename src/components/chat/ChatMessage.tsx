
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BotIcon, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot?: boolean;
  source?: string;
}

export function ChatMessage({ message, isBot = false, source }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex gap-3 p-4",
        isBot ? "bg-secondary/50" : "bg-background"
      )}
    >
      <Avatar>
        {isBot ? (
          <>
            <BotIcon className="h-8 w-8 text-primary"/>
            {/* <AvatarFallback>Compy</AvatarFallback> */}
          </>
        ) : (
          <>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>U</AvatarFallback>
          </>
        )}
      </Avatar>
      <br></br>
      <div className="flex flex-col">
         {/* Render each sentence as a separate paragraph */}
         {Array.isArray(message) ? (
          message.map((line, index) => (
            <p key={index} className="text-sm mb-2">
              {line}
            </p>
          ))
        ) : (
          <p className="text-sm">{message}</p>
        )}
        {source && (
          <p className="text-xs text-muted-foreground">Source: {source}</p>
        )}
      </div>

    </div>
  );
}
