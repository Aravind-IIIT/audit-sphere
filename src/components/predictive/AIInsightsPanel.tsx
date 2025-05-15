
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, AlertTriangle, TrendingDown, TrendingUp, Sparkles } from "lucide-react";
import { aiInsights } from "@/data/predictive-data";

export function AIInsightsPanel() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <CardTitle>AI Generated Risk Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {aiInsights.map((insight, index) => {
            // Get the appropriate icon component based on insight type
            let IconComponent;
            let iconColor;
            
            if (insight.type === 'alert') {
              IconComponent = AlertTriangle;
              iconColor = 'text-amber-500';
            } else if (insight.type === 'trend-up') {
              IconComponent = TrendingUp;
              iconColor = 'text-destructive';
            } else if (insight.type === 'trend-down') {
              IconComponent = TrendingDown;
              iconColor = 'text-emerald-600';
            } else {
              IconComponent = Lightbulb;
              iconColor = 'text-blue-500';
            }
            
            return (
              <div key={index} className="flex gap-3 pb-4 border-b last:border-b-0 last:pb-0">
                <div className={`mt-1 ${iconColor}`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-medium">{insight.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                  {insight.recommendation && (
                    <div className="mt-2 text-sm bg-muted/50 p-2 rounded-md">
                      <span className="font-medium">Recommendation:</span> {insight.recommendation}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
