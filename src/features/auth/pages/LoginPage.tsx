"use client";

import { authClient } from "~/lib/auth-client";
import LoginForm from "../components/LoginForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
