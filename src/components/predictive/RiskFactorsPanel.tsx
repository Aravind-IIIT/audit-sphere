
import { Progress } from "@/components/ui/progress";
import { riskFactors } from "@/data/predictive-data";

export function RiskFactorsPanel() {
  // Sort factors by influence (highest first)
  const sortedFactors = [...riskFactors].sort((a, b) => b.influence - a.influence);

  return (
    <div className="space-y-4">
      {sortedFactors.map((factor) => (
        <div key={factor.id} className="space-y-1">
          <div className="flex justify-between items-center">
            <div className="font-medium text-sm truncate flex-1">{factor.name}</div>
            <div className="text-sm text-muted-foreground">{factor.influence}%</div>
          </div>
          <Progress 
            value={factor.influence} 
            className={`h-2 ${
              factor.trend === 'increasing' ? 'bg-red-100' : 
              factor.trend === 'decreasing' ? 'bg-green-100' : 
              'bg-gray-100'
            }`}
          />
          <p className="text-xs text-muted-foreground">{factor.description}</p>
        </div>
      ))}
    </div>
  );
}
