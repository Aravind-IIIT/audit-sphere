
import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ShieldCheck, ShieldX, AlertTriangle, ChevronDown } from "lucide-react";
import type { GDPRAnalysisResult } from '@/services/gdprAnalysis';

interface ResultSectionProps {
  result: GDPRAnalysisResult;
  isOpen: boolean;
  onToggle: () => void;
  type: 'compliant' | 'non-compliant';
}

const ResultSection: React.FC<ResultSectionProps> = ({ result, isOpen, onToggle, type }) => {
  const Icon = type === 'compliant' 
    ? ShieldCheck 
    : result.complianceScore < 50 
      ? ShieldX 
      : AlertTriangle;
  
  const iconColor = type === 'compliant' 
    ? 'text-green-600' 
    : result.complianceScore < 50 
      ? 'text-red-500' 
      : 'text-amber-500';

  return (
    <Collapsible 
      open={isOpen}
      onOpenChange={onToggle}
      className="border rounded-lg overflow-hidden"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50">
        <div className="flex items-center gap-2">
          <Icon className={`h-5 w-5 ${iconColor} flex-shrink-0`} />
          <div>
            <span className="font-medium">{result.section}</span>
            <span className={`ml-2 ${
              type === 'compliant' ? 'text-green-600' : result.complianceScore < 50 ? 'text-red-500' : 'text-amber-500'
            }`}>
              {result.complianceScore}%
            </span>
          </div>
        </div>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 flex-shrink-0" 
          style={{ transform: isOpen ? 'rotate(180deg)' : '' }} />
      </CollapsibleTrigger>
      
      <CollapsibleContent>
        <div className="p-4 pt-0 border-t">
          <Progress value={result.complianceScore} className="h-2 mt-2 mb-3" />
          <p className="mb-2">{result.details}</p>
          <p className="font-medium">Improvement Suggestions:</p>
          <p className="mb-2">{result.suggestion}</p>
          {result.criticalIssues && (
            <div>
              <p className="font-semibold mt-2">Critical Issues:</p>
              <ul className="list-disc list-inside">
                {result.criticalIssues.map((issue, i) => (
                  <li key={i}>{issue}</li>
                ))}
              </ul>
            </div>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="mt-2">
                  Learn More
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Additional guidance for {result.section} compliance</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ResultSection;
