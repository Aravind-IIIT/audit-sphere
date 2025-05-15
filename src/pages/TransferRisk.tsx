
import AppLayout from "@/components/layout/AppLayout";
import { getTemplatesByType } from "@/data/templates";
import { TemplateCard } from "@/components/assessments/TemplateCard";

export default function TransferRisk() {
  const trsTemplates = getTemplatesByType("TRS");

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transfer Risk Assessment</h1>
          <p className="text-muted-foreground mt-2">
            Evaluate and document risks associated with international data transfers
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trsTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
          {trsTemplates.length === 0 && (
            <div className="col-span-3 text-center py-10 text-muted-foreground">
              No Transfer Risk Assessment templates available
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
