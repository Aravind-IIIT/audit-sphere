
import React, { useState } from 'react';
import { Upload, Check, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PolicyAnalysisResults from './PolicyAnalysisResults';
import { 
  analyzePrivacyPolicy, 
  type GDPRAnalysisResult,
  sampleCompliantPolicy,
  sampleNonCompliantPolicy 
} from '@/services/gdprAnalysis';



const PrivacyPolicyValidator: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');
  const [policyText, setPolicyText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<GDPRAnalysisResult[]>([]);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
      setUrl('');
      setPolicyText('');
      toast({
        title: "File uploaded successfully",
        description: "Your privacy policy is ready for validation.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file format",
        description: "Please upload a PDF file.",
      });
    }
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    setFile(null);
    setPolicyText('');
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPolicyText(event.target.value);
    setFile(null);
    setUrl('');
  };

  const handleValidate = async () => {
    if (!file && !url && !policyText) {
      // Add option to use sample policies
      const selectedPolicy = await showSamplePolicyDialog();
      if (!selectedPolicy) return;
    }

    setAnalyzing(true);
    try {
      const textToAnalyze = policyText || sampleCompliantPolicy;
      const analysisResults = await analyzePrivacyPolicy(textToAnalyze);
      setResults(analysisResults);
      
      toast({
        title: "Analysis complete",
        description: "Your privacy policy has been analyzed against GDPR requirements.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Analysis failed",
        description: error instanceof Error ? error.message : "An error occurred while analyzing your privacy policy.",
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const showSamplePolicyDialog = async (): Promise<boolean> => {
    const result = window.confirm(
      "No policy text provided. Would you like to analyze a sample compliant or non-compliant policy?"
    );
    
    if (result) {
      const isCompliant = window.confirm(
        "Click OK for a compliant policy, Cancel for a non-compliant policy."
      );
      
      setPolicyText(isCompliant ? sampleCompliantPolicy : sampleNonCompliantPolicy);
      return true;
    }
    
    return false;
  };

  return (

    <div className="grid gap-6 md:grid-cols-3">
       <div className="md:col-span-1">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Privacy Policy Validator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="privacy-policy-upload"
                    />
                    <label
                      htmlFor="privacy-policy-upload"
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Drop your Privacy Policy PDF here or click to upload
                      </p>
                    </label>
                    {file && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        Selected file: {file.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2">
                    <p className="text-sm text-muted-foreground text-center">OR</p>
                    <Input
                      type="url"
                      placeholder="Enter Privacy Policy URL"
                      value={url}
                      onChange={handleUrlChange}
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <p className="text-sm text-muted-foreground text-center">OR</p>
                    <Textarea
                      placeholder="Paste your privacy policy text here"
                      value={policyText}
                      onChange={handleTextChange}
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button
                    className="w-full"
                    disabled={analyzing}
                    onClick={handleValidate}
                  >
                    {analyzing ? "Analyzing..." : "Validate Privacy Policy"}
                  </Button>

                  
                </div>
              </CardContent>
            </Card>
        </div>
        
        <div className="md:col-span-2">
        {results.length > 0 && (
                    <>
                 
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Analysis Results</h3>
                        <Separator className="my-6" />
                        <PolicyAnalysisResults results={results} />
                      </div>
                    </>
                  )}
        </div>
    </div>
  );
};


export default PrivacyPolicyValidator;
// export const analysisResults = results;
