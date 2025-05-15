
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RegulatoryUpdates } from "@/components/regulatory/RegulatoryUpdates";
import { RegulatorySourcesConfig } from "@/components/regulatory/RegulatorySourcesConfig";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AIComplianceAnimation } from "@/components/regulatory/RegulatoryAnimation.tsx";
import { Bell } from "lucide-react";

const RegulatoryIntelligence = () => {
  return (
    <AppLayout>
      <div className="flex items-center justify-between space-y-2 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Regulatory Intelligence</h1>
          <p className="text-muted-foreground">
            Monitor regulatory changes and receive updates and impact analysis
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>Configure Alerts</Button>
        </div>
      </div>

      <Alert className="mb-6">
        <Bell className="h-4 w-4" />
        <AlertTitle>New updates detected</AlertTitle>
        <AlertDescription>
          3 new regulatory updates have been detected in the last 24 hours. Review them below.
        </AlertDescription>
      </Alert>

      {/* Animation */}
      <div>
        <AIComplianceAnimation />
      </div>
      <Tabs defaultValue="updates" className="space-y-4">
        <TabsList>
          <TabsTrigger value="updates">Regulatory Updates</TabsTrigger>
          <TabsTrigger value="sources">Monitored Sources</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="updates" className="space-y-4">
          <RegulatoryUpdates />
        </TabsContent>
        <TabsContent value="sources" className="space-y-4">
          <RegulatorySourcesConfig />
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Change Analytics</CardTitle>
              <CardDescription>
                Visualize regulatory change trends and impact over time
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Analytics visualization coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default RegulatoryIntelligence;
