import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    <div className="h-[calc(100vh_-120px)] flex-col flex items-center justify-center">
      <ClerkLoading>
        <Loader2 className="size-12 animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <div className="flex items-center flex-col justify-center mb-8 space-y-1">
          <h1 className="font-bold text-lg text-brand-700">
            Welcome back to Share Project
          </h1>
          <p className="text-sm">Start sharing project with others.</p>
        </div>
        <SignIn />
      </ClerkLoaded>
    </div>
  );
}
