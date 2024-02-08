import { Cloud, CloudRainIcon, Home, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useAuth0 } from "@auth0/auth0-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const Navbar = () => {
  const isNotSmallDevice = useMediaQuery("(min-width: 768px)");
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
          <Link className="flex items-center space-x-4" to="/">
            <Cloud className="h-8 w-8" />
            <p
              className={cn(
                "invisible md:visible scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl",
              )}
            >
              Weather Forecast
            </p>
          </Link>
          <div className="inline-flex ml-auto space-x-2">
            {isAuthenticated && (
              <>
                {isNotSmallDevice ? (
                  <Button variant="link">
                    <Link to="/home">Home</Link>
                  </Button>
                ) : (
                  ""
                )}
                <Button onClick={handleLogout}>Logout</Button>
              </>
            )}
            {isNotSmallDevice ? (
              <ModeToggle />
            ) : (
              <>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">
                      <Menu />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Weather Forecast</SheetTitle>
                      <SheetDescription>
                        A weather forecast application
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <Button variant="link">
                        <Link to="/home">
                          <Home className="inline-flex mr-2" />
                          Home
                        </Link>
                      </Button>
                      <Button variant="link">
                        <Link to="/home">
                          <CloudRainIcon className="inline-flex mr-2" />
                          Weather
                        </Link>
                      </Button>
                      <div className="inline-flex mx-auto items-center">
                        <span className="mr-2">Switch theme</span>
                        <ModeToggle />{" "}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
