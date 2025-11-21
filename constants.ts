import {
  BarChart3,
  Globe,
  MessageSquare,
  Camera,
  Palette,
  Video,
  Pencil,
  Image
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
    title: "Marketing Strategy",
    description: "Crafting comprehensive strategies to guide your brand's growth and market penetration.",
    icon: BarChart3,
  },
  {
    title: "Content Creation",
    description: "Developing engaging and relevant content across various formats to attract and retain your audience.",
    icon: Pencil,
  },
  {
    title: "Video Shooting",
    description: "Professional video production services for commercials, promotional content, and corporate videos.",
    icon: Video,
  },
  {
    title: "Branding",
    description: "Developing unique brand identities that resonate with your audience and stand out in the market.",
    icon: Palette,
  },
  {
    title: "Websites",
    description: "Designing and developing modern, responsive, and user-friendly websites that drive results.",
    icon: Globe,
  },
  {
    title: "Social Media Campaigns",
    description: "Managing and optimizing your social media presence to engage your audience and build community.",
    icon: MessageSquare,
  },
  {
    title: "Posts Designs",
    description: "Creating visually appealing and effective graphic designs for your social media posts and other digital content.",
    icon: Image,
  },
  {
    title: "Photo Shooting",
    description: "High-quality professional photography services for products, events, and corporate profiles.",
    icon: Camera,
  },
];

export const STATS: StatItem[] = [
  { label: "Revenue Generated", value: "$500k+" },
  { label: "Leads Qualified", value: "5k+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Campaigns Launched", value: "50+" },
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