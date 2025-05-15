
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { complianceScores } from "@/data/compliance-scores";

export const ComplianceImpact: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Compliance Impact</CardTitle>
        <CardDescription>
          How this policy affects your compliance with key regulations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {complianceScores.map((score) => (
            <div key={score.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
              <div>
                <p className="font-medium">{score.name}</p>
                <p className="text-sm text-muted-foreground">
                  {score.status === 'compliant' 
                    ? 'No impact on compliance status' 
                    : score.status === 'partial' 
                      ? 'May improve partial compliance status'
                      : 'Critical to address compliance gaps'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`text-xs px-2 py-1 rounded ${
                  score.status === 'compliant' 
                    ? 'bg-green-100 text-green-800' 
                    : score.status === 'partial' 
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-red-100 text-red-800'
                }`}>
                  {score.status === 'compliant' 
                    ? 'Compliant' 
                    : score.status === 'partial' 
                      ? 'Partially Compliant'
                      : 'Non-compliant'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
