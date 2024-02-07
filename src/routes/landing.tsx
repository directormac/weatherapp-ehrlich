import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export const Landing = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
    });
  };

  return (
    <div className="flex w-full mx-auto flex-col space-y-12 py-20 justify-center">
      <p>
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city.
      </p>
      <Button onClick={handleLogin} className="w-24">
        Login
      </Button>
    </div>
  );
};
