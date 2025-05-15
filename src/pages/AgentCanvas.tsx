
import React from 'react';
import AppLayout from "@/components/layout/AppLayout";
import AiAgentCanvasComponent from "@/components/chat/AgentCanvas";

const AiAgentCanvas: React.FC = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto py-6">
        <AiAgentCanvasComponent />
      </div>
    </AppLayout>
  );
};

export default AiAgentCanvas;
