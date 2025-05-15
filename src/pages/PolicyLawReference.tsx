
import React, { useState } from 'react';
import { Book } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import AppLayout from "@/components/layout/AppLayout";
import SearchBar from '@/components/policy/law-reference/SearchBar';
import GdprSection from '@/components/policy/law-reference/GdprSection';
import { gdprSections } from '@/data/gdpr-sections';

const PolicyLawReference: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = gdprSections.filter(section => 
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Book className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-semibold">GDPR Compliance Requirements</h1>
          </div>
          <Link to="/policy-validator">
            <Button className="flex items-center gap-2">
              Validate Policy
            </Button>
          </Link>
        </div>

        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <Accordion type="single" collapsible className="space-y-4">
            {filteredSections.map((section) => (
              <GdprSection 
                key={section.id}
                id={section.id}
                title={section.title}
                icon={<section.icon className="h-6 w-6" />}
                purpose={section.purpose}
                importance={section.importance}
                criteria={section.criteria}
                reference={section.reference}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </AppLayout>
  );
};

export default PolicyLawReference;
