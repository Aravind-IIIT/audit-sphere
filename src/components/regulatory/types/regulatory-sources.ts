
export interface RegulatorySource {
  id: string;
  name: string;
  type: "official" | "regulator";
  jurisdiction: string;
  url: string;
  categories: string[];
  lastScanned: string;
  active: boolean;
}
