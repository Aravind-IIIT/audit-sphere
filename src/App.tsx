import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Assessments from "./pages/Assessments";
import Assessment from "./pages/Assessment";
import NewAssessment from "./pages/NewAssessment";
import Templates from "./pages/Templates";
import Reports from "./pages/Reports";
import Risks from "./pages/Risks";
import ComplianceAssistant from "./pages/ComplianceAssistant";
import PolicyLawReference from "./pages/PolicyLawReference";
import PrivacyPolicyValidator from "./pages/PrivacyPolicyValidator";
import PredictiveRiskAnalytics from "./pages/PredictiveRiskAnalytics";
import RegulatoryIntelligence from "./pages/RegulatoryIntelligence";
import PolicyUpdateSuggestions from "./pages/PolicyUpdateSuggestions";
import Tasks from "./pages/Tasks";
import RecordsProcessing from "./pages/RecordsProcessing";
import CaseStudy from "./pages/CaseStudy";
import AgentCanvas from "./pages/AgentCanvas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/assessments/new" element={<NewAssessment />} />
          <Route path="/assessments/:id" element={<Assessment />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/predictive-risk" element={<PredictiveRiskAnalytics />} />
          <Route path="/compliance-assistant" element={<ComplianceAssistant />} />
          <Route path="/policy-law" element={<PolicyLawReference />} />
          <Route path="/policy-validator" element={<PrivacyPolicyValidator />} />
          <Route path="/regulatory-intelligence" element={<RegulatoryIntelligence />} />
          <Route path="/policy-update-suggestions" element={<PolicyUpdateSuggestions />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/case-study" element={<CaseStudy />} />
          
          <Route path="/agent" element={<AgentCanvas />} />
          
          {/* <Route path="/records-processing" element={<RecordsProcessing />} /> */}
          {/* <Route path="/transfer-risk" element={<TransferRisk />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
