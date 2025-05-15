
export const trendData = [
  { month: 'Jan', gdpr: 65, ccpa: 70, hipaa: 80 },
  { month: 'Feb', gdpr: 68, ccpa: 72, hipaa: 82 },
  { month: 'Mar', gdpr: 72, ccpa: 75, hipaa: 85 },
  { month: 'Apr', gdpr: 78, ccpa: 82, hipaa: 91 }
];

export const taskStatusData = [
  { name: 'Completed', value: 12 },
  { name: 'In Progress', value: 8 },
  { name: 'Pending', value: 5 },
  { name: 'Blocked', value: 2 },
];

export const CHART_COLORS = ["#3182CE", "#38B2AC", "#9F7AEA", "#ED8936"];

export const CHART_CONFIG = {
  score: { label: "Score", theme: { light: "#8B5CF6", dark: "#9F7AEA" } },
  gdpr: { label: "GDPR", theme: { light: "#3182CE", dark: "#4299E1" } },
  ccpa: { label: "CCPA/CPRA", theme: { light: "#38B2AC", dark: "#4FD1C5" } },
  hipaa: { label: "HIPAA", theme: { light: "#805AD5", dark: "#9F7AEA" } },
};
