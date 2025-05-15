
import AppLayout from "@/components/layout/AppLayout";
import { getTemplatesByType } from "@/data/templates";
import { TemplateCard } from "@/components/assessments/TemplateCard";

export default function RecordsProcessing() {
  const ropaTemplates = getTemplatesByType("ROPA");

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Records of Processing Activities</h1>
          <p className="text-muted-foreground mt-2">
            Maintain detailed records of your data processing activities as required by GDPR Article 30
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ropaTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
          {ropaTemplates.length === 0 && (
            <div className="col-span-3 text-center py-10 text-muted-foreground">
              No ROPA templates available
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
