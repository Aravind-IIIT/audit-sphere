
import { Assessment } from "@/types";

// Sample assessment data
export const assessments: Assessment[] = [
  {
    id: "a1",
    name: "Customer Data Platform Assessment",
    type: "DPIA",
    templateId: "dpia-standard",
    status: "inProgress",
    progress: 45,
    responses: [
      {
        questionId: "dpia-s1-q1",
        value: "Customer Data Platform Implementation"
      },
      {
        questionId: "dpia-s1-q2",
        value: "Implementation of a new customer data platform to centralize customer information and improve marketing capabilities"
      },
      {
        questionId: "dpia-s1-q3",
        value: "Acme Corp (controller), CloudData Inc. (processor)"
      },
      {
        questionId: "dpia-s2-q1",
        value: ["Name", "Contact details", "Online identifiers", "Location data"]
      }
    ],
    risks: [
      {
        id: "r1",
        title: "Unauthorized data access",
        description: "Risk of unauthorized access to customer data by third parties",
        severity: "high",
        likelihood: "medium",
        impact: "high",
        status: "identified",
        mitigationPlan: "Implement role-based access control and encryption",
        createdAt: new Date("2023-10-20"),
        updatedAt: new Date("2023-10-20")
      },
      {
        id: "r2",
        title: "Data retention compliance",
        description: "Risk of retaining data longer than legally permitted",
        severity: "medium",
        likelihood: "high",
        impact: "medium",
        status: "mitigated",
        mitigationPlan: "Implement automated data retention policies",
        createdAt: new Date("2023-10-22"),
        updatedAt: new Date("2023-11-01")
      }
    ],
    createdAt: new Date("2023-10-15"),
    updatedAt: new Date("2023-11-05")
  },
  {
    id: "a2",
    name: "Employee Monitoring System",
    type: "DPIA",
    templateId: "dpia-standard",
    status: "draft",
    progress: 15,
    responses: [
      {
        questionId: "dpia-s1-q1",
        value: "Employee Monitoring System Implementation"
      },
      {
        questionId: "dpia-s1-q2",
        value: "Implementing a system to monitor employee computer activity for productivity analysis"
      }
    ],
    risks: [
      {
        id: "r3",
        title: "Employee privacy invasion",
        description: "Risk of monitoring activities outside working hours",
        severity: "high",
        likelihood: "medium",
        impact: "high",
        status: "identified",
        createdAt: new Date("2023-11-12"),
        updatedAt: new Date("2023-11-12")
      }
    ],
    createdAt: new Date("2023-11-10"),
    updatedAt: new Date("2023-11-10")
  },
  {
    id: "a3",
    name: "Website Cookie Consent",
    type: "PIA",
    templateId: "pia-simple",
    status: "completed",
    progress: 100,
    responses: [
      {
        questionId: "pia-s1-q1",
        value: "Website Cookie Consent Implementation"
      },
      {
        questionId: "pia-s1-q2",
        value: "Updating website cookie consent mechanism to comply with GDPR requirements"
      },
      {
        questionId: "pia-s2-q1",
        value: "IP address, device information, browsing behavior"
      },
      {
        questionId: "pia-s2-q2",
        value: "Via website cookies and tracking technologies"
      }
    ],
    risks: [
      {
        id: "r4",
        title: "Lack of valid consent",
        description: "Risk of cookies being set before user consent",
        severity: "medium",
        likelihood: "high",
        impact: "medium",
        status: "mitigated",
        mitigationPlan: "Implementation of a consent-before-cookies mechanism",
        createdAt: new Date("2023-09-25"),
        updatedAt: new Date("2023-10-15")
      },
      {
        id: "r5",
        title: "Non-compliant cookie banner",
        description: "Risk of cookie banner not meeting GDPR requirements",
        severity: "medium",
        likelihood: "medium",
        impact: "medium",
        status: "accepted",
        mitigationPlan: "Banner redesign scheduled for next quarter",
        createdAt: new Date("2023-09-26"),
        updatedAt: new Date("2023-10-10")
      }
    ],
    createdAt: new Date("2023-09-20"),
    updatedAt: new Date("2023-10-25")
  }
];

// Helper functions to work with assessment data
export const getAssessmentById = (id: string): Assessment | undefined => {
  return assessments.find(assessment => assessment.id === id);
};

export const getAssessmentsByType = (type: string): Assessment[] => {
  return assessments.filter(assessment => assessment.type === type);
};

export const getAssessmentsByStatus = (status: string): Assessment[] => {
  return assessments.filter(assessment => assessment.status === status);
};
