import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Auth0ProviderWithNavigate } from "@/components/auth-provider";
import { ThemeProvider } from "@/components/theme-provider";

export const Layout = () => {
  return (
    <>
      <Auth0ProviderWithNavigate>
        <ThemeProvider>
          <Navbar />
          <Outlet />
        </ThemeProvider>
      </Auth0ProviderWithNavigate>
    </>
  );
};
