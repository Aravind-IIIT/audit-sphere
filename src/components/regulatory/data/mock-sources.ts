import { RegulatorySource } from "../types/regulatory-sources";

export const mockRegulatorySources: RegulatorySource[] = [
  {
    id: "1",
    name: "European Union Official Journal",
    type: "official",
    jurisdiction: "European Union",
    url: "https://eur-lex.europa.eu/oj/direct-access.html",
    categories: ["Data Protection", "Privacy"],
    lastScanned: "2025-04-14 09:45",
    active: true
  },
  {
    id: "2",
    name: "ICO Guidance and Resources",
    type: "regulator",
    jurisdiction: "United Kingdom",
    url: "https://ico.org.uk/for-organisations/",
    categories: ["Data Protection"],
    lastScanned: "2025-04-14 08:30",
    active: true
  },
  {
    id: "3",
    name: "California Privacy Protection Agency",
    type: "regulator",
    jurisdiction: "USA - California",
    url: "https://cppa.ca.gov/regulations/",
    categories: ["Privacy", "Consumer Rights"],
    lastScanned: "2025-04-14 07:15",
    active: true
  },
  {
    id: "4",
    name: "Australian Privacy Principles Guidelines",
    type: "regulator",
    jurisdiction: "Australia",
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles-guidelines/",
    categories: ["Privacy"],
    lastScanned: "2025-04-14 06:00",
    active: true
  },
  {
    id: "5",
    name: "Canada Gazette",
    type: "official",
    jurisdiction: "Canada",
    url: "https://gazette.gc.ca/",
    categories: ["Data Protection", "Privacy"],
    lastScanned: "2025-04-14 05:45",
    active: false
  }
];
