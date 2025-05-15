
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { SourcesTable } from "./SourcesTable";
import { RegulatorySource } from "./types/regulatory-sources";
import { AddSourceDialog } from "./AddSourceDialog";
import { useToast } from "@/hooks/use-toast";

interface ConfiguredSourcesTabProps {
  sources: RegulatorySource[];
}

export const ConfiguredSourcesTab = ({ sources: initialSources }: ConfiguredSourcesTabProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sources, setSources] = useState(initialSources);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const { toast } = useToast();

  const filteredSources = sources.filter(source => 
    source.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    source.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddSource = (newSource: Omit<RegulatorySource, "id" | "lastScanned">) => {
    const source: RegulatorySource = {
      ...newSource,
      id: Date.now().toString(),
      lastScanned: new Date().toISOString(),
    };
    
    setSources(prev => [...prev, source]);
    toast({
      title: "Source Added",
      description: "New regulatory source has been added successfully.",
    });
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Monitored Regulatory Sources</CardTitle>
            <CardDescription>
              Configure the sources that will be monitored for regulatory changes
            </CardDescription>
          </div>
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Source
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search sources..." 
            className="max-w-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <SourcesTable sources={filteredSources} />
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-6">
        <Button variant="outline">Scan All Sources Now</Button>
        <div className="text-sm text-muted-foreground">
          Next automated scan scheduled for: <span className="font-medium">2025-04-15 00:00 UTC</span>
        </div>
      </CardFooter>

      <AddSourceDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        onAddSource={handleAddSource}
      />
    </Card>
  );
};
