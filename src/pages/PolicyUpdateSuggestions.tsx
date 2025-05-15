
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PolicySuggestions } from "@/components/policy/PolicySuggestions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileCode, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PolicyUpdateSuggestions = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pending");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <AppLayout>
      <div className="flex items-center justify-between space-y-2 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0"
              onClick={() => navigate("/regulatory-intelligence")}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">Policy Update Suggestions</h1>
          </div>
          <p className="text-muted-foreground">
            Receive policy update suggestions based on regulatory changes
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button onClick={() => setActiveTab("pending")}>Review All Suggestions</Button>
        </div>
      </div>

      <Alert className="mb-6">
        <FileCode className="h-4 w-4" />
        <AlertTitle>New policy updates suggested</AlertTitle>
        <AlertDescription>
          5 policy updates have been suggested based on recent regulatory changes. Review them below.
        </AlertDescription>
      </Alert>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="history">Change History</TabsTrigger>
        </TabsList>
        <TabsContent value="pending" className="space-y-4">
          <PolicySuggestions status="pending" />
        </TabsContent>
        <TabsContent value="accepted" className="space-y-4">
          <PolicySuggestions status="accepted" />
        </TabsContent>
        <TabsContent value="rejected" className="space-y-4">
          <PolicySuggestions status="rejected" />
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Policy Change History</CardTitle>
              <CardDescription>
                View a complete history of policy changes over time
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Change history visualization coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default PolicyUpdateSuggestions;
