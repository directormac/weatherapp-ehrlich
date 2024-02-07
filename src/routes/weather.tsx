import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Forecast } from "@/types";
import { useMediaQuery } from "usehooks-ts";

export const Weather = () => {
  const isNotSmallDevice = useMediaQuery("(min-width: 768px)");
  const forecasts = useLoaderData() as Array<Forecast>;
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const navigate = useNavigate();

  if (forecasts.length === 0 || !city) {
    return (
      <div className="container">
        <div className="flex flex-col space-y-8 py-20">
          <div className="justify-center items-center text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-red-500">Oops!</span> it seems that the city
              you are looking for does not exist!
            </h1>
          </div>
          <Button className="ml-auto w-36" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flex flex-col space-y-8 py-20">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date(mm/dd/yyyy)</TableHead>
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
            {forecasts.map((forecast, index) => (
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
        <Button className="ml-auto w-36" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
};
