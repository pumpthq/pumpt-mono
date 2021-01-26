import React from "react";
import { useRouter } from "blitz";
import PublicLayout from "app/layouts/PublicLayout";
import { SignupForm } from "app/auth/components/SignupForm";

const SignupPage = () => {
  const router = useRouter();
  return <div>
    <SignupForm onSuccess={() => router.push("/")} />
  </div>;
};

SignupPage.getLayout = page => <PublicLayout title="Sign Up">{page}</PublicLayout>;

export default SignupPage;