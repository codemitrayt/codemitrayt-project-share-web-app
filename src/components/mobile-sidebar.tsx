import Link from "next/link";
import { Menu } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

import LogoLink from "@/components/logo-link";
import ModeToggle from "@/components/mode-toggle";
import NavItems from "@/components/nav-items";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileSidebar = async () => {
  const user = await currentUser();
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <div className="flex items-center justify-center space-x-2">
          <div className="border rounded-full flex items-center justify-center">
            <UserButton />
          </div>
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 bg-background min-w-sm">
        <div className="h-14 flex items-center px-4">
          <LogoLink />
        </div>
        <div className="flex items-center justify-between space-x-2 p-4">
          {user ? (
            <div className="flex items-center justify-center space-x-2">
              <Link href="/profile" className="text-[16px]">
                {user?.username}
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Link href="/sign-in">
                <Button size="sm" variant="outline">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
          <ModeToggle />
        </div>
        <Separator />
        <NavItems />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
