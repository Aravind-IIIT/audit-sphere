
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { ActionItems } from "@/components/policy/ActionItems";
import { ActionItem, TeamMember } from "@/types/action-items";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { TaskFilter } from "@/components/tasks/TaskFilter";
import { TaskDetailsModal } from "@/components/tasks/TaskDetailsModal";
import { TaskStats } from "@/components/tasks/TaskStats";
import { ListPlus, Filter } from "lucide-react";
import { toast } from "sonner";
import { CreateTaskDialog } from "@/components/tasks/CreateTaskDialog";

// Mock team members
const mockTeamMembers: TeamMember[] = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Robert Johnson" },
  { id: "4", name: "Emily Williams" }
];

// Mock action items
const mockActionItems: ActionItem[] = [
  {
    id: "1",
    title: "Update Data Processing Agreement",
    description: "Update Section 5.3 with new standard contractual clauses reference and requirements",
    assignee: "1",
    priority: "high",
    status: "pending",
    progress: 0,
    dueDate: new Date("2025-05-15"),
    regulationId: "reg-1"
  },
  {
    id: "2",
    title: "Implement Data Transfer Monitoring",
    description: "Add technical measures for monitoring cross-border data transfers in compliance with GDPR Article 28",
    assignee: "2",
    priority: "medium",
    status: "inProgress",
    progress: 30,
    dueDate: new Date("2025-05-20"),
    regulationId: "reg-1"
  },
  {
    id: "3",
    title: "Create Quarterly Processor Audit Schedule",
    description: "Establish quarterly audit plan with specific focus on transfer mechanisms",
    assignee: "3",
    priority: "medium",
    status: "review",
    progress: 90,
    dueDate: new Date("2025-04-30"),
    regulationId: "reg-1"
  },
  {
    id: "4",
    title: "Update Breach Response Plan",
    description: "Revise notification timeline from 72 to 48 hours for UK breaches",
    assignee: "4",
    priority: "high",
    status: "completed",
    progress: 100,
    dueDate: new Date("2025-04-10"),
    regulationId: "reg-2"
  },
  {
    id: "5",
    title: "Revise Escalation Protocol",
    description: "Update escalation timelines to accommodate faster notification requirements",
    assignee: "1",
    priority: "low",
    status: "blocked",
    progress: 50,
    dueDate: new Date("2025-05-05"),
    regulationId: "reg-2"
  }
];

