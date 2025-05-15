
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { riskPredictionData } from "@/data/predictive-data";

const CHART_CONFIG = {
  current: { label: "Current Risk", theme: { light: "#3182CE", dark: "#4299E1" } },
  predicted: { label: "Predicted Risk", theme: { light: "#9F7AEA", dark: "#B794F4" } },
  threshold: { label: "Threshold", theme: { light: "#F05252", dark: "#F05252" } }
};

export function RiskPredictionChart() {
  return (
    <ChartContainer config={CHART_CONFIG} className="h-full">
      <LineChart data={riskPredictionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="date" 
          tickLine={false}
          axisLine={false}
          tickFormatter={(date) => {
            return new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
          }}
        />
        <YAxis 
          tickLine={false} 
          axisLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        <Line
          name="Current Risk"
          type="monotone"
          dataKey="current"
          stroke="var(--color-current)"
          activeDot={{ r: 8 }}
          strokeWidth={2}
          dot={{ strokeWidth: 2 }}
        />
        <Line
          name="Predicted Risk"
          type="monotone"
          dataKey="predicted"
          stroke="var(--color-predicted)"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={false}
        />
        <Line
          name="Threshold"
          type="monotone"
          dataKey="threshold"
          stroke="var(--color-threshold)"
          strokeWidth={1}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
