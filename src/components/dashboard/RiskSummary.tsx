
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RiskSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-6 text-muted-foreground">
          Risk management has been moved to a dedicated section.
        </div>
      </CardContent>
    </Card>
  );
}
