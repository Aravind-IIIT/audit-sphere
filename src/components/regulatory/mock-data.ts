import { RegulationUpdate } from "./types";

export const mockRegulationUpdates: RegulationUpdate[] = [
  {
    id: "1",
    title: "GDPR Article 28 Amendment",
    source: "European Union",
    date: "2025-04-12",
    summary: "Updates to processor obligations regarding data transfer mechanisms post-Privacy Shield invalidation.",
    impactLevel: "high",
    affectedPolicies: ["Data Processing Agreement", "International Transfer Policy"],
    status: "new",
    impactDetails: [
      {
        policyName: "Data Processing Agreement",
        impactDescription: "Processor responsibilities for data transfers need to be updated to reflect new requirements. Section 5.3 needs specific changes to clauses addressing international data flows.",
        suggestedChanges: "Update transfer mechanism references from Privacy Shield to new EU-approved SCCs. Add new processor documentation requirements for transfers.",
        complianceRisk: "High risk of non-compliance with EU data transfer requirements if not updated promptly.",
        implementationEffort: "Medium - Requires legal review and amendment of existing agreements."
      },
      {
        policyName: "International Transfer Policy",
        impactDescription: "Policy needs updating to reference new transfer mechanisms and documentation requirements.",
        suggestedChanges: "Add new section on transfer impact assessments. Update approved transfer mechanism list.",
        complianceRisk: "High risk of inadequate transfer safeguards if policy isn't updated.",
        implementationEffort: "Medium - Requires policy revision and staff training on new requirements."
      }
    ]
  },
  {
    id: "2",
    title: "California Privacy Rights Act Enforcement Update",
    source: "California Privacy Protection Agency",
    date: "2025-04-10",
    summary: "New enforcement guidelines clarifying audit requirements for businesses with annual revenue over $25M.",
    impactLevel: "medium",
    affectedPolicies: ["Privacy Notice", "Data Subject Rights Procedure"],
    status: "new",
    impactDetails: [
      {
        policyName: "Privacy Notice",
        impactDescription: "Disclosure section needs updating to clarify audit compliance and consumer rights processes.",
        suggestedChanges: "Add new section detailing audit compliance procedures and update consumer rights section.",
        complianceRisk: "Medium risk of inadequate disclosures leading to enforcement action.",
        implementationEffort: "Low - Requires text updates to existing privacy notice."
      },
      {
        policyName: "Data Subject Rights Procedure",
        impactDescription: "Procedure needs updating to incorporate new audit requirements for rights verification.",
        suggestedChanges: "Update verification process documentation and record-keeping requirements.",
        complianceRisk: "Medium risk of inadequate process documentation during regulatory audit.",
        implementationEffort: "Medium - Requires procedural updates and staff training."
      }
    ]
  },
  {
    id: "3",
    title: "UK Data Protection Act Amendment",
    source: "ICO",
    date: "2025-04-08",
    summary: "Changes to data breach notification timelines reducing reporting window from 72 to 48 hours.",
    impactLevel: "high",
    affectedPolicies: ["Data Breach Response Plan", "Incident Management Policy"],
    status: "new",
    impactDetails: [
      {
        policyName: "Data Breach Response Plan",
        impactDescription: "Notification timeline needs shortening from 72 to 48 hours for UK breaches.",
        suggestedChanges: "Update response timeline requirements and assessment protocols to enable faster evaluation.",
        complianceRisk: "High risk of missed notification deadlines if policy isn't updated.",
        implementationEffort: "Medium - Requires procedural changes and team training."
      },
      {
        policyName: "Incident Management Policy",
        impactDescription: "Escalation procedures need updating to reflect shortened notification window.",
        suggestedChanges: "Revise escalation timelines and decision matrix for breach classification.",
        complianceRisk: "High risk of delayed escalation affecting compliance timelines.",
        implementationEffort: "Medium - Requires policy revision and updated escalation protocols."
      }
    ]
  },
  {
    id: "4",
    title: "Brazil LGPD Regulatory Decree",
    source: "ANPD",
    date: "2025-04-05",
    summary: "New regulatory decree providing clarification on data subject access request response requirements.",
    impactLevel: "medium",
    affectedPolicies: ["Data Subject Rights Procedure"],
    status: "reviewed",
    impactDetails: []
  },
  {
    id: "5",
    title: "Australia Privacy Act Amendment",
    source: "OAIC",
    date: "2025-04-01",
    summary: "Increased penalties for serious or repeated privacy breaches, up to AUD 50 million.",
    impactLevel: "medium",
    affectedPolicies: ["Privacy Compliance Program", "Risk Assessment Procedure"],
    status: "actioned",
    impactDetails: []
  }
];
