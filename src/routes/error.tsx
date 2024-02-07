import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1 className="text-red-500 text-2xl">Something went wrong</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
};
