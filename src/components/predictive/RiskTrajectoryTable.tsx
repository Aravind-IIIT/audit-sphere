
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import { riskTrajectories } from "@/data/predictive-data";

export function RiskTrajectoryTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Risk Category</TableHead>
            <TableHead>Current Score</TableHead>
            <TableHead>Predicted Score</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Confidence</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {riskTrajectories.map((risk) => {
            const isIncreasing = risk.predictedScore > risk.currentScore;
            const changeAmount = Math.abs(risk.predictedScore - risk.currentScore);
            
            return (
              <TableRow key={risk.id}>
                <TableCell className="font-medium flex items-center gap-2">
                  {risk.needsAttention && <AlertTriangle className="h-4 w-4 text-amber-500" />}
                  {risk.name}
                </TableCell>
                <TableCell>{risk.currentScore}</TableCell>
                <TableCell>{risk.predictedScore}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {isIncreasing ? (
                      <TrendingUp className="h-4 w-4 text-destructive" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-emerald-600" />
                    )}
                    <span className={isIncreasing ? "text-destructive" : "text-emerald-600"}>
                      {isIncreasing ? "+" : "-"}{changeAmount}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={risk.confidence >= 75 ? "default" : "outline"}>
                    {risk.confidence}%
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
