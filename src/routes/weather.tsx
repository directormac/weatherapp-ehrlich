import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export const Weather = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Weather Page</h1>
    </div>
  );
};
