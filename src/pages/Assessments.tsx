
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AssessmentStatusBadge } from "@/components/assessments/AssessmentStatusBadge";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Filter, Plus, Search, FileText } from "lucide-react";
import { assessments } from "@/data/assessments";
import { Link } from "react-router-dom";

const Assessments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);

  // Filter assessments based on search term and filters
  const filteredAssessments = assessments.filter((assessment) => {
    const matchesSearch = assessment.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter.length === 0 || statusFilter.includes(assessment.status);
    const matchesType =
      typeFilter.length === 0 || typeFilter.includes(assessment.type);
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleStatusFilterChange = (status: string) => {
    setStatusFilter((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const handleTypeFilterChange = (type: string) => {
    setTypeFilter((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  // Get unique assessment types
  const assessmentTypes = [...new Set(assessments.map((a) => a.type))];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Assessments</h1>
            <p className="text-muted-foreground mt-1">
              Manage your privacy impact assessments
            </p>
          </div>
          <Button asChild>
            <Link to="/assessments/new">
              <Plus className="mr-2 h-4 w-4" />
              New Assessment
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Assessments</CardTitle>
            <CardDescription>
              View and manage all your DPIA and PIA assessments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search assessments..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Status
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem
                      checked={statusFilter.includes("draft")}
                      onCheckedChange={() => handleStatusFilterChange("draft")}
                    >
                      Draft
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={statusFilter.includes("inProgress")}
                      onCheckedChange={() => handleStatusFilterChange("inProgress")}
                    >
                      In Progress
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={statusFilter.includes("completed")}
                      onCheckedChange={() => handleStatusFilterChange("completed")}
                    >
                      Completed
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={statusFilter.includes("archived")}
                      onCheckedChange={() => handleStatusFilterChange("archived")}
                    >
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Type
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {assessmentTypes.map((type) => (
                      <DropdownMenuCheckboxItem
                        key={type}
                        checked={typeFilter.includes(type)}
                        onCheckedChange={() => handleTypeFilterChange(type)}
                      >
                        {type}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead className="text-right">Created</TableHead>
                    <TableHead className="text-right">Last Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAssessments.map((assessment) => (
                    <TableRow key={assessment.id}>
                      <TableCell className="font-medium">
                        <Link
                          to={`/assessments/${assessment.id}`}
                          className="hover:text-primary hover:underline"
                        >
                          {assessment.name}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{assessment.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <AssessmentStatusBadge status={assessment.status} />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-24 rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: `${assessment.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs">
                            {assessment.progress}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {assessment.createdAt.toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        {assessment.updatedAt.toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}

                  {filteredAssessments.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="h-24 text-center text-muted-foreground"
                      >
                        No assessments found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Assessments;
