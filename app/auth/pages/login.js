import * as  React from "react";
import { useRouter, useSession } from "blitz";
import Layout from "app/layouts/Layout";
import { LoginForm } from "app/auth/components/LoginForm";
import { useCurrentUser } from "app/hooks/useCurrentUser"
import { toast } from "react-toastify";


const LoginPage = () => {
  const session = useSession()
  const handleLoginRedirect = (role) => {
    if (!session.isLoading) {
      switch (role) {
        case "RECRUITER":
          return router.push('/dashboard/company')
        case "CANDIDATE":
          return router.push('/dashboard/candidate')

      }
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

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
      <LoginForm onSuccess={() => {
        toast.success('Login Successful', {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        return handleLoginRedirect(session.roles[0])
      }} />
    </div>
  );
};

LoginPage.getLayout = page => <Layout title="Log In">{page}</Layout>;

export default LoginPage;