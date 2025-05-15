
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { SuggestionRow } from "./suggestions/SuggestionRow";
import { SuggestionDetail } from "./suggestions/SuggestionDetail";
import { PolicySuggestion, SuggestionStatus } from "./suggestions/types";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const mockPolicySuggestions: PolicySuggestion[] = [
  {
    id: "1",
    type: "policy", // Changed from string to literal "policy"
    name: "Data Processing Agreement",
    suggestedChanges: "Update Section 5.3 with new standard contractual clauses reference and requirements",
    regulation: "GDPR Article 28 Amendment",
    regulationUrl: "#",
    impacts: ["Data transfers", "Processor obligations"],
    suggestedAt: "2025-04-12",
    status: "pending",
    relatedControls: ["DPC-001", "DPC-002"]
  },
  {
    id: "2",
    type: "control", // Changed from string to literal "control"
    name: "Data Transfer Control",
    controlId: "DPC-001",
    suggestedChanges: "Implement new technical measures for data transfer monitoring",
    regulation: "GDPR Article 28 Amendment",
    regulationUrl: "#",
    impacts: ["Data transfers", "Monitoring"],
    suggestedAt: "2025-04-12",
    status: "pending"
  },
  {
    id: "3",
    type: "control", // Changed from string to literal "control"
    name: "Processor Audit Control",
    controlId: "DPC-002",
    suggestedChanges: "Add quarterly processor audit requirement with specific focus on transfer mechanisms",
    regulation: "GDPR Article 28 Amendment",
    regulationUrl: "#",
    impacts: ["Processor oversight", "Compliance monitoring"],
    suggestedAt: "2025-04-12",
    status: "pending"
  },
  // Additional accepted suggestions
  {
    id: "4",
    type: "policy",
    name: "Data Breach Response Plan",
    suggestedChanges: "Update notification timeline from 72 to 48 hours for UK breaches",
    regulation: "UK Data Protection Act Amendment",
    regulationUrl: "#",
    impacts: ["Incident response", "Breach notification"],
    suggestedAt: "2025-04-08",
    status: "accepted",
    relatedControls: ["IR-001"]
  },
  {
    id: "5",
    type: "control",
    name: "Breach Escalation Protocol",
    controlId: "IR-001",
    suggestedChanges: "Revise escalation timelines to accommodate faster notification requirements",
    regulation: "UK Data Protection Act Amendment",
    regulationUrl: "#",
    impacts: ["Incident response", "Escalation procedures"],
    suggestedAt: "2025-04-08",
    status: "accepted"
  },
  // Additional rejected suggestions
  {
    id: "6",
    type: "policy",
    name: "Privacy Notice",
    suggestedChanges: "Add section on automated decision-making and profiling rights",
    regulation: "California Privacy Rights Act Update",
    regulationUrl: "#",
    impacts: ["Consumer disclosures", "Automated processing"],
    suggestedAt: "2025-04-10",
    status: "rejected",
  }
];

interface PolicySuggestionsProps {
  status: SuggestionStatus;
}

export const PolicySuggestions = ({ status }: PolicySuggestionsProps) => {
  const [suggestions] = useState(mockPolicySuggestions.filter(s => s.status === status));
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleViewDetails = (id: string) => {
    setSelectedSuggestion(id === selectedSuggestion ? null : id);
  };

  const handleAccept = (id: string) => {
    toast.success("Change suggestion accepted and will be applied to the policy", {
      description: "The policy has been updated with the suggested changes."
    });
    // In a real app, we would update the status in the backend
  };

  const handleReject = (id: string) => {
    toast.info("Change suggestion rejected", {
      description: "The suggestion has been marked as rejected and will not be applied."
    });
    // In a real app, we would update the status in the backend
  };

  const handleRegenerate = (id: string) => {
    toast.info("Regenerating policy suggestion...", {
      description: "Analyzing regulatory requirements to generate an improved suggestion."
    });
    // In a real app, we would regenerate the suggestion
  };

  const handleViewRegulation = () => {
    navigate("/regulatory-intelligence");
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>
                {status === "pending" ? "Pending Updates" : 
                 status === "accepted" ? "Accepted Updates" :
                 "Rejected Updates"}
              </CardTitle>
              <CardDescription>
                {status === "pending" ? "Review suggested updates for policies and controls" : 
                 status === "accepted" ? "Updates that have been accepted and applied" :
                 "Updates that have been rejected"}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Filter
              </Button>
              <Button variant="outline" size="sm">
                Sort
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Suggested Change</TableHead>
                <TableHead>Based On</TableHead>
                <TableHead>Date</TableHead>
                {status === "pending" && <TableHead className="text-right">Actions</TableHead>}
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suggestions.length > 0 ? (
                suggestions.map((suggestion) => (
                  <SuggestionRow
                    key={suggestion.id}
                    suggestion={suggestion}
                    status={status}
                    onAccept={handleAccept}
                    onReject={handleReject}
                    onRegenerate={handleRegenerate}
                    onViewDetails={handleViewDetails}
                    isSelected={selectedSuggestion === suggestion.id}
                  />
                ))
              ) : (
                <TableRow>
                  <TableHead colSpan={status === "pending" ? 7 : 6} className="text-center h-24 text-muted-foreground">
                    No {status} suggestions found
                  </TableHead>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedSuggestion && (
        <SuggestionDetail 
          suggestion={suggestions.find(s => s.id === selectedSuggestion)!}
          onAccept={handleAccept}
          onReject={handleReject}
          onRegenerate={handleRegenerate}
          onViewRegulation={handleViewRegulation}
          status={status}
        />
      )}
    </div>
  );
};
