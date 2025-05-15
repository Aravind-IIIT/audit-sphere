
import React, { useEffect, useState } from "react";
import { ShieldCheck, FileCheck, CalendarCheck, Search, MessageSquare, Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AnimationStep {
  icon: React.ReactNode;
  text: string;
}

export function AIComplianceAnimation() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: AnimationStep[] = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-blue" />,
      text: "AI analyzes compliance requirements"
    },
    {
      icon: <Search className="h-6 w-6 text-brand-green" />,
      text: "Scans documentation and processes"
    },
    {
      icon: <FileCheck className="h-6 w-6 text-brand-orange" />,
      text: "Identifies compliance gaps"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-brand-blue" />,
      text: "Provides actionable recommendations"
    },
    {
      icon: <Users className="h-6 w-6 text-brand-green" />,
      text: "Assists team collaboration"
    },
    {
      icon: <CalendarCheck className="h-6 w-6 text-brand-orange" />,
      text: "Monitors ongoing compliance"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 bg-muted/50">
      <div className="flex flex-col items-center space-y-8">
        <div className="flex items-center justify-center w-full space-x-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="relative">
                <div
                  className={`rounded-full p-4 bg-background border-2 transition-all duration-500 ${
                    index === currentStep
                      ? "border-primary scale-110 shadow-lg"
                      : "border-muted"
                  }`}
                >
                  <div
                    className={`transition-opacity duration-500 ${
                      index === currentStep ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>
              </div>
              <p
                className={`text-xs text-center w-32 transition-all duration-500 ${
                  index === currentStep
                    ? "opacity-100 text-primary font-medium"
                    : "opacity-50"
                }`}
              >
                {step.text}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight
                  className={`h-4 w-4 mt-2 transition-all duration-500 ${
                    index === currentStep
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
