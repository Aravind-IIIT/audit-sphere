
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiskPredictionChart } from "@/components/predictive/RiskPredictionChart";
import { RiskFactorsPanel } from "@/components/predictive/RiskFactorsPanel";
import { RiskTrajectoryTable } from "@/components/predictive/RiskTrajectoryTable";
import { PredictionConfidenceCard } from "@/components/predictive/PredictionConfidenceCard";
import { RiskCategoryBreakdown } from "@/components/predictive/RiskCategoryBreakdown";
import { AIInsightsPanel } from "@/components/predictive/AIInsightsPanel";
import { Info, RefreshCw } from "lucide-react";

const PredictiveRiskAnalytics = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Predictive Risk Analytics</h1>
            <p className="text-muted-foreground mt-1">
              AI-powered analysis and prediction of future risk trends
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <RefreshCw className="h-4 w-4" />
              Refresh Analysis
            </Button>
            <Button size="sm">
              Generate Risk Report
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <PredictionConfidenceCard 
            title="Overall Prediction Confidence"
            value={78}
            trend={{
              value: 3,
              isPositive: true
            }}
          />
          <PredictionConfidenceCard 
            title="Data Quality Score"
            value={82}
            trend={{
              value: 5,
              isPositive: true
            }}
          />
          <PredictionConfidenceCard 
            title="Time Horizon"
            value={90}
            subtitle="Days"
            trend={{
              value: 0,
              isPositive: true
            }}
            valueClassName="text-[#3182CE]"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Risk Trajectory Forecast</CardTitle>
                <CardDescription>
                  Predicted risk levels over the next 90 days
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                <Info className="h-4 w-4" />
                <span>How it works</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <RiskPredictionChart />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Risk Factors</CardTitle>
              <CardDescription>Influential factors in predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <RiskFactorsPanel />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="categories" className="space-y-4">
          <TabsList>
            <TabsTrigger value="categories">Risk Categories</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="trajectories">Detailed Trajectories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories" className="space-y-4">
            <RiskCategoryBreakdown />
          </TabsContent>
          
          <TabsContent value="insights" className="space-y-4">
            <AIInsightsPanel />
          </TabsContent>
          
          <TabsContent value="trajectories" className="space-y-4">
            <RiskTrajectoryTable />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default PredictiveRiskAnalytics;
