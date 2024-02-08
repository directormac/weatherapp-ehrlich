import { Forecast } from "@/types";
import { ActionFunction, LoaderFunction, redirect } from "react-router-dom";
import { format } from "date-fns";

const key = import.meta.env.VITE_OPENWEATHER_API_KEY;
const url = import.meta.env.VITE_OPENWEATHER_API_URL;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const errors: { city?: string } = {};

  const city = formData.get("city");

  return await fetch(`${url}/data/2.5/weather?q=${city}&appid=${key}`).then(
    (response) => {
      if (!response.ok) {
        errors.city = "City not found, Please try another one!";
        return errors;
      } else {
        return redirect(`/weather?city=${formData.get("city")}`);
      }
    },
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  const city = new URL(request.url).searchParams.get("city");

  if (city === "") return null;

  const data = await fetch(
    // This endpoint doesn't work for the free version, replaced with the one below
    // `${url}/data/2.5/forecast/daily?q=${city}&units=imperial&cnt=16&appid=${key}`,
    `${url}/data/2.5/forecast?q=${city}&units=imperial&cnt=40&appid=${key}`,
  )
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;
      const foreCast16: Array<Forecast> = [];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      list.forEach((item: any) => {
        const forecast: Forecast = {
          id: Number(item.dt),
          date: format(new Date(item.dt_txt), "MM/dd/yyyy"),
          weatherId: Number(item.weather[0].id),
          main: String(item.weather[0].main),
          temp: Number(item.main.temp),
          description: String(item.weather[0].description),
          icon: String(item.weather[0].icon),
          humidity: Number(item.main.humidity),
          pressure: Number(item.main.pressure),
        };
        foreCast16.push(forecast);
      });

      return foreCast16;
    })
    .catch(() => {
      return null;
    });
  return data;
};
