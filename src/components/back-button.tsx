import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button className="ml-auto w-36" onClick={() => navigate(-1)}>
      Back
    </Button>
  );
};
