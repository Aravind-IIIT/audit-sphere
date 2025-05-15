
// Risk prediction data for the main chart
export const riskPredictionData = [
  { date: "2025-04-01", current: 45, predicted: 45, threshold: 70 },
  { date: "2025-04-15", current: 48, predicted: 51, threshold: 70 },
  { date: "2025-05-01", current: 52, predicted: 58, threshold: 70 },
  { date: "2025-05-15", current: 56, predicted: 65, threshold: 70 },
  { date: "2025-06-01", current: 53, predicted: 71, threshold: 70 },
  { date: "2025-06-15", current: 58, predicted: 76, threshold: 70 },
  { date: "2025-07-01", current: null, predicted: 78, threshold: 70 },
  { date: "2025-07-15", current: null, predicted: 74, threshold: 70 },
];

// Key risk factors influencing the predictions
export const riskFactors = [
  {
    id: "factor-1",
    name: "Control Testing Failures",
    influence: 85,
    trend: "increasing",
    description: "Increasing trend in failed control tests in data security area"
  },
  {
    id: "factor-2",
    name: "External Regulatory Changes",
    influence: 72,
    trend: "stable",
    description: "New regulations expected in Q3 2025 affecting data transfers"
  },
  {
    id: "factor-3",
    name: "Third-Party Vendor Issues",
    influence: 65,
    trend: "increasing",
    description: "Growing risks with critical data processor compliance"
  },
  {
    id: "factor-4",
    name: "Data Breach Incidents",
    influence: 58,
    trend: "decreasing",
    description: "Decreasing trend in industry data breaches"
  },
  {
    id: "factor-5",
    name: "Control Implementation",
    influence: 45,
    trend: "decreasing",
    description: "Positive trend in implementation of enhanced security controls"
  }
];

// Data for risk trajectory table
export const riskTrajectories = [
  {
    id: "risk-1",
    name: "Data Protection",
    currentScore: 45,
    predictedScore: 68,
    confidence: 82,
    needsAttention: true
  },
  {
    id: "risk-2",
    name: "Third-Party Management",
    currentScore: 62,
    predictedScore: 75,
    confidence: 78,
    needsAttention: true
  },
  {
    id: "risk-3",
    name: "Consent Management",
    currentScore: 58,
    predictedScore: 52,
    confidence: 75,
    needsAttention: false
  },
  {
    id: "risk-4",
    name: "Data Subject Rights",
    currentScore: 40,
    predictedScore: 35,
    confidence: 68,
    needsAttention: false
  },
  {
    id: "risk-5",
    name: "Information Security",
    currentScore: 72,
    predictedScore: 65,
    confidence: 73,
    needsAttention: false
  },
  {
    id: "risk-6",
    name: "Cross-Border Transfers",
    currentScore: 52,
    predictedScore: 79,
    confidence: 85,
    needsAttention: true
  }
];

// Data for risk categories breakdown
export const riskCategories = [
  {
    id: "cat-1",
    name: "Data Protection & Privacy",
    currentScore: 45,
    predictedScore: 68,
    trend: "increasing",
    changeAmount: 23,
    insights: "Predicted increase due to upcoming regulatory changes and control weaknesses"
  },
  {
    id: "cat-2",
    name: "Vendor Risk",
    currentScore: 62,
    predictedScore: 75,
    trend: "increasing",
    changeAmount: 13,
    insights: "Growing concerns with third-party compliance documentation"
  },
  {
    id: "cat-3",
    name: "Data Subject Rights",
    currentScore: 58,
    predictedScore: 52,
    trend: "decreasing",
    changeAmount: 6,
    insights: "Process improvements forecasted to reduce risk levels"
  },
  {
    id: "cat-4",
    name: "Information Security",
    currentScore: 72,
    predictedScore: 65,
    trend: "decreasing",
    changeAmount: 7,
    insights: "Enhanced controls expected to improve security posture"
  },
  {
    id: "cat-5",
    name: "Cross-Border Transfers",
    currentScore: 52,
    predictedScore: 79,
    trend: "increasing",
    changeAmount: 27,
    insights: "High risk due to evolving international regulatory landscape"
  },
  {
    id: "cat-6",
    name: "Breach Notification",
    currentScore: 48,
    predictedScore: 42,
    trend: "decreasing",
    changeAmount: 6,
    insights: "Process maturity improving response capabilities"
  }
];

// AI-generated insights
export const aiInsights = [
  {
    type: "alert",
    title: "Critical Risk Emerging: Cross-Border Transfers",
    confidence: 87,
    description: "Based on analysis of recent regulatory changes and your current control environment, our AI predicts a significant increase in cross-border transfer risk within 60 days.",
    recommendation: "Review and update SCCs and transfer impact assessments for key data processors based in non-adequate countries."
  },
  {
    type: "trend-up",
    title: "Increasing Data Protection Risk",
    confidence: 82,
    description: "Pattern analysis shows degradation in data protection controls effectiveness over the last 3 assessment periods, with projection showing continued deterioration.",
    recommendation: "Schedule priority review of data minimization practices and retention periods."
  },
  {
    type: "trend-down",
    title: "Improving Information Security Posture",
    confidence: 75,
    description: "Recent control implementations are projected to reduce information security risk by approximately 7% over the next quarter.",
    recommendation: "Continue focus on security awareness training to maximize benefits."
  },
  {
    type: "insight",
    title: "Regulatory Change Impact",
    confidence: 91,
    description: "AI has detected correlation between upcoming regulatory changes and potential compliance gaps in your organization based on historical adaptation patterns.",
    recommendation: "Allocate additional resources to compliance monitoring for Q3 2025."
  }
];
