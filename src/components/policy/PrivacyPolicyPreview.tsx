
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Template } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyPreviewProps {
  template: Template;
}

export function PrivacyPolicyPreview({ template }: PrivacyPolicyPreviewProps) {
  // Transform template sections into a preview format
  const renderPreviewContent = () => {
    return (
      <div className="space-y-6">
        {template.sections.map((section) => (
          <div key={section.id} className="space-y-4">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-muted-foreground">{section.description}</p>
            <div className="pl-4 space-y-2">
              {section.questions.map((question) => (
                <div key={question.id}>
                  {question.type === "text" && (
                    <p className="text-sm text-muted-foreground">• {question.text}</p>
                  )}
                  {question.type === "multiSelect" && question.options && (
                    <div>
                      <p className="text-sm text-muted-foreground">• {question.text}</p>
                      <ul className="list-disc pl-6 text-sm text-muted-foreground/80">
                        {question.options.map((option, index) => (
                          <li key={index}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Preview</CardTitle>
        <CardDescription>
          This is how your privacy policy will be structured
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">{template.name}</h1>
              <p className="text-muted-foreground mt-2">{template.description}</p>
            </div>
            {renderPreviewContent()}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
