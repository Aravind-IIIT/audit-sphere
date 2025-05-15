
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { Template } from "@/types";
import { Link } from "react-router-dom";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <Badge variant="outline" className="mb-2">
              {template.type}
            </Badge>
            <CardTitle className="text-lg">{template.name}</CardTitle>
          </div>
          <div className="rounded-md bg-muted p-2">
            <FileText className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{template.description}</p>
        <div className="mt-4">
          <div className="text-sm">
            <span className="text-muted-foreground">Sections:</span>{" "}
            <span className="font-medium">{template.sections.length}</span>
          </div>
          <div className="text-sm mt-1">
            <span className="text-muted-foreground">Questions:</span>{" "}
            <span className="font-medium">
              {template.sections.reduce(
                (total, section) => total + section.questions.length,
                0
              )}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button asChild variant="default">
          <Link to={`/assessments/new?templateId=${template.id}`}>
            Use Template
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to={`/templates/${template.id}`}>Preview</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
