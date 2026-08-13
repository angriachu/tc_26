import {
  ArchiveRestore, BarChart3, Boxes, Building2, Cloud, Contact, IndianRupee,
  Laptop, PackageCheck, Percent, ReceiptText, ShoppingBasket,
  Store, Tags, Users, Warehouse, Wifi,
} from "lucide-react";

export const products = [
  { name: "TurboCart Elite", path: "/windows-pos", icon: Laptop, eyebrow: "Standalone Windows", title: "Complete billing on one Windows system.", description: "A focused standalone edition for local billing, inventory and business operations.", accent: "from-blue-500/25 to-cyan-400/5" },
  { name: "TurboCart Pro", path: "/windows-pos", icon: Wifi, eyebrow: "Windows server + client", title: "Connect every billing counter.", description: "A Windows server and client setup for multi-counter business operations over LAN.", accent: "from-cyan-500/20 to-blue-400/5" },
  { name: "TurboCart Platinum", path: "/cloud", icon: Cloud, eyebrow: "Multi-branch cloud SaaS", title: "Every branch. One cloud.", description: "99.99% uptime, cross-platform access, dedicated backups and your own mobile e-commerce app.", accent: "from-violet-500/25 to-blue-400/5" },
];

export const features = [
  [ReceiptText, "POS Billing", "A streamlined workflow for fast retail checkout."],
  [Boxes, "Inventory", "Track products, quantities and stock movement."],
  [PackageCheck, "Purchases", "Connect purchase entry with stock intake."],
  [Contact, "Suppliers", "Keep supplier information and records organized."],
  [Users, "Customers", "Maintain useful customer information."],
  [IndianRupee, "Pricing", "Control product prices and billing values."],
  [Percent, "Offers", "Manage discounts and promotional pricing."],
  [Users, "Employees", "Organize staff records and access."],
  [BarChart3, "Reports", "Understand sales, purchases and stock."],
  [ArchiveRestore, "Backups", "Structured backup and restoration workflows."],
  [Wifi, "Multi-Terminal", "Connect POS computers through the local network."],
  [Cloud, "Cloud Access", "Reach key retail operations through the web."],
] as const;

export const industries = [
  [Building2, "Hypermarkets & supermarkets", "Coordinate high-volume checkout, broad product catalogues, purchasing and stock visibility across busy departments."],
  [ShoppingBasket, "Grocery stores", "Keep routine checkout simple while organizing products, quantities, suppliers, purchases and daily sales information."],
  [Laptop, "Computer & IT stores", "Manage computers, components, accessories, service-related items, serial information and changing product catalogues."],
  [Store, "Electrical stores", "Organize electrical products, brands, units, suppliers, customer billing, purchasing and available stock."],
  [Tags, "Electronics stores", "Handle varied models, accessories, prices, inventory movement and customer transactions in one workflow."],
  [Warehouse, "Automobile inventory", "Track vehicle parts, accessories, supplier purchases, item availability, pricing and counter sales."],
  [Building2, "Department stores", "Manage varied categories, pricing, offers, employees and customer activity through one connected retail workflow."],
  [Warehouse, "Wholesale businesses", "Connect supplier purchases, goods intake, inventory quantities, customer billing and operational reporting."],
  [Laptop, "Multi-counter businesses", "Run multiple billing terminals through a local server/client setup with consistent business information."],
] as const;

export const workflow = ["Supplier", "Purchase", "Inventory", "Pricing", "POS Billing", "Customer", "Reports", "Insights"];
