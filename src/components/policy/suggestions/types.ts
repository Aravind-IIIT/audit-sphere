
export type SuggestionStatus = "pending" | "accepted" | "rejected";

export interface PolicySuggestion {
  id: string;
  type: "policy" | "control";
  name: string;
  controlId?: string;
  suggestedChanges: string;
  regulation: string;
  regulationUrl: string;
  impacts: string[];
  suggestedAt: string;
  status: SuggestionStatus;
  relatedControls?: string[];
}

export interface SuggestionActionProps {
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onRegenerate: (id: string) => void;
  onViewRegulation?: () => void;
}
