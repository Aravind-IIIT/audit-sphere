
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle } from "lucide-react";
import { Risk, RiskSeverity } from "@/types";

interface RiskAssessmentFormProps {
  onSaveRisk: (risk: Omit<Risk, "id">) => void;
}

export function RiskAssessmentForm({ onSaveRisk }: RiskAssessmentFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<RiskSeverity>("medium");
  const [likelihood, setLikelihood] = useState<RiskSeverity>("medium");
  const [impact, setImpact] = useState<RiskSeverity>("medium");
  const [mitigationPlan, setMitigationPlan] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newRisk: Omit<Risk, "id"> = {
      title,
      description,
      severity,
      likelihood,
      impact,
      status: "identified",
      mitigationPlan: mitigationPlan || undefined,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    onSaveRisk(newRisk);
    
    // Reset form
    setTitle("");
    setDescription("");
    setSeverity("medium");
    setLikelihood("medium");
    setImpact("medium");
    setMitigationPlan("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-warning" />
          New Risk Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Risk Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a title for the risk"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the risk in detail"
              required
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <Label htmlFor="severity">Severity</Label>
              <Select
                value={severity}
                onValueChange={(value) => setSeverity(value as RiskSeverity)}
              >
                <SelectTrigger id="severity">
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="likelihood">Likelihood</Label>
              <Select
                value={likelihood}
                onValueChange={(value) => setLikelihood(value as RiskSeverity)}
              >
                <SelectTrigger id="likelihood">
                  <SelectValue placeholder="Select likelihood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="impact">Impact</Label>
              <Select
                value={impact}
                onValueChange={(value) => setImpact(value as RiskSeverity)}
              >
                <SelectTrigger id="impact">
                  <SelectValue placeholder="Select impact" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="mitigation">Mitigation Plan (Optional)</Label>
            <Textarea
              id="mitigation"
              value={mitigationPlan}
              onChange={(e) => setMitigationPlan(e.target.value)}
              placeholder="Enter a plan to mitigate the risk"
              rows={3}
            />
          </div>
          
          <Button type="submit" className="w-full">
            Add Risk
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
