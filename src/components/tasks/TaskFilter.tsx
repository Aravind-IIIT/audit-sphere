
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Filter } from "lucide-react";
import { TeamMember } from "@/types/action-items";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskFilterProps {
  onFilter: (filters: any) => void;
  teamMembers: TeamMember[];
}

export function TaskFilter({ onFilter, teamMembers }: TaskFilterProps) {
  const [activeFilters, setActiveFilters] = useState<{
    priority?: 'high' | 'medium' | 'low';
    assignee?: string;
    dueDate?: 'overdue' | 'today' | 'thisWeek';
  }>({});

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const applyFilter = (key: string, value: any) => {
    const newFilters = { ...activeFilters, [key]: value };
    setActiveFilters(newFilters);
    onFilter(newFilters);
    setIsFilterOpen(false);
  };

  const removeFilter = (key: string) => {
    const newFilters = { ...activeFilters };
    delete newFilters[key as keyof typeof activeFilters];
    setActiveFilters(newFilters);
    onFilter(newFilters);
  };

  const clearAllFilters = () => {
    setActiveFilters({});
    onFilter({});
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0" align="end">
            <div className="p-4 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Priority</h4>
                <div className="grid grid-cols-3 gap-1">
                  {['high', 'medium', 'low'].map((priority) => (
                    <Button
                      key={priority}
                      variant="outline"
                      size="sm"
                      className={cn(
                        "h-8 text-xs justify-center",
                        activeFilters.priority === priority && "bg-primary text-primary-foreground"
                      )}
                      onClick={() => applyFilter('priority', priority)}
                    >
                      {priority}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Assignee</h4>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full justify-between">
                      {activeFilters.assignee 
                        ? teamMembers.find(m => m.id === activeFilters.assignee)?.name 
                        : "Select assignee"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                      {teamMembers.map((member) => (
                        <DropdownMenuItem 
                          key={member.id}
                          onClick={() => applyFilter('assignee', member.id)}
                        >
                          {member.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Due Date</h4>
                <div className="space-y-1">
                  {[
                    { value: 'overdue', label: 'Overdue' },
                    { value: 'today', label: 'Due Today' },
                    { value: 'thisWeek', label: 'Due This Week' }
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant="outline"
                      size="sm"
                      className={cn(
                        "w-full justify-start text-left",
                        activeFilters.dueDate === option.value && "bg-primary text-primary-foreground"
                      )}
                      onClick={() => applyFilter('dueDate', option.value)}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        {Object.keys(activeFilters).length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear all
          </Button>
        )}
      </div>
      
      {Object.keys(activeFilters).length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {activeFilters.priority && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Priority: {activeFilters.priority}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => removeFilter('priority')}
              />
            </Badge>
          )}
          
          {activeFilters.assignee && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Assignee: {teamMembers.find(m => m.id === activeFilters.assignee)?.name}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => removeFilter('assignee')}
              />
            </Badge>
          )}
          
          {activeFilters.dueDate && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {activeFilters.dueDate === 'overdue' 
                ? 'Overdue' 
                : activeFilters.dueDate === 'today' 
                  ? 'Due Today' 
                  : 'Due This Week'}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => removeFilter('dueDate')}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
