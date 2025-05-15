
import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PrivacyPolicyPreview } from "@/components/policy/PrivacyPolicyPreview";
import { getTemplateById, templates } from "@/data/templates";
import { Assessment, Template } from "@/types";
import { toast } from "sonner";
import { assessments } from "@/data/assessments";

export default function NewAssessment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [assessmentName, setAssessmentName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(() => {
    const templateId = searchParams.get("templateId");
    return templateId ? getTemplateById(templateId) || null : null;
  });

  const handleCreateAssessment = () => {
    if (!assessmentName.trim()) {
      toast.error("Please enter an assessment name");
      return;
    }

    if (!selectedTemplate) {
      toast.error("Please select a template");
      return;
    }

    const newAssessment: Assessment = {
      id: `a${assessments.length + 1}`,
      name: assessmentName,
      type: selectedTemplate.type,
      templateId: selectedTemplate.id,
      status: "draft" as const,
      progress: 0,
      responses: [],
      risks: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    assessments.push(newAssessment);

    toast.success(`Created assessment: ${assessmentName}`);
    navigate("/assessments");
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Assessment</h1>
          <p className="text-muted-foreground mt-2">
            Create a new privacy assessment by selecting a template and providing basic information.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Details</CardTitle>
              <CardDescription>
                Enter the details for your new assessment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Assessment Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter assessment name" 
                  value={assessmentName}
                  onChange={(e) => setAssessmentName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="template">Template</Label>
                <Select
                  value={selectedTemplate?.id}
                  onValueChange={(value) => setSelectedTemplate(getTemplateById(value) || null)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name} ({template.type})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button 
                className="w-full"
                onClick={handleCreateAssessment}
              >
                Create Assessment
              </Button>
            </CardContent>
          </Card>

          {selectedTemplate?.type === "PIA" && selectedTemplate.name.toLowerCase().includes("privacy policy") && (
            <PrivacyPolicyPreview template={selectedTemplate} />
          )}
        </div>
      </div>
    </AppLayout>
  );
}
