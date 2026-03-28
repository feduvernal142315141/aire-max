import type { LucideIcon } from "lucide-react";
import {
  Shield,
  Clock,
  Star,
  Zap,
  Wrench,
  Snowflake,
  ThermometerSun,
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Heart,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Headphones,
  Building2,
  Home,
  Factory,
  ShoppingCart,
  Settings,
  HelpCircle,
  MessageCircle,
  Sparkles,
  Wind,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Shield,
  Clock,
  Star,
  Zap,
  Wrench,
  Snowflake,
  ThermometerSun,
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Heart,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Headphones,
  Building2,
  Home,
  Factory,
  ShoppingCart,
  Settings,
  HelpCircle,
  MessageCircle,
  Sparkles,
  Wind,
};

interface IconResolverProps {
  name: string;
  className?: string;
  fallback?: LucideIcon;
}

export function IconResolver({
  name,
  className,
  fallback: Fallback,
}: IconResolverProps) {
  const Icon = ICON_MAP[name];

  if (!Icon) {
    if (Fallback) return <Fallback className={className} />;
    return null;
  }

  return <Icon className={className} />;
}

/** Get the icon component reference by name — useful when you need the component itself, not JSX */
export function getIcon(name: string): LucideIcon | undefined {
  return ICON_MAP[name];
}
