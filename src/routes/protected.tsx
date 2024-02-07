import { PageLoader } from "@/components/page-loader";
import { useAuth0 } from "@auth0/auth0-react";
import { redirect, Outlet, Navigate } from "react-router-dom";

export const Protected = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }

  if (isLoading) {
    return <PageLoader />;
  }

  return <Outlet />;
};
