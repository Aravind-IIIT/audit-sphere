
import React, { useState, useRef, useEffect } from 'react';
import { FileText, Loader2, Bot, Send, ArrowRight, Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { extractRopaData, generatePrivacyNoticeFromRopa, isRopaDocument, generateImprovementSuggestions } from "@/utils/documentProcessing";

type DocumentType = 'dpia' | 'ropa' | 'privacy-notice';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  file?: File;
}

interface DocumentTemplate {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: DocumentType;
}

const AiAgentCanvas: React.FC = () => {
  const [documentType, setDocumentType] = useState<DocumentType | null>(null);
  const [customRequirements, setCustomRequirements] = useState('');
  const [generatedDocument, setGeneratedDocument] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I can help you generate compliance documents like DPIAs, RoPAs, and Privacy Notices. You can also upload RoPA files, and I can create Privacy Notices based on them. How can I help you today?' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [uploadedRopaData, setUploadedRopaData] = useState<any>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = { role: 'user' as const, content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input field
    setInputMessage('');
    
    // Process user's request
    setIsGenerating(true);
    
    try {
      // Add assistant thinking message
      setMessages(prev => [...prev, { role: 'assistant', content: 'Processing your request...' }]);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Determine document type from message
      let detectedType = documentType;
      
      // Simple keyword detection
      const userInput = inputMessage.toLowerCase();
      if (userInput.includes('dpia') || userInput.includes('impact assessment')) {
        detectedType = 'dpia';
      } else if (userInput.includes('ropa') || userInput.includes('records of processing')) {
        detectedType = 'ropa';
      } else if (userInput.includes('privacy notice') || userInput.includes('privacy policy')) {
        detectedType = 'privacy-notice';
      }
      
      // Extract custom requirements
      const requirements = userInput.replace(/generate|create|make|dpia|ropa|privacy notice|document|please|could you|i need|i want/gi, '').trim();
      if (requirements) {
        setCustomRequirements(requirements);
      }
      
      // Check if this is a modification request for an existing document
      if (generatedDocument) {
        await handleModifyDocument(inputMessage);
      } else if (uploadedRopaData && (userInput.includes('privacy notice') || userInput.includes('create') || userInput.includes('generate'))) {
        // Generate privacy notice from uploaded RoPA data
        const privacyNotice = generatePrivacyNoticeFromRopa(uploadedRopaData);
        setGeneratedDocument(privacyNotice);
        setDocumentType('privacy-notice');
        
        // Update chat with completion message
        setMessages(prev => {
          // Remove the "processing" message
          const filteredMessages = prev.filter(msg => msg.content !== 'Processing your request...');
          // Add the completion message
          return [...filteredMessages, { 
            role: 'assistant', 
            content: `I've created a Privacy Notice based on your uploaded RoPA document. You can view it in the canvas on the right.` 
          }];
        });
      } else if (detectedType) {
        // Generate a new document based on type and requirements
        setDocumentType(detectedType);
        await generateDocument(detectedType, requirements);
        
        // Update chat with completion message
        setMessages(prev => {
          // Remove the "processing" message 
          const filteredMessages = prev.filter(msg => msg.content !== 'Processing your request...');
          // Add the completion message
          return [...filteredMessages, { 
            role: 'assistant', 
            content: `I've created a ${getDocumentTypeName(detectedType)} for you. You can view it in the canvas on the right.` 
          }];
        });
      } else {
        // Handle general conversation
        setMessages(prev => {
          // Remove the "processing" message
          const filteredMessages = prev.filter(msg => msg.content !== 'Processing your request...');
          
          let responseContent = "I can help you with creating documents like DPIAs, RoPAs, and Privacy Notices. ";
          
          if (uploadedRopaData) {
            responseContent += "I notice you've uploaded a RoPA document. Would you like me to create a Privacy Notice based on it? Just say 'Create Privacy Notice from RoPA'.";
          } else {
            responseContent += "You can also upload a RoPA file and I can create a Privacy Notice based on it. Just click the upload button.";
          }
          
          // Add the response message
          return [...filteredMessages, { 
            role: 'assistant', 
            content: responseContent
          }];
        });
      }
      
    } catch (error) {
      setMessages(prev => {
        // Remove the "processing" message
        const filteredMessages = prev.filter(msg => msg.content !== 'Processing your request...');
        // Add error message
        return [...filteredMessages, { 
          role: 'assistant', 
          content: 'Sorry, there was an error processing your request. Please try again.' 
        }];
      });
      
      toast({
        variant: "destructive",
        title: "Processing failed",
        description: "There was an error processing your request. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFileUpload = (file: File) => {
    if (!file) return;

    // Add user message with file
    setMessages(prev => [...prev, { 
      role: 'user', 
      content: `I've uploaded a file: ${file.name}`,
      file: file
    }]);

    // Process the file
    setIsGenerating(true);

    // Read file content
    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target?.result as string;
      
      // Add thinking message
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Analyzing uploaded document...' 
      }]);
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      try {
        // Set document content
        setGeneratedDocument(content);
        
        // Check if it's a RoPA document
        if (isRopaDocument(content)) {
          // Extract RoPA data
          const ropaData = extractRopaData(content);
          setUploadedRopaData(ropaData);
          setDocumentType('ropa');
          
          // Update chat with completion message
          setMessages(prev => {
            // Remove the "analyzing" message
            const filteredMessages = prev.filter(msg => msg.content !== 'Analyzing uploaded document...');
            // Add the completion message
            return [...filteredMessages, { 
              role: 'assistant', 
              content: `I've loaded your RoPA document and identified it as a Records of Processing Activities file. Would you like me to generate a Privacy Notice based on this RoPA? Just say "Create Privacy Notice from RoPA".` 
            }];
          });
        } else {
          // Generic document handling
          setMessages(prev => {
            // Remove the "analyzing" message
            const filteredMessages = prev.filter(msg => msg.content !== 'Analyzing uploaded document...');
            // Add the completion message
            return [...filteredMessages, { 
              role: 'assistant', 
              content: `I've loaded the document "${file.name}". You can view it in the canvas on the right. How would you like me to modify it?` 
            }];
          });
        }
      } catch (error) {
        setMessages(prev => {
          // Remove the "analyzing" message
          const filteredMessages = prev.filter(msg => msg.content !== 'Analyzing uploaded document...');
          // Add error message
          return [...filteredMessages, { 
            role: 'assistant', 
            content: 'Sorry, there was an error processing your file. Please make sure it\'s a text file and try again.' 
          }];
        });
        
        toast({
          variant: "destructive",
          title: "File processing failed",
          description: "There was an error processing your file. Please make sure it's a text file and try again.",
        });
      } finally {
        setIsGenerating(false);
      }
    };
    
    reader.onerror = () => {
      setMessages(prev => {
        // Remove any processing message
        const filteredMessages = prev.filter(msg => 
          msg.content !== 'Analyzing uploaded document...'
        );
        // Add error message
        return [...filteredMessages, { 
          role: 'assistant', 
          content: 'Sorry, there was an error reading your file. Please try again with a different file.' 
        }];
      });
      
      toast({
        variant: "destructive",
        title: "File reading failed",
        description: "There was an error reading your file. Please try again with a different file.",
      });
      
      setIsGenerating(false);
    };
    
    reader.readAsText(file);
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
    // Reset the input so the same file can be uploaded again
    e.target.value = '';
  };

  const getDocumentTypeName = (type: DocumentType): string => {
    switch(type) {
      case 'dpia': return 'Data Protection Impact Assessment';
      case 'ropa': return 'Records of Processing Activities';
      case 'privacy-notice': return 'Privacy Notice';
      default: return 'Document';
    }
  };
  
  // Sample document generation
  const generateDocument = async (type: DocumentType, customReqs: string) => {
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let generatedText = '';
    
    // Generate different content based on the selected document type
    if (type === 'dpia') {
      generatedText = `# Data Protection Impact Assessment (DPIA)

## Project Information
Project Name: [Project Name]
Date: ${new Date().toLocaleDateString()}
Assessment Owner: [Name]

## Purpose of Processing
[Description of the purpose of the data processing]

## Categories of Data Subjects
- Employees
- Customers
- Website visitors

## Categories of Personal Data
- Contact details
- Financial information
- Employment details

## Risk Assessment
1. Risk of unauthorized access: Medium
2. Risk of data loss: Low
3. Risk of data misuse: Medium

## Mitigation Measures
- Regular security audits
- Staff training on data protection
- Strong access controls

## Conclusion
[Summary of findings and decision to proceed with processing]`;
    } 
    else if (type === 'ropa') {
      generatedText = `# Records of Processing Activities (RoPA)

## Controller Information
Name of Controller: [Organization Name]
Contact Details: [Address, Email, Phone]
Data Protection Officer: [DPO Name and Contact]

## Processing Activities

### Activity 1: Customer Database
- Purpose: Customer relationship management
- Categories of data subjects: Customers
- Categories of personal data: Contact details, purchase history
- Recipients: Internal sales team, CRM provider
- Retention period: 7 years after last transaction
- Security measures: Encryption, access controls

### Activity 2: Employee Records
- Purpose: HR administration
- Categories of data subjects: Employees
- Categories of personal data: Employment details, financial information
- Recipients: HR department, payroll provider
- Retention period: 6 years after employment ends
- Security measures: Secure HR system, restricted access`;
    }
    else if (type === 'privacy-notice') {
      generatedText = `# Privacy Notice

## Introduction
[Company Name] is committed to protecting your personal data. This privacy notice explains how we collect, use, and protect your personal data.

## Information We Collect
- Contact details (name, email, phone number)
- Account information
- Usage data and cookies
- Payment information

## How We Use Your Information
- To provide our services to you
- To communicate with you about your account
- To improve our products and services
- To comply with legal obligations

## Your Rights
- Right to access your data
- Right to rectification
- Right to erasure
- Right to restrict processing
- Right to data portability
- Right to object

## Data Security
We have implemented appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.

## Contact Us
If you have any questions about this privacy notice or our data practices, please contact us at [email address].`;
    }
    
    // Append any custom requirements
    if (customReqs.trim()) {
      generatedText += `\n\n## Additional Requirements\n${customReqs}`;
    }
    
    setGeneratedDocument(generatedText);
  };

  const handleModifyDocument = async (instruction: string) => {
    if (!generatedDocument || !instruction.trim()) return;
    
    // Add thinking message
    setMessages(prev => [...prev, { 
      role: 'assistant', 
      content: 'Modifying document...' 
    }]);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Simple document modifications based on keywords
      let modifiedDocument = generatedDocument;
      
      // Special case: Generate privacy notice from RoPA
      if ((instruction.toLowerCase().includes('privacy notice') || 
           instruction.toLowerCase().includes('privacy policy')) &&
          uploadedRopaData) {
        modifiedDocument = generatePrivacyNoticeFromRopa(uploadedRopaData);
        setDocumentType('privacy-notice');
        
        // Update chat with completion message
        setMessages(prev => {
          // Remove the "modifying" message
          const filteredMessages = prev.filter(msg => msg.content !== 'Modifying document...');
          // Add the completion message
          return [...filteredMessages, { 
            role: 'assistant', 
            content: `I've generated a Privacy Notice based on the RoPA data. You can view it in the canvas on the right.` 
          }];
        });
        
        setGeneratedDocument(modifiedDocument);
        return;
      }
      
      if (instruction.toLowerCase().includes('add section')) {
        const sectionTitle = instruction
          .replace(/add section/i, '')
          .replace(/called|named|titled/i, '')
          .trim()
          .replace(/^['"]/g, '')
          .replace(/['"]$/g, '');
          
        modifiedDocument += `\n\n## ${sectionTitle}\n[Content for ${sectionTitle}]`;
      }
      
      if (instruction.toLowerCase().includes('remove section')) {
        const sectionToRemove = instruction
          .replace(/remove section/i, '')
          .trim()
          .replace(/^['"]/g, '')
          .replace(/['"]$/g, '');
          
        // Simple section removal (very basic implementation)
        const lines = modifiedDocument.split('\n');
        const filteredLines = lines.filter(line => 
          !line.toLowerCase().includes(`## ${sectionToRemove.toLowerCase()}`)
        );
        modifiedDocument = filteredLines.join('\n');
      }
      
      // Update document
      setGeneratedDocument(modifiedDocument);
      
      // Generate improvement suggestions
      const currentDocType = documentType || 'privacy-notice';
      const suggestions = generateImprovementSuggestions(modifiedDocument, currentDocType);
      
      // Update chat with completion message
      setMessages(prev => {
        // Remove the "modifying" message
        const filteredMessages = prev.filter(msg => msg.content !== 'Modifying document...');
        
        // Base message
        let responseMessage = `I've modified the document based on your instructions.`;
        
        // Add suggestions if any
        if (suggestions.length > 0) {
          responseMessage += "\n\nHere are some suggestions to improve your document:";
          suggestions.forEach(suggestion => {
            responseMessage += `\n- ${suggestion}`;
          });
        }
        
        // Add the completion message
        return [...filteredMessages, { 
          role: 'assistant', 
          content: responseMessage
        }];
      });
    } catch (error) {
      setMessages(prev => {
        // Remove the "modifying" message
        const filteredMessages = prev.filter(msg => msg.content !== 'Modifying document...');
        // Add error message
        return [...filteredMessages, { 
          role: 'assistant', 
          content: 'Sorry, there was an error modifying the document. Please try again.' 
        }];
      });
      
      toast({
        variant: "destructive",
        title: "Modification failed",
        description: "There was an error modifying your document. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (generatedDocument) {
      navigator.clipboard.writeText(generatedDocument);
      toast({
        title: "Copied to clipboard",
        description: "The document has been copied to your clipboard.",
      });
    }
  };

  const handleDownload = () => {
    if (generatedDocument) {
      const blob = new Blob([generatedDocument], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = documentType ? `${documentType}-document.md` : 'document.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Document downloaded",
        description: "Your document has been downloaded successfully.",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[calc(100vh-12rem)]">
      {/* Left side - Chat Interface */}
      <Card className="h-full flex flex-col">
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b">
            <Bot className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">AI Document Assistant</h2>
          </div>
          
          <ScrollArea className="flex-1 pr-4">
            <div className="flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'assistant' ? 'bg-muted/50 p-3 rounded-lg' : ''}`}>
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback>
                      {msg.role === 'assistant' ? 'AI' : 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className={`text-sm ${msg.role === 'user' ? 'font-medium' : ''}`}>
                      {msg.content}
                    </p>
                    {msg.file && (
                      <div className="mt-2 bg-secondary/30 text-xs p-2 rounded flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>{msg.file.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          </ScrollArea>
          
          <div className="mt-4 pt-4 border-t">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }} 
              className="flex gap-2 flex-col"
            >
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={uploadedRopaData ? "Ask me to create a Privacy Notice from your RoPA..." : "Ask for a DPIA, RoPA, or Privacy Notice..."}
                  disabled={isGenerating}
                  className="flex-1"
                />
                <input
                  type="file"
                  accept=".txt,.md,.doc,.docx"
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                  className="hidden"
                />
                <Button 
                  type="button" 
                  size="icon" 
                  variant="outline"
                  onClick={handleFileButtonClick}
                  disabled={isGenerating}
                  title="Upload document"
                >
                  <Upload className="h-4 w-4" />
                </Button>
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={isGenerating || !inputMessage.trim()}
                >
                  {isGenerating ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </form>
            
            {!generatedDocument && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-3">Suggested prompts:</p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs"
                    onClick={() => setInputMessage("Upload a RoPA and create a Privacy Notice")}
                  >
                    Upload a RoPA and create a Privacy Notice
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs" 
                    onClick={() => setInputMessage("Generate a RoPA for HR data")}
                  >
                    Generate a RoPA for HR data
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs" 
                    onClick={() => setInputMessage("Make a Privacy Notice for a mobile app")}
                  >
                    Make a Privacy Notice for a mobile app
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* Right side - Document Canvas */}
      <Card className="h-full flex flex-col">
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4 pb-4 border-b">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Document Canvas</h2>
              {documentType && <span className="text-xs bg-muted px-2 py-1 rounded">{getDocumentTypeName(documentType)}</span>}
            </div>
            
            {generatedDocument && (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleCopyToClipboard}>
                  Copy
                </Button>
                <Button size="sm" onClick={handleDownload}>
                  Download
                </Button>
              </div>
            )}
          </div>
          
          {!generatedDocument ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
              <FileText className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="font-medium text-lg mb-2">No Document Generated</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                Chat with the AI assistant to generate a document or upload a RoPA file to create a Privacy Notice.
              </p>
              
              <div className="mt-6 flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => setInputMessage("Create a Privacy Notice")}
                >
                  Start generating <ArrowRight className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={handleFileButtonClick}
                >
                  Upload RoPA <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <ScrollArea className="flex-1">
              <div className="prose max-w-none p-4 whitespace-pre-wrap font-mono text-sm">
                {generatedDocument}
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AiAgentCanvas;

