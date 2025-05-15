
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CHART_CONFIG } from "@/data/chart-data";

interface RequirementsChartProps {
  data: Array<{
    name: string;
    metRequirements: number;
    totalRequirements: number;
  }>;
}

export const RequirementsChart: React.FC<RequirementsChartProps> = ({ data }) => {
  return (
    <ChartContainer config={CHART_CONFIG} className="h-full">
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={[0, 'dataMax']} />
        <YAxis dataKey="name" type="category" width={80} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar 
          dataKey="metRequirements" 
          stackId="a" 
          fill="#10B981" 
          name="Requirements Met"
        />
        <Bar 
          dataKey="totalRequirements" 
          stackId="a" 
          fill="#E5E7EB" 
          name="Total Requirements"
        />
      </BarChart>
    </ChartContainer>
  );
};
