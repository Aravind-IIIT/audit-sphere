
// AI-powered suggestions for risk identification and mitigation
// This simulates an AI suggestion system for the MVP

interface RiskSuggestion {
  trigger: string[];
  risk: string;
  likelihood: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  mitigationSuggestions: string[];
}

// These risk suggestions trigger based on keywords in the user's input
export const riskSuggestions: RiskSuggestion[] = [
  {
    trigger: ["cloud", "third party", "processor", "vendor", "service provider"],
    risk: "Data breach at third-party processor",
    likelihood: "medium",
    impact: "high",
    mitigationSuggestions: [
      "Conduct due diligence on processor security measures",
      "Include appropriate data protection clauses in contracts",
      "Implement regular security audits of processors",
      "Ensure processors have breach notification procedures"
    ]
  },
  {
    trigger: ["health", "medical", "patient", "clinical", "biometric"],
    risk: "Unauthorized processing of special category data",
    likelihood: "medium",
    impact: "high",
    mitigationSuggestions: [
      "Implement strong access controls based on need-to-know",
      "Use encryption for data at rest and in transit",
      "Maintain detailed processing logs",
      "Conduct regular staff training on handling sensitive data"
    ]
  },
  {
    trigger: ["cookie", "tracking", "analytics", "profiling", "monitoring"],
    risk: "Processing without proper consent",
    likelihood: "high",
    impact: "medium",
    mitigationSuggestions: [
      "Implement clear consent mechanisms",
      "Ensure genuinely free choice for users",
      "Document consent collection process",
      "Make it easy to withdraw consent"
    ]
  },
  {
    trigger: ["retention", "store", "archive", "backup", "delete"],
    risk: "Excessive data retention",
    likelihood: "high",
    impact: "medium",
    mitigationSuggestions: [
      "Implement and enforce data retention policies",
      "Setup automated deletion processes",
      "Conduct regular data inventories",
      "Document justification for retention periods"
    ]
  },
  {
    trigger: ["transfer", "international", "foreign", "cross-border", "export"],
    risk: "Inadequate protection for international data transfers",
    likelihood: "medium",
    impact: "high",
    mitigationSuggestions: [
      "Use standard contractual clauses",
      "Assess receiving country's data protection laws",
      "Consider binding corporate rules for intra-group transfers",
      "Implement additional technical safeguards"
    ]
  },
  {
    trigger: ["child", "children", "minor", "student", "young"],
    risk: "Failure to provide adequate protections for children's data",
    likelihood: "medium",
    impact: "high",
    mitigationSuggestions: [
      "Implement age verification mechanisms",
      "Use clear, age-appropriate privacy notices",
      "Obtain parental consent where required",
      "Limit data collection to what is strictly necessary"
    ]
  },
  {
    trigger: ["right", "access", "erasure", "portability", "rectification"],
    risk: "Inability to fulfill data subject rights",
    likelihood: "medium",
    impact: "medium",
    mitigationSuggestions: [
      "Create clear procedures for handling rights requests",
      "Train staff on data subject rights",
      "Implement systems capable of finding all instances of personal data",
      "Document response processes and timelines"
    ]
  },
  {
    trigger: ["ai", "algorithm", "automated", "machine learning", "profiling"],
    risk: "Automated decision-making causing harm to individuals",
    likelihood: "medium",
    impact: "high",
    mitigationSuggestions: [
      "Ensure human oversight of automated decisions",
      "Implement mechanisms to explain AI decisions",
      "Test algorithms for bias",
      "Provide options to challenge automated decisions"
    ]
  }
];

export function getSuggestedRisks(text: string): RiskSuggestion[] {
  const lowerText = text.toLowerCase();
  return riskSuggestions.filter(suggestion => 
    suggestion.trigger.some(keyword => lowerText.includes(keyword.toLowerCase()))
  );
}
