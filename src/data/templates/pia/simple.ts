
import { Template } from "@/types";

export const simplePiaTemplate: Template = {
  id: "pia-simple",
  name: "Simple PIA Template",
  type: "PIA",
  description: "Streamlined Privacy Impact Assessment template for smaller projects or lower-risk processing activities",
  sections: [
    {
      id: "pia-s1",
      title: "Project Information",
      description: "Basic details about the project or initiative",
      order: 1,
      questions: [
        {
          id: "pia-s1-q1",
          text: "Project name",
          order: 1,
          type: "text",
          required: true,
        },
        {
          id: "pia-s1-q2",
          text: "Project overview",
          order: 2,
          type: "text",
          required: true,
        }
      ]
    },
    {
      id: "pia-s2",
      title: "Data Collection",
      description: "Information about the data collection process",
      order: 2,
      questions: [
        {
          id: "pia-s2-q1",
          text: "What personal data will be collected?",
          order: 1,
          type: "text",
          required: true,
        },
        {
          id: "pia-s2-q2",
          text: "How will the data be collected?",
          order: 2,
          type: "text",
          required: true,
        }
      ]
    },
    {
      id: "pia-s3",
      title: "Quick Risk Assessment",
      description: "Identify basic privacy risks",
      order: 3,
      questions: [
        {
          id: "pia-s3-q1",
          text: "Risk of unauthorized access",
          order: 1,
          type: "text",
          required: true,
        },
        {
          id: "pia-s3-q2",
          text: "Risk of data loss",
          order: 2,
          type: "text",
          required: true,
        }
      ]
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date()
};
