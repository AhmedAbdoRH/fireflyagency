import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
}