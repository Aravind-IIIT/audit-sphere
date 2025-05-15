
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const DiscoveryTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Source Discovery</CardTitle>
        <CardDescription>
          Automatically discover and suggest new regulatory sources based on your compliance profile
        </CardDescription>
      </CardHeader>
      <CardContent className="h-96 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Source discovery feature coming soon</p>
          <Button variant="outline">Run Discovery Scan</Button>
        </div>
      </CardContent>
    </Card>
  );
};
