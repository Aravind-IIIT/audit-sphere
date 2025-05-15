
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CHART_CONFIG } from "@/data/chart-data";

interface ComplianceScoreChartProps {
  data: Array<{
    name: string;
    score: number;
    status: string;
  }>;
}

export const ComplianceScoreChart: React.FC<ComplianceScoreChartProps> = ({ data }) => {
  return (
    <ChartContainer config={CHART_CONFIG} className="h-full">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar 
          dataKey="score" 
          fill="var(--color-score)" 
          radius={[4, 4, 0, 0]}
          name="Compliance Score"
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={entry.status === 'compliant' ? '#10B981' : entry.status === 'partial' ? '#F59E0B' : '#EF4444'} 
            />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};
