
import React, { useState } from 'react';
import AppLayout from "@/components/layout/AppLayout";
import { Separator } from "@/components/ui/separator";
import PolicyAnalysisResults from '@/components/policy/PolicyAnalysisResults';
import PrivacyPolicyValidatorComponent from "@/components/policy/PrivacyPolicyValidator";


import { 
  analyzePrivacyPolicy, 
  type GDPRAnalysisResult,
  sampleCompliantPolicy,
  sampleNonCompliantPolicy 
} from '@/services/gdprAnalysis';

const PrivacyPolicyValidator: React.FC = () => {
  // const [results, setResults] = useState<GDPRAnalysisResult[]>([]);

  return (
    <AppLayout>   
              
      <div className="py-6">
        <PrivacyPolicyValidatorComponent />
      </div>

      
    
    
    </AppLayout>
  );  
};

export default PrivacyPolicyValidator;
