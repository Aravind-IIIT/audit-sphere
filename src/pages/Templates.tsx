
import AppLayout from "@/components/layout/AppLayout";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/assessments/TemplateCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Templates = () => {
  // Group templates by type
  const dpiaTemplates = templates.filter((t) => t.type === "DPIA");
  const piaTemplates = templates.filter((t) => t.type === "PIA");

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
          <p className="text-muted-foreground mt-1">
            Choose a template to start a new assessment
          </p>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Templates</TabsTrigger>
            <TabsTrigger value="dpia">DPIA Templates</TabsTrigger>
            <TabsTrigger value="pia">PIA Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
              {templates.length === 0 && (
                <div className="col-span-3 text-center py-10 text-muted-foreground">
                  No templates found
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="dpia" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dpiaTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
              {dpiaTemplates.length === 0 && (
                <div className="col-span-3 text-center py-10 text-muted-foreground">
                  No DPIA templates found
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="pia" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {piaTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
              {piaTemplates.length === 0 && (
                <div className="col-span-3 text-center py-10 text-muted-foreground">
                  No PIA templates found
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Templates;
