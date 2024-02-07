import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./home.tsx";
import { Landing } from "./landing.tsx";
import { ErrorPage } from "./error.tsx";
import { Weather } from "./weather.tsx";
import {
  loader as weatherLoader,
  action as weatherAction,
} from "@/data/weather";
import { Layout } from "./layout.tsx";
import { Protected } from "./protected.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Landing />} />
      <Route element={<Protected />}>
        <Route path="home" element={<Home />} action={weatherAction} />
        <Route path="weather" element={<Weather />} loader={weatherLoader} />
      </Route>
    </Route>,
  ),
);
