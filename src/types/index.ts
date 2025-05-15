// Type definitions for Privacy Compass application

// Assessment template types
export type TemplateType = 'DPIA' | 'PIA' | 'LIA' | 'ROPA' | 'TRS';

export interface Template {
  id: string;
  name: string;
  type: TemplateType;
  description: string;
  sections: TemplateSection[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TemplateSection {
  id: string;
  title: string;
  description: string;
  order: number;
  questions: TemplateQuestion[];
}

export interface TemplateQuestion {
  id: string;
  text: string;
  order: number;
  type: 'text' | 'select' | 'multiSelect' | 'date' | 'boolean';
  options?: string[];
  required: boolean;
  guidance?: string;
}

// Risk types
export type RiskSeverity = 'low' | 'medium' | 'high' | 'critical';
export type RiskStatus = 'identified' | 'mitigated' | 'accepted' | 'transferred';

export interface Risk {
  id: string;
  title: string;
  description: string;
  severity: RiskSeverity;
  likelihood: RiskSeverity;
  impact: RiskSeverity;
  status: RiskStatus;
  mitigationPlan?: string;
  assessmentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Assessment types
export interface Assessment {
  id: string;
  name: string;
  type: TemplateType;
  templateId: string;
  status: 'draft' | 'inProgress' | 'completed' | 'archived';
  progress: number;
  responses: AssessmentResponse[];
  risks: Risk[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AssessmentResponse {
  questionId: string;
  value: string | string[] | boolean;
}

// Document types
export interface Document {
  id: string;
  name: string;
  type: 'assessment' | 'policy' | 'evidence' | 'other';
  assessmentId?: string;
  fileUrl?: string;
  content?: string;
  createdAt: Date;
  updatedAt: Date;
}
