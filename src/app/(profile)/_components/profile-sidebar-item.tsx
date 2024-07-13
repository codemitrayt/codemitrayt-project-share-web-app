"use client";

import { cn } from "@/lib/utils";
import { RouteItem } from "@/types";
import { usePathname, useRouter } from "next/navigation";

type SidebarItem = RouteItem;
const ProfileSidebarItem = ({
  icon: Icon,
  href,
  label,
  includes,
}: SidebarItem) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    pathname === href || pathname.includes(includes ? includes : "*");
  const handleOnClick = () => router.push(href);
  return (
    <button
      onClick={handleOnClick}
      className={cn(
        "group flex items-center gap-x-2 text-foreground text-md font-semibold pl-6 py-4 hover:text-brand-800 cursor-pointer hover:bg-brand-400 transition",
        isActive && "bg-brand-400 border-r-4 border-brand-500 text-brand-800"
      )}
    >
      <Icon
        size={22}
        className={cn(
          "text-foreground group-hover:text-brand-800",
          isActive && "text-brand-800"
        )}
      />
      <span>{label}</span>
    </button>
  );
};

export default ProfileSidebarItem;
