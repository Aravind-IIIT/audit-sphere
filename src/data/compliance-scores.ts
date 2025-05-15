
import { ComplianceScore } from "@/components/reports/ComplianceScoreCard";

export const complianceScores: ComplianceScore[] = [
  {
    id: "gdpr",
    name: "GDPR",
    score: 78,
    status: "partial",
    lastAssessed: new Date("2025-03-28"),
    keyRequirements: [
      {
        id: "gdpr-1",
        name: "Data Subject Rights",
        status: "passed",
        details: "Process in place for handling all data subject requests"
      },
      {
        id: "gdpr-2",
        name: "Data Protection Impact Assessments",
        status: "passed",
        details: "DPIAs conducted for high-risk processing activities"
      },
      {
        id: "gdpr-3",
        name: "International Data Transfers",
        status: "warning",
        details: "Some transfers lack adequate safeguards"
      },
      {
        id: "gdpr-4",
        name: "Record of Processing Activities",
        status: "failed",
        details: "Incomplete documentation of processing activities"
      }
    ],
    recommendations: [
      "Complete the documentation of all processing activities",
      "Implement additional safeguards for international data transfers",
      "Review and update privacy notices for clarity and comprehensiveness"
    ]
  },
  {
    id: "ccpa",
    name: "CCPA/CPRA",
    score: 82,
    status: "partial",
    lastAssessed: new Date("2025-04-01"),
    keyRequirements: [
      {
        id: "ccpa-1",
        name: "Right to Know",
        status: "passed",
        details: "Process in place for handling access requests"
      },
      {
        id: "ccpa-2",
        name: "Right to Delete",
        status: "passed",
        details: "Deletion requests handled within required timeframe"
      },
      {
        id: "ccpa-3",
        name: "Opt-Out of Sale",
        status: "warning",
        details: "Opt-out mechanism needs improvement"
      },
      {
        id: "ccpa-4",
        name: "Privacy Notice",
        status: "passed",
        details: "Comprehensive privacy notice in place"
      }
    ],
    recommendations: [
      "Enhance the 'Do Not Sell My Info' mechanism for easier access",
      "Implement more granular consumer preference controls",
      "Update data inventory to include sensitive personal information categories"
    ]
  },
  {
    id: "hipaa",
    name: "HIPAA",
    score: 91,
    status: "compliant",
    lastAssessed: new Date("2025-03-15"),
    keyRequirements: [
      {
        id: "hipaa-1",
        name: "Security Rule",
        status: "passed",
        details: "Administrative, physical, and technical safeguards in place"
      },
      {
        id: "hipaa-2",
        name: "Privacy Rule",
        status: "passed",
        details: "Policies and procedures for PHI use and disclosure"
      },
      {
        id: "hipaa-3",
        name: "Breach Notification",
        status: "passed",
        details: "Process in place for breach detection and notification"
      },
      {
        id: "hipaa-4",
        name: "Business Associate Agreements",
        status: "warning",
        details: "Some agreements need to be updated"
      }
    ],
    recommendations: [
      "Review and update all business associate agreements",
      "Conduct additional staff training on PHI handling",
      "Perform regular security risk assessments"
    ]
  }
];
