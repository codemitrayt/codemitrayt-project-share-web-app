"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavItems = () => {
  const pathname = usePathname();
  const isActiveLink = (link: string) => pathname.includes(link);

  return (
    <div className="flex items-center justify-center space-x-4">
      <Link
        href="/projects"
        className={cn(isActiveLink("project") && "text-brand-700")}
      >
        Project
      </Link>
    </div>
  );
};

export default NavItems;
