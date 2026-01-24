"use client";

// import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth-client";

export default function Home() {
  // const router = useRouter();

  const logout = async () => {
    await authClient.signOut();
    // router.replace("/login");
    alert("Sign Out Successful");
  };

  return (
    <div className="flex min-h-screen items-center justify-center flex-col space-y-5">
      <h1 className="text-4xl font-bold">Merdeka !!</h1>
      <Button variant={"destructive"} onClick={logout}>
        Sign Out
      </Button>
    </div>
  );
}
