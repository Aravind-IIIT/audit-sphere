
import { Template, TemplateType } from "@/types";
import { dpiaTemplates } from "./dpia";
import { piaTemplates } from "./pia";
import { ropaTemplates } from "./ropa";
import { trsTemplates } from "./trs";

export const templates: Template[] = [
  ...dpiaTemplates,
  ...piaTemplates,
  ...ropaTemplates,
  ...trsTemplates
];

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};

export const getTemplatesByType = (type: TemplateType): Template[] => {
  return templates.filter(template => template.type === type);
};

