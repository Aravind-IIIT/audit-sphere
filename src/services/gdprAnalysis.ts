
import { gdprSections } from '@/data/gdpr-sections';

export interface GDPRAnalysisResult {
  compliant: boolean;
  section: string;
  details: string;
  suggestion: string;
  complianceScore: number;
  criticalIssues?: string[];
}

function calculateDetailedCompliance(text: string, section: typeof gdprSections[0]): number {
  const keywords = section.criteria.toLowerCase().split(' ').filter(word => 
    word.length > 4 && !['should', 'must', 'their', 'these', 'those', 'have'].includes(word)
  );
  
  const matchCount = keywords.filter(keyword => 
    text.toLowerCase().includes(keyword)
  ).length;

  // More sophisticated scoring with weighted factors
  const baseScore = Math.round((matchCount / keywords.length) * 100);
  const complexityFactor = keywords.length > 5 ? 0.9 : 1;
  
  return Math.round(baseScore * complexityFactor);
}

function checkSectionCompliance(text: string, section: typeof gdprSections[0]): GDPRAnalysisResult {
  const complianceScore = calculateDetailedCompliance(text, section);
  const isCompliant = complianceScore > 70;

  const criticalIssues = !isCompliant ? [
    'Insufficient documentation of data processing purposes',
    'Lack of clear user consent mechanisms',
    'Missing data protection and privacy safeguards'
  ] : undefined;

  return {
    compliant: isCompliant,
    section: section.title,
    details: isCompliant 
      ? `Adequately covers ${section.title.toLowerCase()} with a compliance score of ${complianceScore}%`
      : `Insufficient coverage of ${section.title.toLowerCase()}`,
    suggestion: isCompliant 
      ? "Current implementation appears compliant with GDPR requirements."
      : `Improve coverage of ${section.title.toLowerCase()}. Refer to: ${section.reference}`,
    complianceScore,
    criticalIssues
  };
}

export const analyzePrivacyPolicy = async (text: string): Promise<GDPRAnalysisResult[]> => {
  if (text.length < 50) {
    throw new Error("Privacy policy text is too short for meaningful analysis");
  }

  const results = gdprSections.map(section => 
    checkSectionCompliance(text, section)
  );

  return results;
};

// Sample compliant and non-compliant policy texts for demonstration
export const sampleCompliantPolicy = `
Our privacy policy ensures transparent and lawful processing of personal data. 
We collect data only for specified, explicit, and legitimate purposes. 
Users have full control over their personal information and can request access, 
rectification, or erasure at any time. We implement robust security measures 
to protect personal data and limit data retention to what is necessary.
`;

export const sampleNonCompliantPolicy = `
We collect your data. Sometimes we use it. Maybe we share it. 
Not sure what happens after that. Security is probably fine. 
If you want to know something, just ask. We might tell you.
`;
