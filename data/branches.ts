export interface BranchInfo {
  id: string;
  name: string;
  tag: string;
  badge: string;
  address: string;
  landmark: string;
  hours: string;
  phone: string;
  phoneDisplay: string;
  accessNote: string;
  directionsUrl: string;
}

export const branchesData: BranchInfo[] = [
  {
    id: "branch-1",
    name: "Korattur Main Shop",
    tag: "BRANCH 1 (MAIN SHOP)",
    badge: "Open Today",
    address: "Main Street, Korattur, Chennai - 600080",
    landmark: "Walking distance from Korattur Railway Station & Bus Terminus",
    hours: "Mon - Sat: 10:00 AM - 9:00 PM | Sun: 11:00 AM - 6:00 PM",
    phone: "+919840000000",
    phoneDisplay: "+91 9840X XXXXX",
    accessNote: "Ample two-wheeler & dedicated car parking nearby",
    directionsUrl: "https://maps.google.com/?q=Korattur+Chennai",
  },
  {
    id: "branch-2",
    name: "Anna Nagar West Extn. Branch",
    tag: "BRANCH 2 (BRANCH SHOP)",
    badge: "Open Today",
    address: "Second Location / Anna Nagar Western Extension, Chennai",
    landmark: "Accessible via Padi Flyover & Inner Ring Road junction",
    hours: "Mon - Sat: 10:00 AM - 8:30 PM (Sun: By Appointment)",
    phone: "+919841000000",
    phoneDisplay: "+91 9841X XXXXX",
    accessNote: "Frontage customer parking bay for stress-free visits",
    directionsUrl: "https://maps.google.com/?q=Anna+Nagar+Western+Extension+Chennai",
  },
];
