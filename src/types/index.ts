import { LucideIcon } from "lucide-react";

export type RouteItem = {
  icon: LucideIcon;
  href: string;
  label: string;
  includes?: string;
};
