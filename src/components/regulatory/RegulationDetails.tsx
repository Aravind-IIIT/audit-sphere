
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RegulationDetailsProps {
  summary: string;
  affectedPolicies: string[];
  onViewPolicyImpact: (policy: string) => void;
}

export const RegulationDetails = ({ summary, affectedPolicies, onViewPolicyImpact }: RegulationDetailsProps) => {
  return (
    <>
      <div>
        <h4 className="text-sm font-medium mb-2">Key Requirements</h4>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
          <li>Organizations must update processor agreements to include approved transfer mechanisms</li>
          <li>Mandatory risk assessment for all international data transfers</li>
          <li>Implement additional technical safeguards for cloud-based processing</li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2">Affected Policies</h4>
        <div className="space-y-2">
          {affectedPolicies.map((policy, index) => (
            <div key={index} className="flex items-center justify-between text-sm border p-2 rounded-md">
              <span>{policy}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-7"
                onClick={() => onViewPolicyImpact(policy)}
              >
                View Impact <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
