
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Shield, ShieldAlert, ShieldCheck, ArrowRight } from "lucide-react";
import { complianceScores } from "@/data/compliance-scores";
import { Link } from "react-router-dom";

export function ComplianceOverview() {
  return (
    <Card className="hover:border-primary/20 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Compliance Overview</CardTitle>
        <Link 
          to="/reports" 
          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
        >
          View Reports
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {complianceScores.map((score) => (
            <Link 
              key={score.id}
              to="/reports"
              className="block group hover:bg-muted/50 rounded-lg p-3 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {score.status === 'compliant' ? (
                    <ShieldCheck className="h-5 w-5 text-success" />
                  ) : score.status === 'partial' ? (
                    <ShieldAlert className="h-5 w-5 text-warning" />
                  ) : (
                    <Shield className="h-5 w-5 text-destructive" />
                  )}
                  <span className="font-medium">{score.name}</span>
                </div>
                <Badge 
                  variant="outline" 
                  className={`
                    ${score.status === 'compliant' ? 'bg-success/10 text-success border-success/20' : 
                      score.status === 'partial' ? 'bg-warning/10 text-warning border-warning/20' : 
                      'bg-destructive/10 text-destructive border-destructive/20'}
                  `}
                >
                  {score.score}%
                </Badge>
              </div>
              <Progress 
                value={score.score} 
                className={`h-2 ${
                  score.status === 'compliant' ? 'bg-success/20' : 
                  score.status === 'partial' ? 'bg-warning/20' : 
                  'bg-destructive/20'
                }`}
              />
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  {score.keyRequirements.filter(req => req.status === 'passed').length} of {score.keyRequirements.length} requirements met
                </p>
                <span className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  View Details
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
