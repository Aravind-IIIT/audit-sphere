
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { toast } from "sonner";
import { mockRegulationUpdates } from "./mock-data";
import { RegulationUpdate, RegulatoryUpdateDetailProps } from "./types";
import { ImpactDetailsView } from "./ImpactDetailsView";
import { RegulationDetails } from "./RegulationDetails";
import { RegulationHeader } from "./RegulationHeader";

export const RegulatoryUpdates = () => {
  const [regulations] = useState(mockRegulationUpdates);
  const [selectedRegulation, setSelectedRegulation] = useState<string | null>(null);
  const [viewingPolicyImpact, setViewingPolicyImpact] = useState<{regulationId: string, policyName: string} | null>(null);
  const navigate = useNavigate();

  const handleViewDetails = (id: string) => {
    setSelectedRegulation(id === selectedRegulation ? null : id);
    setViewingPolicyImpact(null);
  };

  const handleViewPolicyImpact = (regulationId: string, policyName: string) => {
    setViewingPolicyImpact({regulationId, policyName});
  };

  const handleCreateActionItems = (regulationId: string) => {
    toast.success("Action items created based on regulatory update");
    navigate("/tasks");
  };

  const handleMarkAsReviewed = (regulationId: string) => {
    toast.success("Regulatory update marked as reviewed");
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Recent Regulatory Updates</CardTitle>
          <CardDescription>
            Detected changes in your monitored regulatory landscape
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Impact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {regulations.map((regulation) => (
                <TableRow key={regulation.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {regulation.status === "new" && (
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </div>
                      )}
                      {regulation.title}
                    </div>
                  </TableCell>
                  <TableCell>{regulation.source}</TableCell>
                  <TableCell>{regulation.date}</TableCell>
                  <TableCell>
                    {regulation.impactLevel === "high" ? (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        High
                      </Badge>
                    ) : regulation.impactLevel === "medium" ? (
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        Medium
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 flex items-center gap-1">
                        <Info className="h-3.5 w-3.5" />
                        Low
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {regulation.status === "new" ? (
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">New</Badge>
                    ) : regulation.status === "reviewed" ? (
                      <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Reviewed</Badge>
                    ) : (
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Actioned</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => handleViewDetails(regulation.id)}>
                      {selectedRegulation === regulation.id ? "Hide" : "Details"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedRegulation && (
        <RegulatoryUpdateDetail 
          regulation={regulations.find(r => r.id === selectedRegulation)!}
          onMarkAsReviewed={handleMarkAsReviewed}
          onCreateActionItems={handleCreateActionItems}
          onViewPolicyImpact={handleViewPolicyImpact}
          viewingPolicyImpact={viewingPolicyImpact}
        />
      )}
    </div>
  );
};

const RegulatoryUpdateDetail = ({ 
  regulation,
  onMarkAsReviewed,
  onCreateActionItems,
  onViewPolicyImpact,
  viewingPolicyImpact
}: RegulatoryUpdateDetailProps) => {
  const isPolicyImpactVisible = viewingPolicyImpact && 
    viewingPolicyImpact.regulationId === regulation.id && 
    regulation.impactDetails && 
    regulation.impactDetails.length > 0;
  
  const policyImpact = isPolicyImpactVisible ? 
    regulation.impactDetails.find(detail => 
      detail.policyName === viewingPolicyImpact?.policyName
    ) || null : null;

  return (
    <Card>
      <CardHeader>
        <RegulationHeader regulation={regulation} />
      </CardHeader>
      <CardContent className="space-y-4">
        {policyImpact ? (
          <ImpactDetailsView 
            policyImpact={policyImpact}
            onCreateActionItems={() => onCreateActionItems(regulation.id)}
          />
        ) : (
          <RegulationDetails 
            summary={regulation.summary}
            affectedPolicies={regulation.affectedPolicies}
            onViewPolicyImpact={(policy) => onViewPolicyImpact(regulation.id, policy)}
          />
        )}
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button 
            variant="outline"
            onClick={() => onMarkAsReviewed(regulation.id)}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Mark as Reviewed
          </Button>
          <Button onClick={() => onCreateActionItems(regulation.id)}>
            Create Action Items
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
