import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart2,
  ClipboardCheck,
  FileText,
  Home,
  Brain,
  Book,
  KeyRound,
  Layers,
  TrendingUp,
  Scale,
  Bell,
  FileCode,
  CheckSquare,
  ClipboardList,
  Globe,
  BookOpen,
  BrainCircuit,
  BrainCog,
  BrainCogIcon,
  BrainCircuitIcon,
  ChartAreaIcon,
  BotOffIcon,
  BotMessageSquareIcon,
  BotIcon,
  LucideBrainCircuit,
  LucideBrain,
  BrainIcon
} from "lucide-react";
import { ChatInterface } from "../chat/ChatInterface";

interface SidebarNavProps {
  className?: string;
}

const SidebarNav = ({ className }: SidebarNavProps) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: Home,
    },
    {
      name: "Regulatory Intelligence",
      href: "/regulatory-intelligence",
      icon: Bell,
    },
    {
      name: "Policy Update Suggestions",
      href: "/policy-update-suggestions",
      icon: FileCode,
    },
    
   
    
    
    
    {
      name: "Policy Validator",
      href: "/policy-validator",
      icon: KeyRound,
    },
    {
      name: "Agent",
      href: "/agent",
      icon: BrainIcon,
    },
    {
      name: "AI Assistant",
      href: "/compliance-assistant",
      icon: BotMessageSquareIcon
    },
    {
      name: "Assessments",
      href: "/assessments",
      icon: ClipboardCheck,
    },
     {
      name: "Tasks",
      href: "/tasks",
      icon: CheckSquare,
    },
    {
      name: "Reports",
      href: "/reports",
      icon: BarChart2,
    },
    // {
    //   name: "Risk Management",
    //   href: "/risks",
    //   icon: Scale,
    // },
    {
      name: "Predictive Risk",
      href: "/predictive-risk",
      icon: TrendingUp,
    },
    
    {
      name: "Templates",
      href: "/templates",
      icon: FileText,
    },
    {
      name: "Policy Law",
      href: "/policy-law",
      icon: Book,
    },
    {
      name: "Guide",
      href: "/case-study",
      icon: BookOpen,
    },
    // {
    //   name: "Records Processing",
    //   href: "/records-processing",
    //   icon: ClipboardList,
    // },
    // {
    //   name: "Transfer Risk",
    //   href: "/transfer-risk",
    //   icon: Globe,
    // },
  ];

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-background px-3 py-4 transition-all duration-300",
        expanded ? "w-64" : "w-16",
        className
      )}
    >
      <div className="flex items-center justify-between mb-6">
        {expanded && (
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-[#9b87f5]" />
            <span className="text-xl font-bold text-[#1A1F2C]">AuditSphere</span>
          </div>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "rounded-full p-1 hover:bg-muted transition-colors",
            !expanded && "mx-auto"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "transition-transform duration-300",
              expanded ? "rotate-0" : "rotate-180"
            )}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>

      <nav className="space-y-1 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive(item.href)
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              !expanded && "justify-center px-2"
            )}
          >
            <item.icon className={cn("h-5 w-5", expanded && "mr-2")} />
            {expanded && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pb-4">
        {expanded && (
          <div className="rounded-md bg-secondary p-4">
            <h4 className="font-medium">Need help?</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Check our guidance on running effective assessments.
            </p>
            <Link
              to="/help"
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              View Guidance →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarNav;
