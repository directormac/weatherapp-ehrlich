import { loader } from "@/data/weather";
import { useLoaderData } from "react-router-dom";

export const Weather = () => {
  const city = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  console.log(city);

  return (
    <div>
      {JSON.stringify(city)}
      <h1>Weather Page</h1>
    </div>
  );
};
