import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

import LogoLink from "@/components/logo-link";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import NavItems from "@/components/nav-items";

const DashboardHeader = async () => {
  const user = await currentUser();
  return (
    <div className="hidden container md:flex h-14 items-center justify-between mx-auto">
      <div className="flex items-center justify-center space-x-6">
        <LogoLink />
        <NavItems />
      </div>
      <div className="flex items-center justify-center space-x-2">
        {user ? (
          <>
            <Link href="/profile" className="text-[16px]">
              {user?.username}
            </Link>
            <div className="border rounded-full flex items-center justify-center">
              <UserButton />
            </div>
          </>
        ) : (
          <>
            <Link href="/sign-in">
              <Button size="sm" variant="outline">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">Sign Up</Button>
            </Link>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default DashboardHeader;
