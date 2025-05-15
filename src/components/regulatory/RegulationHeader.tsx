
import { Badge } from "@/components/ui/badge";
import { AlertCircle, AlertTriangle, FileText, Info } from "lucide-react";
import { RegulationUpdate } from "./types";

interface RegulationHeaderProps {
  regulation: RegulationUpdate;
}

export const RegulationHeader = ({ regulation }: RegulationHeaderProps) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          {regulation.title}
        </div>
        <p className="text-sm text-muted-foreground">
          Source: {regulation.source} | Published: {regulation.date}
        </p>
      </div>
      {regulation.impactLevel === "high" ? (
        <Badge variant="destructive" className="flex items-center gap-1">
          <AlertCircle className="h-3.5 w-3.5" />
          High Impact
        </Badge>
      ) : regulation.impactLevel === "medium" ? (
        <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200 flex items-center gap-1">
          <AlertTriangle className="h-3.5 w-3.5" />
          Medium Impact
        </Badge>
      ) : (
        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 flex items-center gap-1">
          <Info className="h-3.5 w-3.5" />
          Low Impact
        </Badge>
      )}
    </div>
  );
};
