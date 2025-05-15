
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Download, BarChart2, PieChart as PieChartIcon, Shield } from "lucide-react";
import { assessments } from "@/data/assessments";
import ComplianceScoreCard from "@/components/reports/ComplianceScoreCard";
import { complianceScores } from "@/data/compliance-scores";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Reports = () => {
  // Generate report data based on assessments
  const assessmentsByType = [
    { name: "DPIA", value: assessments.filter(a => a.type === "DPIA").length },
    { name: "PIA", value: assessments.filter(a => a.type === "PIA").length }
  ];

  const assessmentsByStatus = [
    { name: "Draft", value: assessments.filter(a => a.status === "draft").length },
    { name: "In Progress", value: assessments.filter(a => a.status === "inProgress").length },
    { name: "Completed", value: assessments.filter(a => a.status === "completed").length },
    { name: "Archived", value: assessments.filter(a => a.status === "archived").length }
  ];

  // Extract all risks from all assessments
  const allRisks = assessments.flatMap(assessment => assessment.risks);
  
  const risksByStatus = [
    { name: "Identified", value: allRisks.filter(r => r.status === "identified").length },
    { name: "Mitigated", value: allRisks.filter(r => r.status === "mitigated").length },
    { name: "Accepted", value: allRisks.filter(r => r.status === "accepted").length },
    { name: "Transferred", value: allRisks.filter(r => r.status === "transferred").length }
  ];

  // Colors for charts
  const COLORS = ["#3182CE", "#38B2AC", "#9F7AEA", "#ED8936"];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
            <p className="text-muted-foreground mt-1">
              Analyze your privacy assessment data
            </p>
          </div>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Reports
          </Button>
        </div>

        {/* New Compliance Score Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Compliance Scores
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {complianceScores.map((score) => (
              <ComplianceScoreCard key={score.id} data={score} />
            ))}
          </div>
        </section>

        <Tabs defaultValue="charts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="charts">Charts & Analytics</TabsTrigger>
            <TabsTrigger value="assessments">Assessment Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="charts" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Assessment Status</CardTitle>
                    <CardDescription>
                      Distribution of assessments by status
                    </CardDescription>
                  </div>
                  <BarChart2 className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={assessmentsByStatus}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3182CE" name="Count" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Assessment Types</CardTitle>
                    <CardDescription>
                      Distribution of assessments by type
                    </CardDescription>
                  </div>
                  <PieChartIcon className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={assessmentsByType}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {assessmentsByType.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Risk Management Overview</CardTitle>
                  <CardDescription>
                    Distribution of identified risks by status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={risksByStatus}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#9F7AEA" name="Count">
                          {risksByStatus.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="assessments">
            <Card>
              <CardHeader>
                <CardTitle>Regulation Assessment Reports</CardTitle>
                <CardDescription>
                  Detailed reports for each regulatory framework
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceScores.map((score) => (
                    <div key={score.id} className="border rounded-md p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            score.status === 'compliant' ? 'bg-green-500' : 
                            score.status === 'partial' ? 'bg-amber-500' : 
                            'bg-red-500'
                          }`}></div>
                          <h3 className="font-medium">{score.name} Assessment Report</h3>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Last updated: {score.lastAssessed.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        <p>Overall compliance: {score.score}%</p>
                        <p>Status: {score.status === 'compliant' ? 'Compliant' : score.status === 'partial' ? 'Partially Compliant' : 'Non-Compliant'}</p>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm">View Report</Button>
                        <Button variant="outline" size="sm">Download PDF</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Reports;