const Tasks = () => {
  const [actionItems, setActionItems] = useState<ActionItem[]>(mockActionItems);
  const [filteredItems, setFilteredItems] = useState<ActionItem[]>(mockActionItems);
  const [selectedItem, setSelectedItem] = useState<ActionItem | null>(null);
  const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const handleAssignTask = (itemId: string, assigneeId: string) => {
    const updatedItems = actionItems.map(item => 
      item.id === itemId ? { ...item, assignee: assigneeId } : item
    );
    setActionItems(updatedItems);
    setFilteredItems(filterItemsByTab(updatedItems, activeTab));
    toast.success("Task assigned successfully");
  };

  const handleStatusChange = (itemId: string, status: ActionItem['status']) => {
    const updatedItems = actionItems.map(item => 
      item.id === itemId ? { ...item, status } : item
    );
    setActionItems(updatedItems);
    setFilteredItems(filterItemsByTab(updatedItems, activeTab));
    toast.success("Task status updated");
  };

  const handleProgressUpdate = (itemId: string, progress: number) => {
    const updatedItems = actionItems.map(item => 
      item.id === itemId ? { ...item, progress } : item
    );
    setActionItems(updatedItems);
    setFilteredItems(filterItemsByTab(updatedItems, activeTab));
  };

  const handleFilter = (filters: any) => {
    let filtered = actionItems;
    
    if (filters.priority) {
      filtered = filtered.filter(item => item.priority === filters.priority);
    }
    
    if (filters.assignee) {
      filtered = filtered.filter(item => item.assignee === filters.assignee);
    }
    
    if (filters.dueDate) {
      // Filter by due date
      const today = new Date();
      if (filters.dueDate === 'overdue') {
        filtered = filtered.filter(item => item.dueDate && new Date(item.dueDate) < today);
      } else if (filters.dueDate === 'today') {
        filtered = filtered.filter(item => {
          if (!item.dueDate) return false;
          const itemDate = new Date(item.dueDate);
          return itemDate.getDate() === today.getDate() && 
                 itemDate.getMonth() === today.getMonth() && 
                 itemDate.getFullYear() === today.getFullYear();
        });
      } else if (filters.dueDate === 'thisWeek') {
        const endOfWeek = new Date();
        endOfWeek.setDate(today.getDate() + (7 - today.getDay()));
        filtered = filtered.filter(item => {
          if (!item.dueDate) return false;
          const itemDate = new Date(item.dueDate);
          return itemDate >= today && itemDate <= endOfWeek;
        });
      }
    }
    
    setFilteredItems(filtered);
  };

  const filterItemsByTab = (items: ActionItem[], tab: string): ActionItem[] => {
    if (tab === 'all') return items;
    if (tab === 'mine') return items.filter(item => item.assignee === "1"); // Assuming current user is "1"
    if (tab === 'pending') return items.filter(item => item.status === 'pending');
    if (tab === 'in-progress') return items.filter(item => item.status === 'inProgress');
    if (tab === 'completed') return items.filter(item => item.status === 'completed');
    if (tab === 'blocked') return items.filter(item => item.status === 'blocked');
    return items;
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setFilteredItems(filterItemsByTab(actionItems, value));
  };

  const handleViewDetails = (itemId: string) => {
    const item = actionItems.find(item => item.id === itemId);
    if (item) {
      setSelectedItem(item);
      setIsTaskDetailsOpen(true);
    }
  };

  const handleCreateTask = (newTask: Omit<ActionItem, 'id'>) => {
    const newId = `task-${actionItems.length + 1}`;
    const newActionItem: ActionItem = {
      ...newTask,
      id: newId
    };
    
    const updatedItems = [...actionItems, newActionItem];
    setActionItems(updatedItems);
    setFilteredItems(filterItemsByTab(updatedItems, activeTab));
    setIsCreateDialogOpen(false);
    toast.success("New task created successfully");
  };

  return (
    <AppLayout>
      <div className="flex items-center justify-between space-y-2 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">
            Manage and track compliance and policy tasks
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            onClick={() => setIsCreateDialogOpen(true)}
            className="flex items-center gap-2"
          >
            <ListPlus className="h-4 w-4" />
            Create Task
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-4">
        <TaskStats tasks={actionItems} />
      </div>

      <div className="space-y-4">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="all">All Tasks</TabsTrigger>
              <TabsTrigger value="mine">My Tasks</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="blocked">Blocked</TabsTrigger>
            </TabsList>
            <TaskFilter onFilter={handleFilter} teamMembers={mockTeamMembers} />
          </div>

          <TabsContent value={activeTab} className="space-y-4">
            <ActionItems 
              items={filteredItems} 
              teamMembers={mockTeamMembers} 
              onAssignTask={handleAssignTask} 
              onStatusChange={handleStatusChange}
              onViewDetails={handleViewDetails}
              onProgressUpdate={handleProgressUpdate}
            />
          </TabsContent>
        </Tabs>
      </div>

      {selectedItem && (
        <TaskDetailsModal 
          open={isTaskDetailsOpen} 
          onOpenChange={setIsTaskDetailsOpen} 
          task={selectedItem}
          teamMembers={mockTeamMembers}
          onStatusChange={handleStatusChange}
          onAssignTask={handleAssignTask}
          onProgressUpdate={handleProgressUpdate}
        />
      )}

      <CreateTaskDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onCreateTask={handleCreateTask}
        teamMembers={mockTeamMembers}
      />
    </AppLayout>
  );
};

export default Tasks;
