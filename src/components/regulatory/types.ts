
export interface RegulationImpactDetail {
  policyName: string;
  impactDescription: string;
  suggestedChanges: string;
  complianceRisk: string;
  implementationEffort: string;
}

export interface RegulationUpdate {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  impactLevel: "high" | "medium" | "low";
  affectedPolicies: string[];
  status: "new" | "reviewed" | "actioned";
  impactDetails: RegulationImpactDetail[];
}

export interface RegulatoryUpdateDetailProps {
  regulation: RegulationUpdate;
  onMarkAsReviewed: (id: string) => void;
  onCreateActionItems: (id: string) => void;
  onViewPolicyImpact: (regulationId: string, policyName: string) => void;
  viewingPolicyImpact: {regulationId: string, policyName: string} | null;
}
