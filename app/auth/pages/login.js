import * as  React from "react";
import { useRouter, useSession } from "blitz";
import Layout from "app/layouts/Layout";
import { LoginForm } from "app/auth/components/LoginForm";
import { useCurrentUser } from "app/hooks/useCurrentUser"


const LoginPage = () => {
  const session = useSession()
  const handleLoginRedirect = (role) => {
    if (!session.isLoading) {
      router.push(role == "RECRUITER" ? '/dashboard/company' : '/dashboard/candidate')
    }
  }

  const router = useRouter();
  React.useEffect(() => {
    if (!session.isLoading) {
      if (session.userId) {
        let role = session.roles[0]
        handleLoginRedirect(role)
      }
    }
  }, [session])

  return <div>
    <LoginForm onSuccess={() => handleLoginRedirect(session.roles[0])} />
  </div>;

};

LoginPage.getLayout = page => <Layout title="Log In">{page}</Layout>;

export default LoginPage;