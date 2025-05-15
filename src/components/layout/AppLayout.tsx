
import { ReactNode } from "react";
import SidebarNav from "./SidebarNav";
import { UserNav } from "./UserNav";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatButton } from "../chat/ChatButton";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b bg-background flex items-center px-6 sticky top-0 z-10">
          <div className="flex-1 flex items-center gap-4">
            <div className="relative w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-9 bg-secondary/50"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
            </Button>
            <UserNav />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto bg-muted/20">
          {children}
        </main>

        {/* Chat Button */}
        <ChatButton />
      </div>
    </div>
  );
};

export default AppLayout;
