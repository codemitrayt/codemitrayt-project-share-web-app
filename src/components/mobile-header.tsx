import LogoLink from "@/components/logo-link";
import MobileSidebar from "@/components/mobile-sidebar";

const MobileHeader = () => {
  return (
    <div className="flex container md:hidden h-14 items-center justify-between mx-auto">
      <LogoLink />
      <MobileSidebar />
    </div>
  );
};

export default MobileHeader;
