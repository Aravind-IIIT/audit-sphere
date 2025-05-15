
import { RegulatorySource } from "./types/regulatory-sources";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Library, Settings, Trash2 } from "lucide-react";

interface SourcesTableProps {
  sources: RegulatorySource[];
}

export const SourcesTable = ({ sources }: SourcesTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Source</TableHead>
          <TableHead>Jurisdiction</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Categories</TableHead>
          <TableHead>Last Scanned</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sources.map((source) => (
          <TableRow key={source.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                {source.type === "official" ? (
                  <Library className="h-4 w-4 text-blue-600" />
                ) : (
                  <Globe className="h-4 w-4 text-emerald-600" />
                )}
                {source.name}
              </div>
            </TableCell>
            <TableCell>{source.jurisdiction}</TableCell>
            <TableCell>
              {source.type === "official" ? (
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Official Journal
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  Regulator
                </Badge>
              )}
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {source.categories.map((category, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>{source.lastScanned}</TableCell>
            <TableCell>
              {source.active ? (
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 flex items-center gap-1">
                  <Check className="h-3 w-3" />
                  Active
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                  Inactive
                </Badge>
              )}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
