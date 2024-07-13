import DashboardHeader from "@/components/dashboard-header";
import MobileHeader from "@/components/mobile-header";

const SiteHeader = async () => {
  return (
    <header className="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-screen border-b backdrop-blur">
      <MobileHeader />
      <DashboardHeader />
    </header>
  );
};

export default SiteHeader;
