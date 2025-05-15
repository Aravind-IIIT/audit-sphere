
import { ClipboardCheck, Users, FileCheck } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickStartCard } from "@/components/dashboard/QuickStartCard";
import { RecentAssessments } from "@/components/dashboard/RecentAssessments";
import { RiskSummary } from "@/components/dashboard/RiskSummary";
import { ComplianceOverview } from "@/components/dashboard/ComplianceOverview";
import { assessments } from "@/data/assessments";

const Dashboard = () => {
  // Calculate some statistics
  const totalAssessments = assessments.length;
  const completedAssessments = assessments.filter(a => a.status === "completed").length;
  const inProgressAssessments = assessments.filter(a => a.status === "inProgress").length;

  return (
    <AppLayout>
      <div className="space-y-8" role="main">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight" id="dashboard-title">
              Welcome to AuditSphere
            </h1>
            <p 
              className="text-muted-foreground mt-2" 
              id="dashboard-description"
            >
              Your data privacy assessment overview
            </p>
          </div>
          <QuickStartCard />
        </div>

        <section 
          aria-labelledby="statistics-heading" 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <h2 id="statistics-heading" className="sr-only">
            Privacy Assessment Statistics
          </h2>
          <StatCard
            title="Total Assessments"
            value={totalAssessments}
            icon={<ClipboardCheck className="h-5 w-5 text-primary" aria-hidden="true" />}
            description="All DPIAs and PIAs"
            className="hover:border-primary/50 transition-colors"
          />
          <StatCard
            title="Completed Assessments"
            value={completedAssessments}
            icon={<FileCheck className="h-5 w-5 text-success" />}
            trend={{
              value: 12,
              isPositive: true
            }}
            className="hover:border-success/50 transition-colors"
          />
          <StatCard
            title="Active Assessments"
            value={inProgressAssessments}
            icon={<Users className="h-5 w-5 text-primary" />}
            description="In progress"
            className="hover:border-primary/50 transition-colors"
          />
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section 
            className="space-y-6" 
            aria-labelledby="compliance-heading"
          >
            <h2 id="compliance-heading" className="text-xl font-semibold">
              Compliance Status
            </h2>
            <ComplianceOverview />
            <RiskSummary />
          </section>

          <section 
            className="space-y-6" 
            aria-labelledby="recent-assessments-heading"
          >
            <h2 id="recent-assessments-heading" className="text-xl font-semibold">
              Recent Activity
            </h2>
            <RecentAssessments />
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
