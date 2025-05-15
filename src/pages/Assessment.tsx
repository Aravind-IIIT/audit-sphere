import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  Save, 
  AlertCircle
} from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { AssessmentStatusBadge } from "@/components/assessments/AssessmentStatusBadge";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getAssessmentById } from "@/data/assessments";
import { getTemplateById } from "@/data/templates";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Assessment = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get assessment and template data
  const assessment = getAssessmentById(id || "");
  const template = assessment ? getTemplateById(assessment.templateId) : undefined;
  
  const [activeSection, setActiveSection] = useState(0);
  const [responses, setResponses] = useState(assessment?.responses || []);
  
  if (!assessment || !template) {
    return (
      <AppLayout>
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold">Assessment Not Found</h2>
          <p className="text-muted-foreground mt-2">
            The assessment you are looking for does not exist.
          </p>
          <Button asChild className="mt-4">
            <Link to="/assessments">Back to Assessments</Link>
          </Button>
        </div>
      </AppLayout>
    );
  }
  
  const currentSection = template.sections[activeSection];
  
  const handleResponseChange = (questionId: string, value: any) => {
    const existingResponseIndex = responses.findIndex(
      response => response.questionId === questionId
    );
    
    if (existingResponseIndex !== -1) {
      const updatedResponses = [...responses];
      updatedResponses[existingResponseIndex] = { questionId, value };
      setResponses(updatedResponses);
    } else {
      setResponses([...responses, { questionId, value }]);
    }
  };
  
  const getResponseValue = (questionId: string) => {
    const response = responses.find(response => response.questionId === questionId);
    return response ? response.value : "";
  };
  
  const handlePrevSection = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1);
    }
  };
  
  const handleNextSection = () => {
    if (activeSection < template.sections.length - 1) {
      setActiveSection(activeSection + 1);
    }
  };
  
  const renderQuestionInput = (question: typeof template.sections[0]["questions"][0]) => {
    const value = getResponseValue(question.id);
    
    switch (question.type) {
      case "text":
        return (
          <Textarea
            placeholder="Enter your answer"
            value={value as string}
            onChange={(e) => handleResponseChange(question.id, e.target.value)}
            rows={3}
          />
        );
        
      case "select":
        return (
          <Select
            value={value as string}
            onValueChange={(newValue) => handleResponseChange(question.id, newValue)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {question.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
        
      case "multiSelect":
        // Simplified multi-select for demo purposes
        return (
          <Select
            value={Array.isArray(value) && value.length > 0 ? value[0] : undefined}
            onValueChange={(newValue) => handleResponseChange(question.id, [newValue])}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select options" />
            </SelectTrigger>
            <SelectContent>
              {question.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
        
      case "boolean":
        return (
          <div className="flex gap-4">
            <Button
              variant={value === true ? "default" : "outline"}
              onClick={() => handleResponseChange(question.id, true)}
            >
              Yes
            </Button>
            <Button
              variant={value === false ? "default" : "outline"}
              onClick={() => handleResponseChange(question.id, false)}
            >
              No
            </Button>
          </div>
        );
        
      default:
        return (
          <Input
            placeholder="Enter your answer"
            value={value as string}
            onChange={(e) => handleResponseChange(question.id, e.target.value)}
          />
        );
    }
  };
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full"
            >
              <Link to="/assessments">
                <ChevronLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight">
                  {assessment.name}
                </h1>
                <AssessmentStatusBadge status={assessment.status} />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary">{assessment.type}</Badge>
                <span className="text-sm text-muted-foreground">
                  Updated {assessment.updatedAt.toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Assessment
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    {activeSection + 1}. {currentSection.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Section {activeSection + 1} of {template.sections.length}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  {currentSection.description}
                </p>

                <div className="space-y-6">
                  {currentSection.questions.map((question) => (
                    <div key={question.id} className="space-y-2">
                      <div className="flex items-start gap-2">
                        <label
                          htmlFor={question.id}
                          className="block text-sm font-medium"
                        >
                          {question.text}
                          {question.required && (
                            <span className="text-destructive ml-1">*</span>
                          )}
                        </label>
                        
                        {question.guidance && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="rounded-full bg-muted p-1 cursor-help">
                                  <AlertCircle className="h-3 w-3 text-muted-foreground" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{question.guidance}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                      
                      {renderQuestionInput(question)}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-8 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={handlePrevSection}
                    disabled={activeSection === 0}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous Section
                  </Button>
                  <Button
                    onClick={handleNextSection}
                    disabled={activeSection === template.sections.length - 1}
                  >
                    Next Section
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1 text-sm">
                        <span>Overall Completion</span>
                        <span>{assessment.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${assessment.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {template.sections.map((section, index) => (
                        <Button
                          key={index}
                          variant={activeSection === index ? "default" : "outline"}
                          className="w-full justify-start text-left"
                          onClick={() => setActiveSection(index)}
                        >
                          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-2">
                            {index + 1}
                          </div>
                          <span className="truncate">{section.title}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="details">
                <TabsList className="w-full">
                  <TabsTrigger value="details" className="flex-1">
                    Details
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-sm mb-1">Assessment Type</h3>
                          <p>{assessment.type}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-sm mb-1">Template Used</h3>
                          <p>{template.name}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-sm mb-1">Created Date</h3>
                          <p>{assessment.createdAt.toLocaleDateString()}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-sm mb-1">Last Updated</h3>
                          <p>{assessment.updatedAt.toLocaleDateString()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Assessment;
