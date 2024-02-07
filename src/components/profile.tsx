import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated && <p>{JSON.stringify(user, null, 2)}</p>;
};
