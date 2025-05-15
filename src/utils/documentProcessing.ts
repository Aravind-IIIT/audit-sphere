
/**
 * Utility functions for processing documents in the AI Agent Canvas
 */

import { Template } from "@/types";
import { privacyPolicyTemplate } from "@/data/templates/pia/privacy-policy";
import { standardRopaTemplate } from "@/data/templates/ropa/standard";

interface RopaData {
  controllerName?: string;
  dataCategories?: string[];
  processingPurposes?: string[];
  retentionPeriod?: string;
  securityMeasures?: string[];
  recipientCategories?: string[];
  dpoContact?: string;
}

/**
 * Extracts structured data from a RoPA document
 */
export const extractRopaData = (content: string): RopaData => {
  const data: RopaData = {};
  
  // Extract controller information
  const controllerMatch = content.match(/Name of Controller:?\s*([^\n]+)/i);
  if (controllerMatch && controllerMatch[1]) {
    data.controllerName = controllerMatch[1].replace(/\[|\]/g, '').trim();
  }
  
  // Extract DPO contact
  const dpoMatch = content.match(/Data Protection Officer:?\s*([^\n]+)/i);
  if (dpoMatch && dpoMatch[1]) {
    data.dpoContact = dpoMatch[1].replace(/\[|\]/g, '').trim();
  }
  
  // Extract data categories
  data.dataCategories = [];
  const categoriesRegex = /Categories of personal data:?\s*([^\n]+)/gi;
  let categoryMatch;
  while ((categoryMatch = categoriesRegex.exec(content)) !== null) {
    const categories = categoryMatch[1]
      .split(',')
      .map(cat => cat.trim().replace(/\[|\]/g, ''))
      .filter(Boolean);
    data.dataCategories.push(...categories);
  }
  
  // Extract purposes
  data.processingPurposes = [];
  const purposeRegex = /Purpose:?\s*([^\n]+)/gi;
  let purposeMatch;
  while ((purposeMatch = purposeRegex.exec(content)) !== null) {
    const purposes = purposeMatch[1]
      .split(',')
      .map(purpose => purpose.trim().replace(/\[|\]/g, ''))
      .filter(Boolean);
    data.processingPurposes.push(...purposes);
  }
  
  // Extract retention period
  const retentionMatch = content.match(/Retention period:?\s*([^\n]+)/i);
  if (retentionMatch && retentionMatch[1]) {
    data.retentionPeriod = retentionMatch[1].replace(/\[|\]/g, '').trim();
  }
  
  // Extract security measures
  data.securityMeasures = [];
  const securityRegex = /Security measures:?\s*([^\n]+)/gi;
  let securityMatch;
  while ((securityMatch = securityRegex.exec(content)) !== null) {
    const measures = securityMatch[1]
      .split(',')
      .map(measure => measure.trim().replace(/\[|\]/g, ''))
      .filter(Boolean);
    data.securityMeasures.push(...measures);
  }
  
  // Extract recipient categories
  data.recipientCategories = [];
  const recipientRegex = /Recipients:?\s*([^\n]+)/gi;
  let recipientMatch;
  while ((recipientMatch = recipientRegex.exec(content)) !== null) {
    const recipients = recipientMatch[1]
      .split(',')
      .map(recipient => recipient.trim().replace(/\[|\]/g, ''))
      .filter(Boolean);
    data.recipientCategories.push(...recipients);
  }
  
  return data;
};

/**
 * Generates a Privacy Notice from RoPA data
 */
export const generatePrivacyNoticeFromRopa = (ropaData: RopaData, companyName?: string): string => {
  const company = companyName || ropaData.controllerName || '[Company Name]';
  const currentDate = new Date().toLocaleDateString();
  
  return `# Privacy Notice for ${company}

## Introduction
${company} is committed to protecting your personal data and being transparent about how we collect and use it. This privacy notice explains how we collect, use, and protect your personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).

## Last updated
${currentDate}

## Who we are
${company} is the data controller for the personal information we process. ${ropaData.dpoContact ? `Our Data Protection Officer can be contacted at: ${ropaData.dpoContact}` : ''}

## Information we collect
We collect and process the following categories of personal data:
${ropaData.dataCategories && ropaData.dataCategories.length > 0 
  ? ropaData.dataCategories.map(category => `- ${category}`).join('\n') 
  : '- Contact information\n- Account details\n- Usage information'}

## How we use your information
We use your personal data for the following purposes:
${ropaData.processingPurposes && ropaData.processingPurposes.length > 0
  ? ropaData.processingPurposes.map(purpose => `- ${purpose}`).join('\n')
  : '- To provide our services\n- To communicate with you\n- To improve our products and services'}

## Data sharing
We may share your personal data with the following categories of recipients:
${ropaData.recipientCategories && ropaData.recipientCategories.length > 0
  ? ropaData.recipientCategories.map(recipient => `- ${recipient}`).join('\n')
  : '- Service providers\n- Regulatory authorities when required by law'}

## Data retention
${ropaData.retentionPeriod 
  ? `We retain your personal data for ${ropaData.retentionPeriod}.` 
  : 'We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected.'}

## Security measures
We have implemented appropriate security measures to protect your personal data, including:
${ropaData.securityMeasures && ropaData.securityMeasures.length > 0
  ? ropaData.securityMeasures.map(measure => `- ${measure}`).join('\n')
  : '- Encryption\n- Access controls\n- Regular security audits'}

## Your rights
Under data protection laws, you have rights including:
- Right to access your data
- Right to rectification
- Right to erasure
- Right to restrict processing
- Right to data portability
- Right to object

## Contact us
If you have any questions about this privacy notice or our data practices, please contact us at [contact information].
`;
};

/**
 * Detects if a content is likely a RoPA document
 */
export const isRopaDocument = (content: string): boolean => {
  const ropaIndicators = [
    /records? of processing/i,
    /controller information/i,
    /processing activit/i,
    /categories of data subjects/i,
    /categories of personal data/i,
    /retention period/i
  ];
  
  return ropaIndicators.some(indicator => indicator.test(content));
};

/**
 * Returns a list of suggestions for document improvements
 */
export const generateImprovementSuggestions = (content: string, documentType: string): string[] => {
  const suggestions: string[] = [];
  
  if (documentType === 'privacy-notice') {
    if (!content.includes('right to access') && !content.includes('right of access')) {
      suggestions.push("Add information about data subject's right to access");
    }
    if (!content.includes('retention')) {
      suggestions.push("Include details about data retention periods");
    }
    if (!content.includes('security') && !content.includes('protection')) {
      suggestions.push("Add information about security measures to protect personal data");
    }
  }
  
  return suggestions;
};

