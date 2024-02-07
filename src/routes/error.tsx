import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  let message: string;

  if (isRouteErrorResponse(error)) {
    message = error.statusText;
  } else if (error instanceof Error) {
    message = error.message;
  } else {
    message = "Something went wrong";
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-red-500 text-2xl">Oops!</h1>
        <p>
          <i>{message}</i>
        </p>
      </div>
    </>
  );
};
