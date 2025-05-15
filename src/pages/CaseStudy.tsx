import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle2, Download, FileCheck, LineChart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const GdprCaseStudy = () => {
  return (
    <div className="space-y-6 py-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/help" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Guidance</span>
            </Link>
          </Button>
        </div>
        {/* <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Download as PDF</span>
        </Button> */}
      </div>

      <div>
        <h1 className="text-3xl font-bold">GDPR Compliance Program: Case Study</h1>
        <p className="text-muted-foreground mt-2">
          How TechNova implemented a comprehensive GDPR compliance program using AuditSphere
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="w-full sm:w-auto bg-muted flex justify-start overflow-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="approach">Approach</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="lessons">Lessons Learned</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Company Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium">Company:</span>
                    <p>TechNova Solutions</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Industry:</span>
                    <p>SaaS / Cloud Services</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Size:</span>
                    <p>250 employees</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Location:</span>
                    <p>Headquarters in Berlin, offices in 5 EU countries</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Data Subjects:</span>
                    <p>~50,000 customers across Europe and North America</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  TechNova needed to establish a comprehensive GDPR compliance program quickly 
                  after expanding operations in the EU. Their key challenges included:
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-red-600">!</span>
                    </div>
                    <span>Fragmented data processing activities across multiple systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-red-600">!</span>
                    </div>
                    <span>Inadequate procedures for handling data subject requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-red-600">!</span>
                    </div>
                    <span>Limited resources in the compliance team (2 people)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-red-600">!</span>
                    </div>
                    <span>Tight timeline: 3 months to initial compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-primary" />
                  Key Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Created comprehensive data inventory in 3 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>85% increase in privacy notice compliance score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>100% of high-risk gaps remediated within timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Automated data subject request workflow implemented</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Successfully passed external compliance audit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardContent className="pt-6 pb-4">
                <p>
                  TechNova Solutions, a mid-sized SaaS provider, underwent a rapid expansion into the European market, 
                  necessitating comprehensive GDPR compliance. Using AuditSphere, they successfully implemented a 
                  structured compliance program that not only met regulatory requirements but also improved customer 
                  trust and operational efficiency. This case study outlines their journey, approach, and the measurable 
                  results achieved through systematic assessment and remediation.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="approach" className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Strategic Approach</h2>
            <p className="mb-6">
              TechNova adopted a systematic approach to GDPR compliance, focusing on risk prioritization 
              and leveraging AuditSphere's automation capabilities to maximize efficiency with limited resources.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Phase 1: Assessment & Planning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Activities</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">1</span>
                        </div>
                        <span>Initial GDPR readiness assessment using AuditSphere templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">2</span>
                        </div>
                        <span>Stakeholder interviews across departments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">3</span>
                        </div>
                        <span>Gap analysis and risk prioritization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">4</span>
                        </div>
                        <span>Compliance roadmap development with milestone tracking</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Timeline</h4>
                    <p>Weeks 1-3</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">AuditSphere Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                        GDPR Assessment Template
                      </span>
                      <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                        Risk Dashboard
                      </span>
                      <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                        Task Management
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Phase 2: Implementation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Activities</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">1</span>
                        </div>
                        <span>Data inventory creation and processing activity documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">2</span>
                        </div>
                        <span>Privacy notice and policy updates with AI assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">3</span>
                        </div>
                        <span>Data subject rights workflow implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">4</span>
                        </div>
                        <span>Security control enhancements and documentation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Timeline</h4>
                    <p>Weeks 4-10</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">AuditSphere Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                        ROPA Template
                      </span>
                      <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                        AI Policy Assistant
                      </span>
                      <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                        Policy Validator
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Phase 3: Validation & Continuous Improvement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-primary">1</span>
                          </div>
                          <span>Internal compliance audit and testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-primary">2</span>
                          </div>
                          <span>External compliance validation</span>
                        </li>
                      </ul>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-primary">3</span>
                          </div>
                          <span>Compliance metrics and monitoring setup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-primary">4</span>
                          </div>
                          <span>Staff training and awareness program</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Timeline</h4>
                    <p>Weeks 11-12 and ongoing</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">AuditSphere Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                        Compliance Dashboard
                      </span>
                      <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                        Regulatory Updates
                      </span>
                      <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                        Training Management
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Team & Resources</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Core Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Data Protection Officer</span>
                        <p className="text-sm text-muted-foreground">Project lead, 100% allocation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Compliance Analyst</span>
                        <p className="text-sm text-muted-foreground">Documentation and assessment, 100% allocation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">IT Security Manager</span>
                        <p className="text-sm text-muted-foreground">Technical measures, 30% allocation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Legal Counsel</span>
                        <p className="text-sm text-muted-foreground">Contract reviews, 20% allocation</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Staff time</span>
                        <span className="text-sm">€120,000</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Software tools</span>
                        <span className="text-sm">€35,000</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">External consulting</span>
                        <span className="text-sm">€45,000</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex items-center justify-between font-medium">
                        <span>Total</span>
                        <span>€200,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2 items-center">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-xs text-blue-800">1</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Project initiation</p>
                        <p className="text-xs text-muted-foreground">January 2023</p>
                      </div>
                    </div>
                    <div className="border-l-2 border-dashed border-muted-foreground/20 ml-3 pl-5 py-2">
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-xs text-blue-800">2</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Initial assessment complete</p>
                        <p className="text-xs text-muted-foreground">February 2023</p>
                      </div>
                    </div>
                    <div className="border-l-2 border-dashed border-muted-foreground/20 ml-3 pl-5 py-2">
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-xs text-blue-800">3</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Implementation phase</p>
                        <p className="text-xs text-muted-foreground">March - April 2023</p>
                      </div>
                    </div>
                    <div className="border-l-2 border-dashed border-muted-foreground/20 ml-3 pl-5 py-2">
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-xs text-green-800">✓</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">External audit passed</p>
                        <p className="text-xs text-muted-foreground">May 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="implementation" className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Implementation Areas</h2>
            <p className="mb-6">
              TechNova focused on six core implementation areas to build their GDPR compliance program:
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <ImplementationCard 
                title="Data Inventory & Processing Records"
                completed={true}
                tasks={[
                  "Created comprehensive data inventory covering all systems",
                  "Documented 47 processing activities across 8 departments",
                  "Mapped data flows and identified cross-border transfers",
                  "Established process for keeping ROPA up to date"
                ]}
                tools={["ROPA template", "Data mapping tool"]}
              />
              
              <ImplementationCard 
                title="Privacy Notices & Policies"
                completed={true}
                tasks={[
                  "Revised main website privacy policy with AI recommendations",
                  "Created specialized notices for job applicants and employees",
                  "Implemented just-in-time notices for specific data collection",
                  "Established policy review and update schedule"
                ]}
                tools={["Policy validator", "Template library"]}
              />
              
              <ImplementationCard 
                title="Data Subject Rights Management"
                completed={true}
                tasks={[
                  "Built automated workflow for handling access requests",
                  "Created response templates for each request type",
                  "Implemented verification process for data subjects",
                  "Trained customer support team on handling requests"
                ]}
                tools={["Request management system", "Template library"]}
              />
              
              <ImplementationCard 
                title="Vendor Management"
                completed={true}
                tasks={[
                  "Inventoried all third-party data processors (32 vendors)",
                  "Reviewed and updated data processing agreements",
                  "Implemented vendor risk assessment process",
                  "Created vendor monitoring schedule"
                ]}
                tools={["Transfer risk assessment", "DPA templates"]}
              />
              
              <ImplementationCard 
                title="Data Security & Breach Response"
                completed={true}
                tasks={[
                  "Updated technical security controls for personal data",
                  "Implemented data breach detection and response plan",
                  "Created breach notification templates and procedures",
                  "Conducted tabletop exercise to test response process"
                ]}
                tools={["Security assessment template", "Incident response workflow"]}
              />
              
              <ImplementationCard 
                title="Staff Training & Awareness"
                completed={true}
                tasks={[
                  "Developed role-based privacy training modules",
                  "Conducted specialized training for key departments",
                  "Created privacy awareness materials and communications",
                  "Implemented onboarding privacy training requirement"
                ]}
                tools={["Training management", "Knowledge base"]}
              />
            </div>
          </section>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Measurable Outcomes</h2>
            <p className="mb-6">
              TechNova achieved significant improvements in their privacy and compliance posture:
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Compliance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Overall Compliance Score</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <div className="w-full bg-secondary h-3 rounded-full">
                      <div className="bg-primary h-3 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Documentation</span>
                        <span className="text-sm">95%</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Data Subject Rights</span>
                        <span className="text-sm">90%</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Security Measures</span>
                        <span className="text-sm">88%</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Vendor Management</span>
                        <span className="text-sm">87%</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "87%" }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Improvement from Baseline</h4>
                    <div className="flex items-center gap-2 text-green-500">
                      <LineChart className="h-5 w-5" />
                      <span className="font-medium">+47% overall compliance improvement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Operational Improvements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Data Subject Request Handling</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border rounded-md p-3 text-center">
                        <p className="text-sm text-muted-foreground">Before</p>
                        <p className="text-2xl font-bold">14 days</p>
                        <p className="text-xs text-muted-foreground">Avg. response time</p>
                      </div>
                      <div className="border rounded-md p-3 text-center bg-green-50">
                        <p className="text-sm text-muted-foreground">After</p>
                        <p className="text-2xl font-bold text-green-600">3 days</p>
                        <p className="text-xs text-muted-foreground">Avg. response time</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Staff Privacy Awareness</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border rounded-md p-3 text-center">
                        <p className="text-sm text-muted-foreground">Before</p>
                        <p className="text-2xl font-bold">23%</p>
                        <p className="text-xs text-muted-foreground">Passed assessment</p>
                      </div>
                      <div className="border rounded-md p-3 text-center bg-green-50">
                        <p className="text-sm text-muted-foreground">After</p>
                        <p className="text-2xl font-bold text-green-600">94%</p>
                        <p className="text-xs text-muted-foreground">Passed assessment</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Risk Management</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm">High-risk findings</span>
                        <span className="text-sm font-medium">Reduced by 100%</span>
                      </li>
                      <li className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm">Medium-risk findings</span>
                        <span className="text-sm font-medium">Reduced by 87%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-sm">Low-risk findings</span>
                        <span className="text-sm font-medium">Reduced by 65%</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Business Impact</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-2">Customer Trust</h4>
                    <p className="text-3xl font-bold text-green-600">+18%</p>
                    <p className="text-sm text-muted-foreground">Increase in privacy satisfaction surveys</p>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-2">Operational Efficiency</h4>
                    <p className="text-3xl font-bold text-green-600">35%</p>
                    <p className="text-sm text-muted-foreground">Reduction in privacy-related workload</p>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-2">Sales Impact</h4>
                    <p className="text-3xl font-bold text-green-600">12%</p>
                    <p className="text-sm text-muted-foreground">Increase in EU market sales</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="lessons" className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Lessons & Best Practices</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What Worked Well</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Risk-based approach</span>
                        <p className="text-sm text-muted-foreground">
                          Prioritizing high-risk areas allowed the team to focus limited resources on critical issues first.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Automation tools</span>
                        <p className="text-sm text-muted-foreground">
                          Using AuditSphere's automation capabilities reduced manual workload by approximately 40%.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Executive sponsorship</span>
                        <p className="text-sm text-muted-foreground">
                          Strong support from C-suite helped overcome departmental barriers and resource constraints.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Regular stakeholder updates</span>
                        <p className="text-sm text-muted-foreground">
                          Weekly progress reports and dashboards kept the project visible and maintained momentum.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Integration with existing processes</span>
                        <p className="text-sm text-muted-foreground">
                          Building compliance into existing workflows rather than creating separate processes improved adoption.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Challenges & Lessons Learned</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-amber-600">!</span>
                      </div>
                      <div>
                        <span className="font-medium">Initial scope too broad</span>
                        <p className="text-sm text-muted-foreground">
                          The team initially tried to tackle all compliance areas simultaneously, which proved overwhelming.
                          <span className="block mt-1 font-medium text-sm">Lesson: Start with a focused MVP approach instead.</span>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-amber-600">!</span>
                      </div>
                      <div>
                        <span className="font-medium">Data owner engagement</span>
                        <p className="text-sm text-muted-foreground">
                          Getting timely responses from data owners across departments was challenging.
                          <span className="block mt-1 font-medium text-sm">Lesson: Implement formal data stewardship program with clear accountability.</span>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-amber-600">!</span>
                      </div>
                      <div>
                        <span className="font-medium">Policy implementation verification</span>
                        <p className="text-sm text-muted-foreground">
                          Ensuring new policies were actually being followed proved difficult.
                          <span className="block mt-1 font-medium text-sm">Lesson: Implement regular spot checks and compliance monitoring.</span>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-amber-600">!</span>
                      </div>
                      <div>
                        <span className="font-medium">Shadow IT and data flows</span>
                        <p className="text-sm text-muted-foreground">
                          Discovering unofficial data processing activities was more time-consuming than expected.
                          <span className="block mt-1 font-medium text-sm">Lesson: Conduct thorough discovery through both technical scans and interviews.</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Recommendations for Other Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Start with thorough data mapping</p>
                          <p className="text-sm text-muted-foreground">
                            Understanding your data landscape is essential before implementing any compliance measures.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Leverage automation where possible</p>
                          <p className="text-sm text-muted-foreground">
                            Manual compliance processes are error-prone and difficult to maintain. Use tools to automate repetitive tasks.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Integrate with business processes</p>
                          <p className="text-sm text-muted-foreground">
                            Build privacy into existing workflows rather than creating separate, parallel processes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">4</span>
                        </div>
                        <div>
                          <p className="font-medium">Focus on high-risk areas first</p>
                          <p className="text-sm text-muted-foreground">
                            A risk-based approach ensures critical compliance gaps are addressed quickly.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">5</span>
                        </div>
                        <div>
                          <p className="font-medium">Create clear metrics and KPIs</p>
                          <p className="text-sm text-muted-foreground">
                            Measurable objectives help track progress and maintain momentum throughout the compliance journey.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">6</span>
                        </div>
                        <div>
                          <p className="font-medium">Invest in continuous training</p>
                          <p className="text-sm text-muted-foreground">
                            Staff awareness and education are critical for maintaining compliance over time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="bg-muted p-6 rounded-lg">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-2">Ready to Start Your GDPR Compliance Journey?</h2>
              <p className="text-muted-foreground mb-6">
                Use AuditSphere's comprehensive tools and templates to implement your own successful compliance program.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <a href="/assessments/new">Start a GDPR Assessment</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/templates">Explore Templates</a>
                </Button>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ImplementationCard = ({ 
  title, 
  completed, 
  tasks, 
  tools 
}: {
  title: string;
  completed: boolean;
  tasks: string[];
  tools: string[];
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          {completed && <CheckCircle2 className="h-5 w-5 text-green-500" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-1">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{task}</span>
            </li>
          ))}
        </ul>
        {tools && tools.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span key={index} className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GdprCaseStudy;