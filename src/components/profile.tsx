import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

export const Profile = () => {
  const { user } = useAuth0();

  const transformGithubUsernameToLink = (username: string = "") =>
    `https://github.com/${username}`;

  if (!user) return null;

  return (
    <div className="flex flex-col space-y-4 py-20 justify-center items-center text-center">
      <p>{user?.name}</p>
      <Button variant="link">
        <a href={transformGithubUsernameToLink(user?.nickname)}>
          {transformGithubUsernameToLink(user?.nickname)}
        </a>
      </Button>
    </div>
  );
};
