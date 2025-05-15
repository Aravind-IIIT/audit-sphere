
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RegulatorySource } from "./types/regulatory-sources";
import { useToast } from "@/hooks/use-toast";

interface AddSourceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddSource: (source: Omit<RegulatorySource, "id" | "lastScanned">) => void;
}

export function AddSourceDialog({ open, onOpenChange, onAddSource }: AddSourceDialogProps) {
  const [formData, setFormData] = useState<{
    name: string;
    type: "official" | "regulator";
    jurisdiction: string;
    url: string;
    categories: string;
    active: boolean;
  }>({
    name: "",
    type: "official",
    jurisdiction: "",
    url: "",
    categories: "",
    active: true,
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.jurisdiction || !formData.url) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    onAddSource({
      ...formData,
      categories: formData.categories.split(",").map(c => c.trim()),
    });

    setFormData({
      name: "",
      type: "official",
      jurisdiction: "",
      url: "",
      categories: "",
      active: true,
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Regulatory Source</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Source Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter source name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Type</Label>
            <Select
              value={formData.type}
              onValueChange={(value: "official" | "regulator") => 
                setFormData(prev => ({ ...prev, type: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="official">Official Journal</SelectItem>
                <SelectItem value="regulator">Regulator</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="jurisdiction">Jurisdiction</Label>
            <Input
              id="jurisdiction"
              value={formData.jurisdiction}
              onChange={(e) => setFormData(prev => ({ ...prev, jurisdiction: e.target.value }))}
              placeholder="Enter jurisdiction"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              type="url"
              value={formData.url}
              onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
              placeholder="Enter source URL"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="categories">Categories</Label>
            <Input
              id="categories"
              value={formData.categories}
              onChange={(e) => setFormData(prev => ({ ...prev, categories: e.target.value }))}
              placeholder="Enter categories (comma-separated)"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Add Source</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
