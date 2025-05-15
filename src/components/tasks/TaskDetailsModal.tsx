
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ActionItem, TeamMember } from "@/types/action-items";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  CalendarDays, 
  Clock, 
  FileText, 
  Link,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TaskDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  task: ActionItem;
  teamMembers: TeamMember[];
  onStatusChange: (id: string, status: ActionItem['status']) => void;
  onAssignTask: (id: string, assigneeId: string) => void;
  onProgressUpdate: (id: string, progress: number) => void;
}

export function TaskDetailsModal({
  open,
  onOpenChange,
  task,
  teamMembers,
  onStatusChange,
  onAssignTask,
  onProgressUpdate
}: TaskDetailsModalProps) {
  const [localTask, setLocalTask] = useState<ActionItem>(task);
  const navigate = useNavigate();

  // Update local task when props change
  if (task.id !== localTask.id) {
    setLocalTask(task);
  }

  const handleStatusChange = (status: ActionItem['status']) => {
    setLocalTask({ ...localTask, status });
    onStatusChange(task.id, status);
  };

  const handleAssigneeChange = (assigneeId: string) => {
    setLocalTask({ ...localTask, assignee: assigneeId });
    onAssignTask(task.id, assigneeId);
  };

  const handleProgressChange = (value: number[]) => {
    const progress = value[0];
    setLocalTask({ ...localTask, progress });
    onProgressUpdate(task.id, progress);
  };

  const viewRegulation = () => {
    if (task.regulationId) {
      onOpenChange(false);
      navigate('/regulatory-intelligence');
    }
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'No due date';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDueDateColor = () => {
    if (!localTask.dueDate) return 'text-muted-foreground';
    
    const today = new Date();
    const dueDate = new Date(localTask.dueDate);
    
    // Past due
    if (dueDate < today) return 'text-destructive';
    
    // Due soon (within 3 days)
    const threeDaysFromNow = new Date(today);
    threeDaysFromNow.setDate(today.getDate() + 3);
    
    if (dueDate <= threeDaysFromNow) return 'text-amber-500';
    
    return 'text-green-500';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            {localTask.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              readOnly
              value={localTask.description}
              className="resize-none h-24"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={localTask.status}
                onValueChange={(value) => handleStatusChange(value as ActionItem['status'])}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inProgress">In Progress</SelectItem>
                  <SelectItem value="review">In Review</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="assignee">Assignee</Label>
              <Select
                value={localTask.assignee}
                onValueChange={handleAssigneeChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Assign to" />
                </SelectTrigger>
                <SelectContent>
                  {teamMembers.map((member) => (
                    <SelectItem key={member.id} value={member.id}>
                      {member.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Task Progress ({localTask.progress}%)</Label>
            </div>
            <Slider
              value={[localTask.progress]}
              min={0}
              max={100}
              step={5}
              onValueChange={handleProgressChange}
            />
            <Progress value={localTask.progress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-sm">Priority</Label>
              <div className={`
                inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
                ${localTask.priority === 'high' ? 'bg-red-100 text-red-800' :
                  localTask.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'}
              `}>
                {localTask.priority}
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-sm">Due Date</Label>
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span className={getDueDateColor()}>
                  {formatDate(localTask.dueDate)}
                </span>
              </div>
            </div>
          </div>

          {localTask.regulationId && (
            <>
              <Separator />
              <div className="space-y-2">
                <Label className="text-sm">Related Regulation</Label>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-start gap-2"
                  onClick={viewRegulation}
                >
                  <Link className="h-4 w-4 text-primary" />
                  <span className="text-sm">
                    {localTask.regulationId === "reg-1" 
                      ? "GDPR Article 28 Amendment" 
                      : "UK Data Protection Act Amendment"}
                  </span>
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </Button>
              </div>
            </>
          )}

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              Created on {new Date().toLocaleDateString()}
            </div>
            <Button 
              onClick={() => onOpenChange(false)}
              className="ml-auto"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
