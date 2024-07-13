"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavItems = () => {
  const pathname = usePathname();
  const isActiveLink = (link: string) => pathname === link;

  return (
    <div className="flex items-center md:flex-col md:justify-center md:space-x-4">
      <div
        className={cn(
          "px-4 py-2 md:p-0 w-full hover:bg-brand-400 hover:text-brand-800 md:hover:bg-transparent md:hover:text-brand-700 md:w-fit transition",
          isActiveLink("/projects") && "bg-brand-400 sm:bg-transparent"
        )}
      >
        <Link
          href="/projects"
          className={cn(
            isActiveLink("/projects") && "text-brand-900 md:text-brand-700"
          )}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default NavItems;
