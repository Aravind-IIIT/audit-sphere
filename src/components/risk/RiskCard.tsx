
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, AlertCircle, Shield, CheckCircle2 } from "lucide-react";
import { Risk, RiskStatus } from "@/types";

interface RiskCardProps {
  risk: Risk;
  onUpdateStatus: (status: RiskStatus) => void;
}

export function RiskCard({ risk, onUpdateStatus }: RiskCardProps) {
  const getSeverityColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = () => {
    switch (risk.status) {
      case "identified":
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case "mitigated":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "accepted":
        return <AlertCircle className="h-5 w-5 text-muted-foreground" />;
      case "transferred":
        return <Shield className="h-5 w-5 text-primary" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-warning" />;
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="mt-1">{getStatusIcon()}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{risk.title}</h3>
              <Badge variant="outline" className={getSeverityColor(risk.severity)}>
                {risk.severity.charAt(0).toUpperCase() + risk.severity.slice(1)} Severity
              </Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{risk.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-muted">
                Impact: {risk.impact}
              </Badge>
              <Badge variant="outline" className="bg-muted">
                Likelihood: {risk.likelihood}
              </Badge>
            </div>
            {risk.mitigationPlan && (
              <div className="mt-2">
                <p className="text-xs font-medium">Mitigation Plan:</p>
                <p className="text-sm text-muted-foreground">{risk.mitigationPlan}</p>
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {risk.status !== "mitigated" && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => onUpdateStatus("mitigated")}
                >
                  Mark as Mitigated
                </Button>
              )}
              {risk.status !== "accepted" && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => onUpdateStatus("accepted")}
                >
                  Accept Risk
                </Button>
              )}
              {risk.status !== "transferred" && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => onUpdateStatus("transferred")}
                >
                  Transfer Risk
                </Button>
              )}
              {risk.status !== "identified" && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => onUpdateStatus("identified")}
                >
                  Mark as Identified
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
