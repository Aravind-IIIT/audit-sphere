
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComplianceScoreChart } from "./charts/ComplianceScoreChart";
import { TrendAnalysisChart } from "./charts/TrendAnalysisChart";
import { RequirementsChart } from "./charts/RequirementsChart";
import { TaskStatusChart } from "./charts/TaskStatusChart";
import { complianceScores } from "@/data/compliance-scores";
import { trendData, taskStatusData } from "@/data/chart-data";

const prepareComplianceData = () => {
  return complianceScores.map(score => ({
    name: score.name,
    score: score.score,
    metRequirements: score.keyRequirements.filter(req => req.status === 'passed').length,
    totalRequirements: score.keyRequirements.length,
    status: score.status
  }));
};

export const PolicyComplianceGraph = () => {
  const [activeTab, setActiveTab] = useState('score');
  const complianceData = prepareComplianceData();
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
      <TabsList className="grid grid-cols-4">
        <TabsTrigger value="score">Compliance Scores</TabsTrigger>
        <TabsTrigger value="trend">Trend Analysis</TabsTrigger>
        <TabsTrigger value="requirements">Requirements Met</TabsTrigger>
        <TabsTrigger value="tasks">Task Status</TabsTrigger>
      </TabsList>
      
      <TabsContent value="score" className="h-[calc(100%-40px)]">
        <ComplianceScoreChart data={complianceData} />
      </TabsContent>
      
      <TabsContent value="trend" className="h-[calc(100%-40px)]">
        <TrendAnalysisChart data={trendData} />
      </TabsContent>
      
      <TabsContent value="requirements" className="h-[calc(100%-40px)]">
        <RequirementsChart data={complianceData} />
      </TabsContent>
      
      <TabsContent value="tasks" className="h-[calc(100%-40px)]">
        <TaskStatusChart data={taskStatusData} />
      </TabsContent>
    </Tabs>
  );
};
