
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CHART_CONFIG } from "@/data/chart-data";

interface TrendAnalysisChartProps {
  data: Array<{
    month: string;
    gdpr: number;
    ccpa: number;
    hipaa: number;
  }>;
}

export const TrendAnalysisChart: React.FC<TrendAnalysisChartProps> = ({ data }) => {
  return (
    <ChartContainer config={CHART_CONFIG} className="h-full">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis domain={[0, 100]} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="gdpr" 
          stroke="var(--color-gdpr)" 
          strokeWidth={2} 
          dot={{ r: 4 }}
          name="GDPR"
        />
        <Line 
          type="monotone" 
          dataKey="ccpa" 
          stroke="var(--color-ccpa)" 
          strokeWidth={2} 
          dot={{ r: 4 }}
          name="CCPA/CPRA"
        />
        <Line 
          type="monotone" 
          dataKey="hipaa" 
          stroke="var(--color-hipaa)" 
          strokeWidth={2} 
          dot={{ r: 4 }}
          name="HIPAA"
        />
      </LineChart>
    </ChartContainer>
  );
};
