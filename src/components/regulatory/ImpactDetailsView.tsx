
import { RegulationImpactDetail } from "./types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ImpactDetailsViewProps {
  policyImpact: RegulationImpactDetail;
  onCreateActionItems: () => void;
}

export const ImpactDetailsView = ({ policyImpact, onCreateActionItems }: ImpactDetailsViewProps) => {
  const navigate = useNavigate();

  const handleCreateTask = () => {
    onCreateActionItems();
    navigate("/tasks");
  };

  return (
    <Card className="border-primary border-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-md">Impact on {policyImpact.policyName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-1">Impact Description</h4>
          <p className="text-sm text-muted-foreground">{policyImpact.impactDescription}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-1">Suggested Changes</h4>
          <p className="text-sm text-muted-foreground">{policyImpact.suggestedChanges}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-1">Compliance Risk</h4>
            <p className="text-sm text-muted-foreground">{policyImpact.complianceRisk}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Implementation Effort</h4>
            <p className="text-sm text-muted-foreground">{policyImpact.implementationEffort}</p>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <Button onClick={handleCreateTask}>
            <ClipboardCheck className="mr-2 h-4 w-4" />
            Create Policy Update Task
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
