
import { Template } from "@/types";

export const privacyPolicyTemplate: Template = {
  id: "privacy-policy-standard",
  name: "Standard Privacy Policy Template",
  type: "PIA",
  description: "Comprehensive privacy policy template covering GDPR requirements and standard privacy practices",
  sections: [
    {
      id: "pp-s1",
      title: "Introduction and Overview",
      description: "Basic information about the organization and policy scope",
      order: 1,
      questions: [
        {
          id: "pp-s1-q1",
          text: "Company name and group affiliations",
          order: 1,
          type: "text",
          required: true,
        },
        {
          id: "pp-s1-q2",
          text: "Website or service URL",
          order: 2,
          type: "text",
          required: true,
        }
      ]
    },
    {
      id: "pp-s2",
      title: "Data Collection and Usage",
      description: "Information about data collection practices",
      order: 2,
      questions: [
        {
          id: "pp-s2-q1",
          text: "Types of personal data collected",
          order: 1,
          type: "multiSelect",
          options: [
            "Name",
            "Email address",
            "Phone number",
            "Address",
            "Payment information",
            "Browser cookies",
            "IP address",
            "Device information",
            "Usage data",
            "Location data"
          ],
          required: true,
        },
        {
          id: "pp-s2-q2",
          text: "Methods of data collection",
          order: 2,
          type: "multiSelect",
          options: [
            "Direct user input",
            "Automated collection",
            "Third-party sources",
            "Public sources",
            "Cookies and tracking",
            "Forms and surveys",
            "Customer service interactions"
          ],
          required: true,
        },
        {
          id: "pp-s2-q3",
          text: "Purposes of data processing",
          order: 3,
          type: "multiSelect",
          options: [
            "Order processing",
            "Account management",
            "Marketing communications",
            "Service improvement",
            "Legal compliance",
            "Security purposes",
            "Analytics"
          ],
          required: true,
        }
      ]
    },
    {
      id: "pp-s3",
      title: "Data Storage and Security",
      description: "Details about data storage and protection measures",
      order: 3,
      questions: [
        {
          id: "pp-s3-q1",
          text: "Data storage location",
          order: 1,
          type: "text",
          required: true,
        },
        {
          id: "pp-s3-q2",
          text: "Data retention period",
          order: 2,
          type: "text",
          required: true,
        },
        {
          id: "pp-s3-q3",
          text: "Security measures implemented",
          order: 3,
          type: "multiSelect",
          options: [
            "Encryption",
            "Access controls",
            "Regular security audits",
            "Employee training",
            "Data backup",
            "Incident response plan"
          ],
          required: true,
        }
      ]
    },
    {
      id: "pp-s4",
      title: "User Rights and Choices",
      description: "Information about data protection rights",
      order: 4,
      questions: [
        {
          id: "pp-s4-q1",
          text: "Contact information for data requests",
          order: 1,
          type: "text",
          required: true,
        },
        {
          id: "pp-s4-q2",
          text: "Response timeframe for requests",
          order: 2,
          type: "text",
          required: true,
        }
      ]
    },
    {
      id: "pp-s5",
      title: "Cookie Policy",
      description: "Details about cookie usage",
      order: 5,
      questions: [
        {
          id: "pp-s5-q1",
          text: "Types of cookies used",
          order: 1,
          type: "multiSelect",
          options: [
            "Essential cookies",
            "Functionality cookies",
            "Analytics cookies",
            "Advertising cookies",
            "Third-party cookies"
          ],
          required: true,
        },
        {
          id: "pp-s5-q2",
          text: "Cookie management options",
          order: 2,
          type: "text",
          required: true,
        }
      ]
    },
    {
      id: "pp-s6",
      title: "Updates and Contact Information",
      description: "Policy updates and contact details",
      order: 6,
      questions: [
        {
          id: "pp-s6-q1",
          text: "Last update date",
          order: 1,
          type: "date",
          required: true,
        },
        {
          id: "pp-s6-q2",
          text: "Company contact information",
          order: 2,
          type: "text",
          required: true,
        },
        {
          id: "pp-s6-q3",
          text: "Supervisory authority contact information",
          order: 3,
          type: "text",
          required: true,
        }
      ]
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date()
};
