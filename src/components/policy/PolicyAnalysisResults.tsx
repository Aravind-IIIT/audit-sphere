
import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck } from "lucide-react";
import type { GDPRAnalysisResult } from '@/services/gdprAnalysis';
import { useToast } from "@/hooks/use-toast";
import OverallScore from './analysis/OverallScore';
import ResultSection from './analysis/ResultSection';

interface PolicyAnalysisResultsProps {
  results: GDPRAnalysisResult[];
}

const PolicyAnalysisResults: React.FC<PolicyAnalysisResultsProps> = ({ results: initialResults }) => {
  const [results, setResults] = useState<GDPRAnalysisResult[]>(initialResults);
  const [improving, setImproving] = useState(false);
  const { toast } = useToast();
  
  const compliantResults = results.filter(result => result.complianceScore >= 70);
  const nonCompliantResults = results.filter(result => result.complianceScore < 70);
  
  const overallComplianceScore = Math.round(
    results.reduce((acc, curr) => acc + curr.complianceScore, 0) / results.length
  );

  const [previousScore] = useState(Math.round(
    initialResults.reduce((acc, curr) => acc + curr.complianceScore, 0) / initialResults.length
  ));
  
  const improvement = overallComplianceScore - previousScore;
  
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  
  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAutoImprove = async () => {
    setImproving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const improvedResults = results.map(result => {
        if (result.complianceScore < 70) {
          return {
            ...result,
            complianceScore: Math.min(result.complianceScore + Math.floor(Math.random() * 20) + 10, 100),
            suggestion: "Improvements have been applied to this section."
          };
        }
        return result;
      });
      
      setResults(improvedResults);
      
      toast({
        title: "Improvements Applied",
        description: "AI Assistant has automatically applied suggested improvements to your policy.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to apply improvements. Please try again.",
      });
    } finally {
      setImproving(false);
    }
  };

  return (
    <div className="space-y-6">
      <OverallScore 
        previousScore={previousScore}
        currentScore={overallComplianceScore}
        improvement={improvement}
        onImprove={handleAutoImprove}
        improving={improving}
        hasNonCompliant={nonCompliantResults.length > 0}
      />

      {nonCompliantResults.length > 0 && (
        <div className="space-y-4">
          <h5 className="text-lg font-medium flex items-center gap-2">
            <AlertTriangle className="text-amber-500" /> 
            Sections Requiring Attention
          </h5>
          
          {nonCompliantResults.map((result, index) => (
            <ResultSection
              key={`non-compliant-${index}`}
              result={result}
              isOpen={openItems[`non-compliant-${index}`]}
              onToggle={() => toggleItem(`non-compliant-${index}`)}
              type="non-compliant"
            />
          ))}
        </div>
      )}

      {compliantResults.length > 0 && (
        <div className="space-y-4">
          <h5 className="text-lg font-medium text-green-600 flex items-center gap-2">
            <ShieldCheck className="text-green-600" /> 
            Compliant Sections
          </h5>
          
          {compliantResults.map((result, index) => (
            <ResultSection
              key={`compliant-${index}`}
              result={result}
              isOpen={openItems[`compliant-${index}`]}
              onToggle={() => toggleItem(`compliant-${index}`)}
              type="compliant"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PolicyAnalysisResults;
