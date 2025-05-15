
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Wand2 } from "lucide-react";

interface OverallScoreProps {
  previousScore: number;
  currentScore: number;
  improvement: number;
  onImprove: () => void;
  improving: boolean;
  hasNonCompliant: boolean;
}

const OverallScore: React.FC<OverallScoreProps> = ({
  previousScore,
  currentScore,
  improvement,
  onImprove,
  improving,
  hasNonCompliant
}) => {
  return (
    <div className="mb-4 p-6 border rounded-lg bg-card">
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">Overall GDPR Compliance Score</h4>
          {hasNonCompliant && (
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={onImprove}
              disabled={improving}
            >
              <Wand2 className="h-4 w-4" />
              {improving ? "Applying Improvements..." : "Auto-improve with AI"}
            </Button>
          )}
        </div>
        <Badge variant="secondary" className="flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          +{improvement}% Improvement
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Previous Score</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-muted-foreground">{previousScore}%</span>
            <Progress value={previousScore} className="h-3" />
          </div>
        </div>
        
        <div className="p-4 bg-background rounded-lg border-2 border-primary">
          <p className="text-sm text-primary mb-2">Current Score</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">{currentScore}%</span>
            <Progress value={currentScore} className="h-3" />
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        {currentScore >= 70 
          ? "Your policy now meets most GDPR requirements after improvements" 
          : "Your policy has improved but still needs some adjustments to fully meet GDPR requirements"}
      </p>
    </div>
  );
};

export default OverallScore;
