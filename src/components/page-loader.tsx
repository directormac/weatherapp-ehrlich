import { Loader2 } from "lucide-react";

export const PageLoader = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Loader2 className="animate-spin w-32 h-32" />
      </div>
    </>
  );
};
