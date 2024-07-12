import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

import LogoLink from "@/components/logo-link";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";

const SiteHeader = async () => {
  const user = await currentUser();
  return (
    <header className="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-screen border-b backdrop-blur">
      <div className="container flex h-14 items-center justify-between mx-auto">
        <LogoLink />
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
    </header>
  );
};

export default SiteHeader;
