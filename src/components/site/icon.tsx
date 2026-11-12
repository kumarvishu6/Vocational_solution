import {
  Accessibility,
  Activity,
  Car,
  ClipboardList,
  Compass,
  FileCheck2,
  Gavel,
  Handshake,
  HeartPulse,
  MapPin,
  Scale,
  Video,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/vc";

const icons: Record<IconName, LucideIcon> = {
  scale: Scale,
  handshake: Handshake,
  video: Video,
  car: Car,
  map: MapPin,
  file: FileCheck2,
  activity: Activity,
  heart: HeartPulse,
  compass: Compass,
  accessibility: Accessibility,
  gavel: Gavel,
  clipboard: ClipboardList,
};

export function SiteIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.6} />;
}
