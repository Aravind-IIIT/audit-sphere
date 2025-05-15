
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AssessmentStatusBadgeProps {
  status: 'draft' | 'inProgress' | 'completed' | 'archived';
  className?: string;
}

export function AssessmentStatusBadge({ status, className }: AssessmentStatusBadgeProps) {
  switch (status) {
    case "completed":
      return (
        <Badge 
          variant="outline" 
          className={cn("bg-success/10 text-success border-success/20", className)}
        >
          Completed
        </Badge>
      );
    case "inProgress":
      return (
        <Badge 
          variant="outline" 
          className={cn("bg-warning/10 text-warning border-warning/20", className)}
        >
          In Progress
        </Badge>
      );
    case "draft":
      return (
        <Badge 
          variant="outline" 
          className={cn("bg-muted text-muted-foreground", className)}
        >
          Draft
        </Badge>
      );
    case "archived":
      return (
        <Badge 
          variant="outline" 
          className={cn("bg-muted text-muted-foreground", className)}
        >
          Archived
        </Badge>
      );
    default:
      return null;
  }
}
