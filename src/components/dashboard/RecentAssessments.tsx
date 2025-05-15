
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCheck, FileClock, FileX } from "lucide-react";
import { assessments } from "@/data/assessments";
import { Assessment } from "@/types";
import { Link } from "react-router-dom";

export function RecentAssessments() {
  const recentAssessments = [...assessments]
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
    .slice(0, 5);

  const getStatusIcon = (status: Assessment["status"]) => {
    switch (status) {
      case "completed":
        return <FileCheck className="h-4 w-4 text-success" />;
      case "inProgress":
        return <FileClock className="h-4 w-4 text-warning" />;
      case "draft":
        return <FileClock className="h-4 w-4 text-muted-foreground" />;
      case "archived":
        return <FileX className="h-4 w-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: Assessment["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            Completed
          </Badge>
        );
      case "inProgress":
        return (
          <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
            In Progress
          </Badge>
        );
      case "draft":
        return (
          <Badge variant="outline" className="bg-muted text-muted-foreground">
            Draft
          </Badge>
        );
      case "archived":
        return (
          <Badge variant="outline" className="bg-muted text-muted-foreground">
            Archived
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Assessments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentAssessments.map((assessment) => (
            <div
              key={assessment.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-center">
                <div className="mr-3">{getStatusIcon(assessment.status)}</div>
                <div>
                  <Link
                    to={`/assessments/${assessment.id}`}
                    className="font-medium hover:underline"
                  >
                    {assessment.name}
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {assessment.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Updated{" "}
                      {assessment.updatedAt.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-2 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${assessment.progress}%` }}
                  ></div>
                </div>
                {getStatusBadge(assessment.status)}
              </div>
            </div>
          ))}

          {recentAssessments.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              No assessments found
            </div>
          )}

          <div className="pt-4">
            <Link
              to="/assessments"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all assessments →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
