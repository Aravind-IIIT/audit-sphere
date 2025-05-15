
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingDown, TrendingUp } from "lucide-react";
import { riskCategories } from "@/data/predictive-data";

export function RiskCategoryBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Categories - Prediction Summary</CardTitle>
        <CardDescription>Projected risk levels by category over next 90 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {riskCategories.map((category) => {
            const isIncreasing = category.trend === "increasing";
            
            return (
              <div 
                key={category.id} 
                className="bg-muted/50 rounded-lg p-4 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium truncate">{category.name}</h4>
                  <div className="flex items-center text-xs font-medium">
                    {isIncreasing ? (
                      <>
                        <TrendingUp className="h-3 w-3 text-destructive mr-1" />
                        <span className="text-destructive">+{category.changeAmount}%</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className="h-3 w-3 text-emerald-600 mr-1" />
                        <span className="text-emerald-600">-{category.changeAmount}%</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Current</span>
                  <Progress 
                    value={category.currentScore} 
                    className="h-2 flex-1"
                  />
                  <span className="text-sm font-medium">{category.currentScore}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Predicted</span>
                  <Progress 
                    value={category.predictedScore} 
                    className={`h-2 flex-1 ${isIncreasing ? 'bg-red-100' : 'bg-green-100'}`}
                  />
                  <span className="text-sm font-medium">{category.predictedScore}%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{category.insights}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
