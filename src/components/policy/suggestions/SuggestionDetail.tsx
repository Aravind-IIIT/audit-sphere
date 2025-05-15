
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { FileText, Check, X, Clock, ThumbsUp, ThumbsDown, RefreshCw, ExternalLink } from "lucide-react";
import { PolicySuggestion, SuggestionStatus, SuggestionActionProps } from "./types";

interface SuggestionDetailProps extends SuggestionActionProps {
  suggestion: PolicySuggestion;
  status: SuggestionStatus;
  onViewRegulation?: () => void;
}

export const SuggestionDetail = ({ 
  suggestion, 
  onAccept, 
  onReject, 
  onRegenerate,
  onViewRegulation,
  status
}: SuggestionDetailProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {suggestion.name}
              {suggestion.controlId && (
                <Badge variant="secondary">
                  {suggestion.controlId}
                </Badge>
              )}
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              {suggestion.type === "policy" ? "Policy Update" : "Control Update"} based on {suggestion.regulation}
              {onViewRegulation && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 px-1 text-primary" 
                  onClick={onViewRegulation}
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1" />
                  View regulation
                </Button>
              )}
            </CardDescription>
          </div>
          {status === "accepted" ? (
            <Badge className="bg-green-100 text-green-800 border-green-200 flex items-center gap-1">
              <Check className="h-3.5 w-3.5" />
              Accepted
            </Badge>
          ) : status === "rejected" ? (
            <Badge className="bg-red-100 text-red-800 border-red-200 flex items-center gap-1">
              <X className="h-3.5 w-3.5" />
              Rejected
            </Badge>
          ) : (
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              Pending Review
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Suggested Changes</h4>
          <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
            {suggestion.suggestedChanges}
          </div>
        </div>
        
        {suggestion.type === "control" ? (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Control Implementation Details</h4>
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted px-4 py-2 text-sm font-medium border-b">Technical Requirements</div>
              <div className="p-4 space-y-4">
                <div className="text-sm text-muted-foreground">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Implement automated monitoring system for data transfers</li>
                    <li>Set up quarterly audit schedule with defined checkpoints</li>
                    <li>Create documentation templates for audit findings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Policy Text Changes</h4>
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted px-4 py-2 text-sm font-medium border-b">Section Updates</div>
              <div className="p-4">
                <div className="space-y-4">
                  <div className="bg-red-50 text-red-800 px-3 py-2 rounded line-through text-sm">
                    {suggestion.name === "Data Processing Agreement" ? 
                      "5.3 The data importer agrees to adhere to the data protection principles and processing requirements set out in Directive 95/46/EC when transferring and processing personal data." :
                      "Previous policy text here"}
                  </div>
                  <div className="bg-green-50 text-green-800 px-3 py-2 rounded text-sm">
                    {suggestion.name === "Data Processing Agreement" ? 
                      "5.3 The data importer agrees to adhere to the data protection principles and processing requirements set out in Regulation (EU) 2016/679 (GDPR) when transferring and processing personal data, including implementing appropriate technical and organizational measures as specified in Article 32 of the GDPR and only using EU-approved Standard Contractual Clauses or other approved transfer mechanisms for international data transfers." :
                      "New suggested policy text here"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {suggestion.type === "policy" && suggestion.relatedControls && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Related Controls</h4>
            <div className="flex flex-wrap gap-2">
              {suggestion.relatedControls.map((controlId) => (
                <Badge key={controlId} variant="outline" className="cursor-pointer hover:bg-secondary">
                  {controlId}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Impact & Implementation</h4>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium mb-1">Areas Impacted</div>
              <div className="flex flex-wrap gap-1">
                {suggestion.impacts.map((impact, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {impact}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Implementation Timeline</div>
              <div className="text-sm text-muted-foreground">
                Recommended implementation by: <span className="font-medium">May 15, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      
      {status === "pending" && (
        <CardFooter className="flex justify-end space-x-2 pt-2 border-t">
          <Button 
            variant="outline" 
            onClick={() => onRegenerate(suggestion.id)}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Regenerate
          </Button>
          <Button 
            variant="outline" 
            onClick={() => onReject(suggestion.id)}
            className="text-destructive hover:text-destructive"
          >
            <ThumbsDown className="mr-2 h-4 w-4" />
            Reject
          </Button>
          <Button onClick={() => onAccept(suggestion.id)}>
            <ThumbsUp className="mr-2 h-4 w-4" />
            Accept Changes
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
