
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { CHART_CONFIG, CHART_COLORS } from "@/data/chart-data";

interface TaskStatusChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
}

export const TaskStatusChart: React.FC<TaskStatusChartProps> = ({ data }) => {
  return (
    <ChartContainer config={CHART_CONFIG} className="h-full">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ChartContainer>
  );
};
