
import React from 'react';
import { ListTodo, ChevronDown } from 'lucide-react';
import { ActionItem, TeamMember } from '@/types/action-items';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ActionItemsProps {
  items: ActionItem[];
  teamMembers: TeamMember[];
  onAssignTask: (itemId: string, assigneeId: string) => void;
  onStatusChange: (itemId: string, status: ActionItem['status']) => void;
  onViewDetails?: (itemId: string) => void;
  onProgressUpdate?: (itemId: string, progress: number) => void;
}

export const ActionItems: React.FC<ActionItemsProps> = ({
  items,
  teamMembers,
  onAssignTask,
  onStatusChange,
  onViewDetails,
  onProgressUpdate,
}) => {
  if (items.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Action Items</CardTitle>
          <CardDescription>
            Track and manage policy implementation tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-muted-foreground mb-4">No action items found</p>
            <Button variant="outline">Create New Task</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'No due date';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Action Items</CardTitle>
        <CardDescription>
          Track and manage policy implementation tasks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <Collapsible key={item.id}>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ListTodo className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge 
                      variant="outline"
                      className={`ml-2 ${
                        item.status === 'completed' ? 'bg-green-100 text-green-800 border-green-200' :
                        item.status === 'inProgress' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                        item.status === 'review' ? 'bg-purple-100 text-purple-800 border-purple-200' :
                        item.status === 'blocked' ? 'bg-red-100 text-red-800 border-red-200' :
                        'bg-gray-100 text-gray-800 border-gray-200'
                      }`}
                    >
                      {item.status === 'inProgress' ? 'In Progress' :
                       item.status === 'review' ? 'In Review' :
                       item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {onViewDetails && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => onViewDetails(item.id)}
                      >
                        Details
                      </Button>
                    )}
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </div>
                
                <CollapsibleContent>
                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor={`assignee-${item.id}`}>Assign to</Label>
                        <Select
                          value={item.assignee}
                          onValueChange={(value) => onAssignTask(item.id, value)}
                        >
                          <SelectTrigger id={`assignee-${item.id}`}>
                            <SelectValue placeholder="Select team member" />
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
                      
                      <div className="space-y-2">
                        <Label>Status</Label>
                        <Select
                          value={item.status}
                          onValueChange={(value) => onStatusChange(item.id, value as ActionItem['status'])}
                        >
                          <SelectTrigger>
                            <SelectValue />
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

                      <div className="md:col-span-2 space-y-2">
                        <div className="flex justify-between items-center">
                          <Label>Progress</Label>
                          <span className="text-sm text-muted-foreground">{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>

                      <div className="flex items-center gap-2">
                        <div>
                          <Label>Priority</Label>
                          <div className={`
                            inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${item.priority === 'high' ? 'bg-red-100 text-red-800' :
                              item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'}
                          `}>
                            {item.priority}
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label>Due Date</Label>
                        <div className="flex items-center gap-1.5 mt-1">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">
                            {formatDate(item.dueDate)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {item.regulationId && (
                      <div className="pt-2">
                        <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
                          View related regulation
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
