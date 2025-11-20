import { 
  Zap, 
  BarChart3, 
  Globe, 
  Cpu, 
  Rocket, 
  ShieldCheck,
  Layout,
  MessageSquare
} from "lucide-react";
import { ServiceItem, TestimonialItem, NavLink, StatItem } from "./types";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Cold Outreach Systems",
    description: "Automated, high-converting email and LinkedIn campaigns designed to fill your pipeline with qualified leads.",
    icon: Zap,
  },
  {
    title: "CRM Architecture",
    description: "Custom-built CRM solutions that organize your data and streamline your sales process for maximum efficiency.",
    icon: Layout,
  },
  {
    title: "AI Sales Automation",
    description: "Leverage cutting-edge AI agents to handle initial inquiries, qualify leads, and book meetings 24/7.",
    icon: Cpu,
  },
  {
    title: "Performance Marketing",
    description: "Data-driven ad campaigns on Meta, Google, and LinkedIn that target your ideal customer profile with precision.",
    icon: BarChart3,
  },
  {
    title: "Web Development",
    description: "Blazing fast, conversion-optimized websites built to turn visitors into loyal customers.",
    icon: Globe,
  },
  {
    title: "Brand Strategy",
    description: "Comprehensive brand positioning that differentiates you from competitors and resonates with your audience.",
    icon: Rocket,
  },
];

export const STATS: StatItem[] = [
  { label: "Revenue Generated", value: "$50M+" },
  { label: "Leads Qualified", value: "120k+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Campaigns Launched", value: "500+" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Sarah Jenkins",
    role: "CMO",
    company: "TechFlow Inc.",
    content: "Firefly Creative Solutions completely transformed our lead generation. We went from chasing prospects to closing inbound deals in weeks.",
    avatar: "https://picsum.photos/100/100?random=1",
  },
  {
    name: "Marcus Thorne",
    role: "Founder",
    company: "Thorne Logistics",
    content: "The AI automation tools they implemented saved us 20 hours a week. The ROI was evident within the first month. Truly brilliant work.",
    avatar: "https://picsum.photos/100/100?random=2",
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Sales",
    company: "Apex Solar",
    content: "Professional, fast, and results-oriented. Firefly isn't just an agency; they are a strategic partner in our growth.",
    avatar: "https://picsum.photos/100/100?random=3",
  },
];