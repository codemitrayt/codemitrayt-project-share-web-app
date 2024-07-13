"use client";

import { SquareDashedKanban, LayoutDashboard, Search } from "lucide-react";
import { RouteItem } from "@/types";

import ProfileSidebarItem from "./profile-sidebar-item";

const sidebarRoutes: Array<RouteItem> = [
  {
    icon: LayoutDashboard,
    href: "/profile",
    label: "Dashboard",
  },
  {
    icon: SquareDashedKanban,
    href: "/profile/projects",
    label: "Projects",
    includes: "/profile/projects",
  },
];

const ProfileRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {sidebarRoutes.map((route) => (
        <ProfileSidebarItem
          key={route.href}
          icon={route.icon}
          href={route.href}
          label={route.label}
          includes={route.includes}
        />
      ))}
    </div>
  );
};

export default ProfileRoutes;
