
import React from 'react';
import { AlertCircle, FileText } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle } from 'lucide-react';

interface PolicyImpactAnalysisProps {
  affectedPolicies: string[];
  autoUpdatesEnabled: boolean;
  onToggleAutoUpdates: () => void;
  onApplyUpdates: () => void;
}

export const PolicyImpactAnalysis: React.FC<PolicyImpactAnalysisProps> = ({
  affectedPolicies,
  autoUpdatesEnabled,
  onToggleAutoUpdates,
  onApplyUpdates,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-warning" />
          Affected Policies
        </CardTitle>
        <CardDescription>
          The following internal policies need to be updated
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {affectedPolicies.map((policy, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span>{policy}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                  Updates Required
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <Button 
            variant={autoUpdatesEnabled ? "default" : "outline"} 
            onClick={onToggleAutoUpdates}
            className="w-full sm:w-auto"
          >
            {autoUpdatesEnabled ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Auto-Updates Enabled
              </>
            ) : (
              "Enable Auto-Updates"
            )}
          </Button>
          <Button 
            variant="default" 
            onClick={onApplyUpdates}
            className="w-full sm:w-auto"
          >
            Apply Policy Updates
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
