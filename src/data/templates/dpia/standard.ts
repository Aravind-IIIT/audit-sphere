
import { Template } from "@/types";

export const standardDpiaTemplate: Template = {
  id: "dpia-standard",
  name: "Standard DPIA Template",
  type: "DPIA",
  description: "Comprehensive Data Protection Impact Assessment template based on GDPR Article 35 requirements",
  sections: [
    {
      id: "dpia-s1",
      title: "Project Overview",
      description: "Basic information about the project or process being assessed",
      order: 1,
      questions: [
        {
          id: "dpia-s1-q1",
          text: "Name of the project/process",
          order: 1,
          type: "text",
          required: true,
        },
        {
          id: "dpia-s1-q2",
          text: "Description of the project/process",
          order: 2,
          type: "text",
          required: true,
          guidance: "Provide a brief description of the project, including its objectives and intended outcomes"
        },
        {
          id: "dpia-s1-q3",
          text: "Data controller(s) and processor(s) involved",
          order: 3,
          type: "text",
          required: true,
        },
      ]
    },
    {
      id: "dpia-s2",
      title: "Data Processing Details",
      description: "Information about the personal data being processed",
      order: 2,
      questions: [
        {
          id: "dpia-s2-q1",
          text: "Types of personal data being processed",
          order: 1,
          type: "multiSelect",
          options: [
            "Name", 
            "Contact details", 
            "ID numbers", 
            "Location data", 
            "Online identifiers", 
            "Health data", 
            "Biometric data", 
            "Genetic data",
            "Financial data",
            "Criminal records",
            "Religious beliefs",
            "Political opinions",
            "Sexual orientation",
            "Other special category data"
          ],
          required: true,
        },
        {
          id: "dpia-s2-q2",
          text: "Purpose(s) of processing",
          order: 2,
          type: "text",
          required: true,
        },
        {
          id: "dpia-s2-q3",
          text: "Legal basis for processing",
          order: 3,
          type: "select",
          options: [
            "Consent", 
            "Contract", 
            "Legal obligation", 
            "Vital interests", 
            "Public task", 
            "Legitimate interests"
          ],
          required: true,
          guidance: "Select the appropriate legal basis under GDPR Article 6"
        },
      ]
    },
    {
      id: "dpia-s3",
      title: "Necessity and Proportionality",
      description: "Assessment of the necessity and proportionality of processing",
      order: 3,
      questions: [
        {
          id: "dpia-s3-q1",
          text: "Is the processing necessary to achieve the stated purpose?",
          order: 1,
          type: "boolean",
          required: true,
        },
        {
          id: "dpia-s3-q2",
          text: "Could the same purpose be achieved with less data or in a less intrusive way?",
          order: 2,
          type: "boolean",
          required: true,
        },
        {
          id: "dpia-s3-q3",
          text: "How will data subjects be informed about the processing?",
          order: 3,
          type: "text",
          required: true,
        },
      ]
    },
    {
      id: "dpia-s4",
      title: "Risk Assessment",
      description: "Identification and assessment of risks to individuals",
      order: 4,
      questions: [
        {
          id: "dpia-s4-q1",
          text: "Potential risk of unauthorized access to personal data",
          order: 1,
          type: "text",
          required: true,
          guidance: "Consider the likelihood and severity of unauthorized access to the personal data being processed"
        },
        {
          id: "dpia-s4-q2",
          text: "Potential risk of data being used for purposes beyond those originally stated",
          order: 2,
          type: "text",
          required: true,
        },
        {
          id: "dpia-s4-q3",
          text: "Potential risk of data inaccuracy or loss of data integrity",
          order: 3,
          type: "text",
          required: true,
        },
      ]
    },
    {
      id: "dpia-s5",
      title: "Mitigation Measures",
      description: "Measures to reduce identified risks",
      order: 5,
      questions: [
        {
          id: "dpia-s5-q1",
          text: "Security measures implemented to protect the data",
          order: 1,
          type: "text",
          required: true,
          guidance: "Describe technical and organizational security measures"
        },
        {
          id: "dpia-s5-q2",
          text: "Measures to ensure data accuracy and quality",
          order: 2,
          type: "text",
          required: true,
        },
        {
          id: "dpia-s5-q3",
          text: "Mechanisms for data subjects to exercise their rights",
          order: 3,
          type: "text",
          required: true,
        },
      ]
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date()
};
