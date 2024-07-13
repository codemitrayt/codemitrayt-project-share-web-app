import LogoLink from "@/components/logo-link";
import ProfileRoutes from "./profile-routes";

const ProfileSidebar = () => {
  return (
    <div className="h-full border-r shadow-sm overflow-y-auto flex flex-col">
      <div className="flex md:hidden px-4 pt-8 pb-3 items-center border-b">
        <LogoLink />
      </div>
      <div className="flex flex-col">
        <ProfileRoutes />
      </div>
    </div>
  );
};

export default ProfileSidebar;
