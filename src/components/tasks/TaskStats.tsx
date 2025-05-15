
import { Card, CardContent } from "@/components/ui/card";
import { ActionItem } from "@/types/action-items";
import { CheckCircle, AlertCircle, Clock, XCircle } from "lucide-react";

interface TaskStatsProps {
  tasks: ActionItem[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const inProgressTasks = tasks.filter(task => task.status === 'inProgress').length;
  const blockedTasks = tasks.filter(task => task.status === 'blocked').length;
  const highPriorityTasks = tasks.filter(task => task.priority === 'high').length;

  // Calculate completion rate
  const completionRate = totalTasks > 0 
    ? Math.round((completedTasks / totalTasks) * 100) 
    : 0;

  return (
    <>
      <StatCard 
        title="Completion Rate" 
        value={`${completionRate}%`}
        description={`${completedTasks} of ${totalTasks} tasks completed`}
        icon={<CheckCircle className="h-5 w-5 text-green-500" />}
      />
      
      <StatCard 
        title="In Progress" 
        value={inProgressTasks.toString()}
        description={`${pendingTasks} pending, ${blockedTasks} blocked`}
        icon={<Clock className="h-5 w-5 text-blue-500" />}
      />
      
      <StatCard 
        title="High Priority" 
        value={highPriorityTasks.toString()}
        description="Tasks requiring immediate attention"
        icon={<AlertCircle className="h-5 w-5 text-red-500" />}
      />
    </>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="p-2 bg-background rounded-full border">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
