import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const Landing = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
    });
  };

  return (
    <div className="container">
      <div className="flex flex-col space-y-12 py-20 ">
        {isAuthenticated ? (
          <>
            <p className="text-center">
              {" "}
              You are already logged in please navigate to the{" "}
              <Link className="hover:underline" to="/home">
                home
              </Link>{" "}
              page and search for a city, to find its weather forecasts!
            </p>
          </>
        ) : (
          <>
            <p>
              Welcome to the weather forecast web application. Please login with
              your Github user to use the application and view the weather in
              your city.
            </p>
            <Button onClick={handleLogin} className="w-24">
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
