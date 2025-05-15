
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface PredictionConfidenceCardProps {
  title: string;
  subtitle?: string;
  value: number;
  valueClassName?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function PredictionConfidenceCard({
  title,
  subtitle,
  value,
  valueClassName,
  trend,
}: PredictionConfidenceCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <span className={cn("text-3xl font-bold", valueClassName)}>
                {value}
              </span>
              {subtitle && <span className="ml-1 text-sm text-muted-foreground">{subtitle}</span>}
            </div>
            {trend && (
              <div
                className={cn(
                  "flex items-center gap-1 text-xs font-medium",
                  trend.isPositive
                    ? "text-emerald-600"
                    : "text-destructive"
                )}
              >
                {trend.isPositive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>{trend.value}%</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
