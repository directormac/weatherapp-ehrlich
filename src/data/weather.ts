import { GeoLocation } from "@/types";
import { ActionFunction, LoaderFunction, redirect } from "react-router-dom";

const key = import.meta.env.VITE_OPENWEATHER_API_KEY;
const url = import.meta.env.VITE_OPENWEATHER_API_URL;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  return redirect(`/weather?city=${formData.get("city")}`);
};

export const loader: LoaderFunction = async ({ request }) => {
  const city = new URL(request.url).searchParams.get("city");

  const geo = await fetch(
    `${url}/geo/1.0/direct?q=${city}&limit=1&appid=${key}`,
  )
    .then((response) => response.json())
    .then((data) => data[0] as GeoLocation)
    .catch(() => undefined);

  if (!geo) return null;

  return await fetch(
    `${url}/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=${key}`,
  ).then((response) => response.json());
};
