import { Cloud } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <>
      <header className="py-4 border-b">
        <nav className="flex items-center mx-4">
          <div className="flex items-center space-x-4">
            <Cloud className="h-8 w-8" />
            <p className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl">
              Weather Forecast
            </p>
          </div>
          <div className="ml-auto space-x-4 md:flex hidden">
            {isAuthenticated && <Button onClick={handleLogout}>Logout</Button>}
            <ModeToggle />
          </div>
        </nav>
      </header>
    </>
  );
};
