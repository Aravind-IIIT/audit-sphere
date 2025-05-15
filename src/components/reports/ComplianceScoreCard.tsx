
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export interface ComplianceScore {
  id: string;
  name: string;
  score: number;
  status: 'compliant' | 'partial' | 'non-compliant';
  lastAssessed: Date;
  keyRequirements: {
    id: string;
    name: string;
    status: 'passed' | 'failed' | 'warning';
    details: string;
  }[];
  recommendations: string[];
}

interface ComplianceScoreCardProps {
  data: ComplianceScore;
}

const ComplianceScoreCard: React.FC<ComplianceScoreCardProps> = ({ data }) => {
  const getStatusColor = (status: ComplianceScore['status']) => {
    switch (status) {
      case 'compliant': return 'text-green-500';
      case 'partial': return 'text-amber-500';
      case 'non-compliant': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  const getRequirementIcon = (status: 'passed' | 'failed' | 'warning') => {
    switch (status) {
      case 'passed': return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'failed': return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-amber-500" />;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{data.name}</CardTitle>
          <span 
            className={`text-sm font-medium rounded-full px-2.5 py-0.5 ${
              data.status === 'compliant' ? 'bg-green-100 text-green-800' : 
              data.status === 'partial' ? 'bg-amber-100 text-amber-800' : 
              'bg-red-100 text-red-800'
            }`}
          >
            {data.status === 'compliant' ? 'Compliant' : 
             data.status === 'partial' ? 'Partially Compliant' : 
             'Non-Compliant'}
          </span>
        </div>
        <CardDescription>
          Last assessed: {data.lastAssessed.toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Compliance Score</h4>
            <span className={`font-bold ${getStatusColor(data.status)}`}>{data.score}%</span>
          </div>
          <Progress value={data.score} className="h-2.5" />
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium">Key Requirements</h4>
          <ul className="space-y-2">
            {data.keyRequirements.map((req) => (
              <li key={req.id} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5">{getRequirementIcon(req.status)}</span>
                <div>
                  <p className="font-medium">{req.name}</p>
                  <p className="text-muted-foreground text-xs">{req.details}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {data.recommendations.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Recommendations</h4>
            <ul className="space-y-1 text-sm">
              {data.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button asChild variant="outline" className="w-full">
          <Link to={`/assessments?regulation=${data.id}`}>
            View Assessment Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ComplianceScoreCard;
