import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "@/components/page-loader";

export const Layout = () => {
  const { isLoading } = useAuth0();

  return (
    <>
      <Navbar />
      {isLoading ? <PageLoader /> : <Outlet />}
    </>
  );
};
