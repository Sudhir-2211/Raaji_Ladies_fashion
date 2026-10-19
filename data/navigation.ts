export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Price Guide", href: "/price-guide" },
  { label: "FAQ", href: "/faq" },
];

export const specializationsList: string[] = [
  "Blouse Customization",
  "Salwar & Anarkali Suits",
  "Bridal Lehengas",
  "Designer Kurti Styling",
  "Western Fittings & Saree Pre-Pleating",
];
