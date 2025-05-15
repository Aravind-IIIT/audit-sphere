
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiskCard } from "@/components/risk/RiskCard";
import { RiskAssessmentForm } from "@/components/risk/RiskAssessmentForm";
import { assessments } from "@/data/assessments";
import { Risk } from "@/types";

const Risks = () => {
  // Extract all risks from all assessments
  const allRisks = assessments.flatMap(assessment => assessment.risks);
  
  const [risks, setRisks] = useState<Risk[]>(allRisks);
  
  // Handle adding a new risk
  const handleAddRisk = (risk: Omit<Risk, "id">) => {
    const newRisk: Risk = {
      ...risk,
      id: `r${risks.length + 1}`,
    };
    setRisks([...risks, newRisk]);
  };
  
  // Handle updating risk status
  const handleUpdateRiskStatus = (riskId: string, status: Risk["status"]) => {
    setRisks(
      risks.map(risk =>
        risk.id === riskId ? { ...risk, status } : risk
      )
    );
  };

  // Filter risks by status
  const identifiedRisks = risks.filter(risk => risk.status === "identified");
  const mitigatedRisks = risks.filter(risk => risk.status === "mitigated");
  const acceptedRisks = risks.filter(risk => risk.status === "accepted" || risk.status === "transferred");

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Risk Register</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track privacy risks across all assessments
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <RiskAssessmentForm onSaveRisk={handleAddRisk} />
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>All Risks</CardTitle>
                <CardDescription>
                  View and manage identified privacy risks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="identified">
                  <TabsList>
                    <TabsTrigger value="identified">
                      Identified ({identifiedRisks.length})
                    </TabsTrigger>
                    <TabsTrigger value="mitigated">
                      Mitigated ({mitigatedRisks.length})
                    </TabsTrigger>
                    <TabsTrigger value="accepted">
                      Accepted/Transferred ({acceptedRisks.length})
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="identified" className="mt-6">
                    <div className="space-y-4">
                      {identifiedRisks.map(risk => (
                        <RiskCard 
                          key={risk.id} 
                          risk={risk}
                          onUpdateStatus={(status) => handleUpdateRiskStatus(risk.id, status)}
                        />
                      ))}
                      {identifiedRisks.length === 0 && (
                        <div className="text-center py-10 text-muted-foreground">
                          No identified risks found
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="mitigated" className="mt-6">
                    <div className="space-y-4">
                      {mitigatedRisks.map(risk => (
                        <RiskCard 
                          key={risk.id} 
                          risk={risk}
                          onUpdateStatus={(status) => handleUpdateRiskStatus(risk.id, status)}
                        />
                      ))}
                      {mitigatedRisks.length === 0 && (
                        <div className="text-center py-10 text-muted-foreground">
                          No mitigated risks found
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="accepted" className="mt-6">
                    <div className="space-y-4">
                      {acceptedRisks.map(risk => (
                        <RiskCard 
                          key={risk.id} 
                          risk={risk}
                          onUpdateStatus={(status) => handleUpdateRiskStatus(risk.id, status)}
                        />
                      ))}
                      {acceptedRisks.length === 0 && (
                        <div className="text-center py-10 text-muted-foreground">
                          No accepted or transferred risks found
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Risks;
