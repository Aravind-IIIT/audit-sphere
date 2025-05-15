
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function QuickStartCard() {
  return (
    <div className="flex items-center gap-4">
      <Button asChild variant="default" size="lg" className="shadow-sm">
        <Link to="/assessments/new" className="flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5" />
          Start New Assessment
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg">
        <Link to="/policy-analysis" className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Analyze Policy
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg">
        <Link to="/help">View Guidance</Link>
      </Button>
    </div>
  );
}
