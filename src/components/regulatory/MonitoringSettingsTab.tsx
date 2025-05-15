
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MonitoringSettingsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monitoring Settings</CardTitle>
        <CardDescription>
          Configure how the sources are monitored and processed
        </CardDescription>
      </CardHeader>
      <CardContent className="h-96 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Advanced monitoring settings coming soon</p>
          <Button variant="outline">Configure</Button>
        </div>
      </CardContent>
    </Card>
  );
};
