import { ErrorComponent, useRouter, AuthenticationError, AuthorizationError } from "blitz";
import { ErrorBoundary } from "react-error-boundary";
import { queryCache } from "react-query";
import LoginForm from "app/auth/components/LoginForm";
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import 'react-toastify/dist/ReactToastify.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from 'react-toastify';

config.autoAddCss = false;



export default function App({
  Component,
  pageProps
}) {
  const getLayout = Component.getLayout || (page => page);

  const router = useRouter();
  return <ErrorBoundary FallbackComponent={RootErrorFallback} resetKeys={[router.asPath]} onReset={() => {
    // This ensures the Blitz useQuery hooks will automatically refetch
    // data any time you reset the error boundary
    queryCache.resetErrorBoundaries();
  }}>
    <SkeletonTheme color="#1f1f1f" highlightColor="#444">
      <ToastContainer />
      {getLayout(<Component {...pageProps} />)}
    </SkeletonTheme>
  </ErrorBoundary>;
}

function RootErrorFallback({
  error,
  resetErrorBoundary
}) {
  if (error instanceof AuthenticationError) {
    return <LoginForm onSuccess={resetErrorBoundary} />;
  } else if (error instanceof AuthorizationError) {
    return <ErrorComponent statusCode={error.statusCode} title="Sorry, you are not authorized to access this" />;
  } else {
    return <ErrorComponent statusCode={error?.statusCode || 400} title={error?.message || error?.name} />;
  }
}