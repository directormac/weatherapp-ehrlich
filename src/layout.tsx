import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "@/components/page-loader";

export const Layout = () => {
  const { isLoading } = useAuth0();

  return (
    <ThemeProvider>
      <Navbar />
      {isLoading ? <PageLoader /> : <Outlet />}
    </ThemeProvider>
  );
};
