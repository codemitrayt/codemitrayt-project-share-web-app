import MobileProfileSidebar from "../_components/mobile-profile-sidebar";
import ProfileSidebar from "../_components/profile-sidebar";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[calc(100vh_-120px)] relative">
      <div className="flex md:hidden h-14 container mx-auto">
        <MobileProfileSidebar />
      </div>
      <main className="flex h-full">
        <div className="hidden md:block h-full w-80 bg-background border-r">
          <ProfileSidebar />
        </div>
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

export default ProfileLayout;
