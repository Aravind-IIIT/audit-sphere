
import { Template } from "@/types";

export const standardTrsTemplate: Template = {
  id: "trs-standard",
  name: "Standard Transfer Risk Assessment",
  type: "TRS",
  description: "Comprehensive assessment template for international data transfers based on EDPB recommendations",
  sections: [
    {
      id: "trs-s1",
      title: "Transfer Details",
      description: "Basic information about the data transfer",
      order: 1,
      questions: [
        {
          id: "trs-s1-q1",
          text: "Countries/territories involved in the transfer",
          order: 1,
          type: "text",
          required: true,
          guidance: "List all countries where the data will be transferred to"
        },
        {
          id: "trs-s1-q2",
          text: "Legal transfer mechanism",
          order: 2,
          type: "select",
          options: [
            "Standard Contractual Clauses (SCCs)",
            "Binding Corporate Rules (BCRs)",
            "Adequacy Decision",
            "Derogations under Article 49",
            "Other"
          ],
          required: true
        },
        {
          id: "trs-s1-q3",
          text: "Purpose of transfer",
          order: 3,
          type: "text",
          required: true
        }
      ]
    },
    {
      id: "trs-s2",
      title: "Recipient Assessment",
      description: "Assessment of the data recipient",
      order: 2,
      questions: [
        {
          id: "trs-s2-q1",
          text: "Recipient organization details",
          order: 1,
          type: "text",
          required: true
        },
        {
          id: "trs-s2-q2",
          text: "Recipient's role",
          order: 2,
          type: "select",
          options: [
            "Data Controller",
            "Data Processor",
            "Joint Controller",
            "Other"
          ],
          required: true
        },
        {
          id: "trs-s2-q3",
          text: "Recipient's data protection measures",
          order: 3,
          type: "text",
          required: true,
          guidance: "Describe technical and organizational measures implemented by the recipient"
        }
      ]
    },
    {
      id: "trs-s3",
      title: "Legal Framework Assessment",
      description: "Assessment of the legal framework in the recipient country",
      order: 3,
      questions: [
        {
          id: "trs-s3-q1",
          text: "Relevant laws affecting data protection",
          order: 1,
          type: "text",
          required: true,
          guidance: "Include surveillance laws, government access powers, etc."
        },
        {
          id: "trs-s3-q2",
          text: "Available legal remedies for data subjects",
          order: 2,
          type: "text",
          required: true
        },
        {
          id: "trs-s3-q3",
          text: "Risk level assessment",
          order: 3,
          type: "select",
          options: [
            "Low",
            "Medium",
            "High",
            "Critical"
          ],
          required: true
        }
      ]
    },
    {
      id: "trs-s4",
      title: "Supplementary Measures",
      description: "Additional measures to ensure adequate protection",
      order: 4,
      questions: [
        {
          id: "trs-s4-q1",
          text: "Technical measures",
          order: 1,
          type: "multiSelect",
          options: [
            "End-to-end encryption",
            "Pseudonymization",
            "Access controls",
            "Audit logging",
            "Other technical measures"
          ],
          required: true
        },
        {
          id: "trs-s4-q2",
          text: "Contractual measures",
          order: 2,
          type: "multiSelect",
          options: [
            "Additional contractual clauses",
            "Transparency obligations",
            "Audit rights",
            "Data subject rights assistance",
            "Other contractual safeguards"
          ],
          required: true
        },
        {
          id: "trs-s4-q3",
          text: "Organizational measures",
          order: 3,
          type: "multiSelect",
          options: [
            "Internal policies",
            "Staff training",
            "Incident response procedures",
            "Regular assessments",
            "Documentation requirements"
          ],
          required: true
        }
      ]
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date()
};

