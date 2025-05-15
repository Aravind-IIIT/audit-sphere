
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { 
  FileText, 
  Clock, 
  ThumbsUp, 
  ThumbsDown, 
  RefreshCw,
  ArrowUpRight
} from "lucide-react";
import { PolicySuggestion, SuggestionStatus, SuggestionActionProps } from "./types";

interface SuggestionRowProps extends SuggestionActionProps {
  suggestion: PolicySuggestion;
  status: SuggestionStatus;
  onViewDetails: (id: string) => void;
  isSelected: boolean;
}

export const SuggestionRow = ({
  suggestion,
  status,
  onAccept,
  onReject,
  onRegenerate,
  onViewDetails,
  isSelected
}: SuggestionRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <Badge
          variant="outline"
          className={cn(
            "capitalize",
            suggestion.type === "policy" 
              ? "bg-blue-50 text-blue-700 border-blue-200"
              : "bg-purple-50 text-purple-700 border-purple-200"
          )}
        >
          {suggestion.type}
        </Badge>
      </TableCell>
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          {suggestion.name}
          {suggestion.controlId && (
            <Badge variant="secondary" className="text-xs">
              {suggestion.controlId}
            </Badge>
          )}
        </div>
      </TableCell>
      <TableCell className="max-w-md truncate" title={suggestion.suggestedChanges}>
        {suggestion.suggestedChanges}
      </TableCell>
      <TableCell>
        <a href={suggestion.regulationUrl} className="flex items-center gap-1 text-sm text-primary hover:underline">
          {suggestion.regulation}
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {suggestion.suggestedAt}
        </div>
      </TableCell>
      {status === "pending" && (
        <TableCell className="text-right">
          <div className="flex justify-end gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 text-green-600"
              onClick={() => onAccept(suggestion.id)}
            >
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 text-destructive"
              onClick={() => onReject(suggestion.id)}
            >
              <ThumbsDown className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8"
              onClick={() => onRegenerate(suggestion.id)}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </TableCell>
      )}
      <TableCell className="text-right">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => onViewDetails(suggestion.id)}
        >
          {isSelected ? "Hide" : "Details"}
        </Button>
      </TableCell>
    </TableRow>
  );
};
