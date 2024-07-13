import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import ProfileSidebar from "./profile-sidebar";

const MobileProfileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <div className="flex items-center justify-center space-x-2 group transition">
          <Menu className="text-brand-700 group-hover:text-brand-700" />
          <span className="text-brand-700 group-hover:text-brand-700">
            Profile Menu
          </span>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-background w-60">
        <ProfileSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileProfileSidebar;
