
import { Template } from "@/types";

export const standardRopaTemplate: Template = {
  id: "ropa-standard",
  name: "Standard ROPA Template",
  type: "ROPA",
  description: "Comprehensive Records of Processing Activities template based on GDPR Article 30 requirements",
  sections: [
    {
      id: "ropa-s1",
      title: "Controller Information",
      description: "Basic information about the data controller",
      order: 1,
      questions: [
        {
          id: "ropa-s1-q1",
          text: "Name and contact details of the controller",
          order: 1,
          type: "text",
          required: true,
        },
        {
          id: "ropa-s1-q2",
          text: "Name and contact details of the Data Protection Officer (if applicable)",
          order: 2,
          type: "text",
          required: false,
        },
        {
          id: "ropa-s1-q3",
          text: "Joint controller details (if applicable)",
          order: 3,
          type: "text",
          required: false,
        }
      ]
    },
    {
      id: "ropa-s2",
      title: "Processing Details",
      description: "Information about the processing activities",
      order: 2,
      questions: [
        {
          id: "ropa-s2-q1",
          text: "Purpose(s) of the processing",
          order: 1,
          type: "text",
          required: true,
          guidance: "Describe why the personal data is being processed"
        },
        {
          id: "ropa-s2-q2",
          text: "Categories of data subjects",
          order: 2,
          type: "multiSelect",
          options: [
            "Employees",
            "Customers",
            "Suppliers",
            "Website visitors",
            "Marketing recipients",
            "Job applicants",
            "Other"
          ],
          required: true
        },
        {
          id: "ropa-s2-q3",
          text: "Categories of personal data",
          order: 3,
          type: "multiSelect",
          options: [
            "Basic personal information",
            "Contact details",
            "Financial information",
            "Employment details",
            "Education and training",
            "Special category data",
            "Other"
          ],
          required: true
        }
      ]
    },
    {
      id: "ropa-s3",
      title: "Data Sharing and Retention",
      description: "Information about recipients and retention periods",
      order: 3,
      questions: [
        {
          id: "ropa-s3-q1",
          text: "Categories of recipients",
          order: 1,
          type: "multiSelect",
          options: [
            "Internal departments",
            "Service providers",
            "Public authorities",
            "Other controllers",
            "International organizations"
          ],
          required: true
        },
        {
          id: "ropa-s3-q2",
          text: "Retention period",
          order: 2,
          type: "text",
          required: true,
          guidance: "Specify time limits for erasure of different categories of data"
        }
      ]
    },
    {
      id: "ropa-s4",
      title: "Security Measures",
      description: "Technical and organizational security measures",
      order: 4,
      questions: [
        {
          id: "ropa-s4-q1",
          text: "Technical security measures",
          order: 1,
          type: "multiSelect",
          options: [
            "Encryption",
            "Access controls",
            "Backup procedures",
            "Network security",
            "Monitoring systems"
          ],
          required: true
        },
        {
          id: "ropa-s4-q2",
          text: "Organizational security measures",
          order: 2,
          type: "multiSelect",
          options: [
            "Staff training",
            "Policies and procedures",
            "Physical security",
            "Data minimization practices",
            "Regular audits"
          ],
          required: true
        }
      ]
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date()
};
