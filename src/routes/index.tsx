import { Routes as ReactRouter, Route } from "react-router-dom";
import { Home } from "./home.tsx";
import { Landing } from "./landing.tsx";
import { Layout } from "@/layout.tsx";
import { ErrorPage } from "./error.tsx";
import { Weather } from "./weather.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "@/components/page-loader.tsx";

export const Routes = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <ReactRouter>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="weather" element={<Weather />} />
      </Route>
    </ReactRouter>
  );
};
