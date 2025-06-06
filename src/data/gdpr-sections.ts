import { 
  Scale,
  ShieldCheck,
  Minimize2,
  ClipboardCheck,
  Timer,
  Lock,
  ScrollText,
  UserCheck,
  Trash2,
  ArrowRightLeft,
  Bell,
  Database,
  Users,
  Shield,
  UserCog,
  FileWarning,
  BookOpen,
  KeyRound,
  FileCheck,
  UserX,
  AlertTriangle
} from 'lucide-react';

export const gdprSections = [
  {
    id: 1,
    title: 'Lawful Basis for Processing Check',
    icon: Scale,
    purpose: 'Ensures that all processing of personal data is based on one of the lawful bases specified in the GDPR.',
    importance: 'Processing personal data without a valid lawful basis is a fundamental infringement of the GDPR.',
    criteria: 'Each processing activity must be mapped to one of the six lawful bases: consent, contract, legal obligation, vital interests, public task, or legitimate interests.',
    reference: 'GDPR Article 6.',
  },
  {
    id: 2,
    title: 'Purpose Limitation Validation',
    icon: ShieldCheck,
    purpose: 'Verifies that personal data is collected for specified, explicit, and legitimate purposes.',
    importance: 'Prevents organizations from using collected data for new, unrelated purposes without proper justification.',
    criteria: 'The purposes of data collection should be clearly defined and documented before collection.',
    reference: 'GDPR Article 5(1)(b).',
  },
  {
    id: 3,
    title: 'Data Minimization Assessment',
    icon: Minimize2,
    purpose: 'Checks if the personal data collected is adequate, relevant, and limited to what is necessary.',
    importance: 'Limits the amount of personal data held to only what is strictly required.',
    criteria: 'Data collection forms and processes should only request necessary information.',
    reference: 'GDPR Article 5(1)(c).',
  },
  {
    id: 4,
    title: 'Accuracy and Data Quality Check',
    icon: ClipboardCheck,
    purpose: 'Assesses whether personal data is accurate and kept up to date.',
    importance: 'Ensures that decisions based on personal data are correct.',
    criteria: 'Processes should be in place to ensure data accuracy and regular reviews.',
    reference: 'GDPR Article 5(1)(d) & Article 16.',
  },
  {
    id: 5,
    title: 'Storage Limitation Policy Enforcement',
    icon: Timer,
    purpose: 'Verifies that personal data is kept only as long as necessary.',
    importance: 'Prevents the indefinite retention of personal data.',
    criteria: 'Data retention policies should define specific time limits for different types of data.',
    reference: 'GDPR Article 5(1)(e).',
  },
  {
    id: 6,
    title: 'Security Measures Audit',
    icon: Lock,
    purpose: 'Checks implementation of security measures for data protection.',
    importance: 'Safeguards personal data from breaches and unauthorized access.',
    criteria: 'Security measures should be appropriate to the risk, including encryption and access controls.',
    reference: 'GDPR Article 5(1)(f) & Article 32.',
  },
  {
    id: 7,
    title: 'Accountability Documentation Review',
    icon: ScrollText,
    purpose: 'Confirms compliance demonstration capability.',
    importance: 'Establishes the controller\'s obligation to prove GDPR adherence.',
    criteria: 'Maintain detailed records of processing activities and implement appropriate policies.',
    reference: 'GDPR Article 5(2) & Article 24.',
  },
  {
    id: 8,
    title: 'Data Subject Rights Management',
    icon: UserCheck,
    purpose: 'Ensures proper handling of data subject rights.',
    importance: 'Enables individuals to control their personal data.',
    criteria: 'Processes for handling access, rectification, and erasure requests.',
    reference: 'GDPR Articles 15-22.',
  },
  {
    id: 9,
    title: 'Erasure Request Handling',
    icon: Trash2,
    purpose: 'Manages right to be forgotten requests.',
    importance: 'Allows individuals to have their data removed.',
    criteria: 'Process for handling erasure requests and considering exceptions.',
    reference: 'GDPR Article 17.',
  },
  {
    id: 10,
    title: 'Data Portability Implementation',
    icon: ArrowRightLeft,
    purpose: 'Enables data transfer between controllers.',
    importance: 'Facilitates personal data transfer between service providers.',
    criteria: 'Ability to provide data in a structured, machine-readable format.',
    reference: 'GDPR Article 20.',
  },
  {
    id: 11,
    title: 'Breach Notification System',
    icon: Bell,
    purpose: 'Manages data breach detection and reporting.',
    importance: 'Ensures timely notification of data breaches.',
    criteria: 'Procedures for detecting, reporting, and documenting breaches.',
    reference: 'GDPR Articles 33 and 34.',
  },
  {
    id: 12,
    title: 'Special Categories Processing',
    icon: Database,
    purpose: 'Handles sensitive personal data processing.',
    importance: 'Provides extra protection for sensitive data.',
    criteria: 'Additional safeguards for processing special categories of data.',
    reference: 'GDPR Article 9.',
  },
  {
    id: 13,
    title: 'International Transfer Controls',
    icon: Users,
    purpose: 'Manages data transfers outside the EEA.',
    importance: 'Ensures equivalent data protection in third countries.',
    criteria: 'Appropriate safeguards for international data transfers.',
    reference: 'GDPR Chapter V (Articles 44-50).',
  },
  {
    id: 14,
    title: 'Impact Assessment Process',
    icon: FileWarning,
    purpose: 'Conducts Data Protection Impact Assessments.',
    importance: 'Identifies and mitigates privacy risks.',
    criteria: 'DPIA process for high-risk processing activities.',
    reference: 'GDPR Article 35.',
  },
  {
    id: 15,
    title: 'DPO Requirements Check',
    icon: UserCog,
    purpose: 'Verifies DPO appointment and role.',
    importance: 'Ensures independent data protection oversight.',
    criteria: 'DPO appointment where required by GDPR.',
    reference: 'GDPR Articles 37-39.',
  }
];
