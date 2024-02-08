import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { Forecast } from "@/types";
import { useMediaQuery } from "usehooks-ts";
import { BackButton } from "@/components/back-button";

export const Weather = () => {
  const isNotSmallDevice = useMediaQuery("(min-width: 768px)");
  const forecasts = useLoaderData() as Array<Forecast> | null;
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");

  if (city === null && forecasts === null) {
    return (
      <>
        {" "}
        <h1 className="text-3xl font-bold">
          <span className="text-red-500">Oops!</span> it seems that the city you
          are looking for does not exist!
        </h1>
        <BackButton />
      </>
    );
  }

  if (forecasts && forecasts.length === 0) {
    return (
      <div className="container">
        <div className="flex flex-col space-y-8 py-20">
          <div className="justify-center items-center text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-red-500">Oops!</span> it seems that the city
              you are looking for does not exist!
            </h1>
          </div>
          <BackButton />
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="flex flex-col space-y-8 py-20">
        <Table>
          <TableHeader>
            <TableRow className="text-xl font-bold">
              <TableHead>Date (mm/dd/yyyy)</TableHead>
              <TableHead>Temp(F)</TableHead>
              {isNotSmallDevice && (
                <>
                  <TableHead>Description</TableHead>
                  <TableHead>Main</TableHead>
                  <TableHead>Pressure</TableHead>
                  <TableHead>Humidity</TableHead>
                </>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {forecasts &&
              forecasts.map((forecast, index) => (
                <TableRow key={index}>
                  <TableCell className="">{forecast.date}</TableCell>
                  <TableCell className="">{forecast.temp}</TableCell>
                  {isNotSmallDevice && (
                    <>
                      <TableCell>{forecast.description}</TableCell>
                      <TableCell>{forecast.main}</TableCell>
                      <TableCell>{forecast.pressure}</TableCell>
                      <TableCell>{forecast.humidity}</TableCell>
                    </>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <BackButton />
      </div>
    </div>
  );
};
