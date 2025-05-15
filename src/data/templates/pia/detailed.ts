
import { Template } from "@/types";

export const detailedPiaTemplate: Template = {
  id: "pia-detailed",
  name: "Detailed PIA Template",
  type: "PIA",
  description: "Comprehensive Privacy Impact Assessment template with detailed compliance sections",
  sections: [
    {
      id: "pia-det-s1",
      title: "Project Overview",
      description: "Detailed information about the project scope",
      order: 1,
      questions: [
        {
          id: "pia-det-s1-q1",
          text: "Project name",
          order: 1,
          type: "text",
          required: true,
        },
        {
          id: "pia-det-s1-q2",
          text: "Project description",
          order: 2,
          type: "text",
          required: true,
        },
        {
          id: "pia-det-s1-q3",
          text: "Project stakeholders",
          order: 3,
          type: "text",
          required: true,
        }
      ]
    },
    {
      id: "pia-det-s2",
      title: "Data Inventory",
      description: "Comprehensive inventory of data elements being processed",
      order: 2,
      questions: [
        {
          id: "pia-det-s2-q1",
          text: "Personal data elements",
          order: 1,
          type: "multiSelect",
          options: [
            "Name", 
            "Email", 
            "Phone number", 
            "Address", 
            "Date of birth", 
            "Social security number",
            "Financial information",
            "Health information",
            "Biometric data",
            "Other"
          ],
          required: true,
        },
        {
          id: "pia-det-s2-q2",
          text: "Special category data",
          order: 2,
          type: "multiSelect",
          options: [
            "Racial or ethnic origin",
            "Political opinions",
            "Religious beliefs",
            "Trade union membership",
            "Genetic data",
            "Health data",
            "Sex life",
            "Sexual orientation",
            "Criminal records",
            "None"
          ],
          required: true,
        }
      ]
    },
    {
      id: "pia-det-s3",
      title: "Detailed Risk Assessment",
      description: "Thorough assessment of privacy risks",
      order: 3,
      questions: [
        {
          id: "pia-det-s3-q1",
          text: "Risk of data breach",
          order: 1,
          type: "text",
          required: true,
        },
        {
          id: "pia-det-s3-q2",
          text: "Risk of data misuse",
          order: 2,
          type: "text",
          required: true,
        },
        {
          id: "pia-det-s3-q3",
          text: "Risk of failure to meet data subject rights",
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
