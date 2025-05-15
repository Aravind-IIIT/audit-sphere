
export interface ActionItem {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'inProgress' | 'completed' | 'blocked' | 'review';
  progress: number;
  dueDate?: Date;
  regulationId?: string; // Reference to the regulation this action addresses
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TeamMember {
  id: string;
  name: string;
}
