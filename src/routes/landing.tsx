import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export const Landing = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
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
