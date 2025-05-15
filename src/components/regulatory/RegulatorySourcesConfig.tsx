
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConfiguredSourcesTab } from "./ConfiguredSourcesTab";
import { DiscoveryTab } from "./DiscoveryTab";
import { MonitoringSettingsTab } from "./MonitoringSettingsTab";
import { mockRegulatorySources } from "./data/mock-sources";

export const RegulatorySourcesConfig = () => {
  const [sources] = useState(mockRegulatorySources);

  return (
    <div className="space-y-4">
      <Tabs defaultValue="configured" className="space-y-4">
        <TabsList>
          <TabsTrigger value="configured">Configured Sources</TabsTrigger>
          <TabsTrigger value="discovery">Source Discovery</TabsTrigger>
          <TabsTrigger value="settings">Monitoring Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="configured">
          <ConfiguredSourcesTab sources={sources} />
        </TabsContent>
        
        <TabsContent value="discovery">
          <DiscoveryTab />
        </TabsContent>
        
        <TabsContent value="settings">
          <MonitoringSettingsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
