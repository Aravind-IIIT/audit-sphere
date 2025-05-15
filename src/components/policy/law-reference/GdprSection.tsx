
import React from 'react';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface GdprSectionProps {
  id: number;
  title: string;
  icon: React.ReactNode;
  purpose: string;
  importance: string;
  criteria: string;
  reference: string;
}

const GdprSection = ({
  id,
  title,
  icon,
  purpose,
  importance,
  criteria,
  reference
}: GdprSectionProps) => {
  return (
    <AccordionItem 
      value={id.toString()}
      className="border rounded-lg px-6 py-2 hover:bg-secondary/50 transition-colors data-[state=open]:bg-secondary/50"
    >
      <AccordionTrigger className="hover:no-underline">
        <div className="flex items-center gap-4">
          <div>{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-4">
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold">Purpose:</h4>
            <p className="text-muted-foreground">{purpose}</p>
          </div>
          
          <div>
            <h4 className="font-semibold">Importance:</h4>
            <p className="text-muted-foreground">{importance}</p>
          </div>
          
          <div>
            <h4 className="font-semibold">Criteria:</h4>
            <p className="text-muted-foreground">{criteria}</p>
          </div>
          
          <div>
            <h4 className="font-semibold">Reference:</h4>
            <p className="text-muted-foreground">{reference}</p>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default GdprSection;
