import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLoaderData, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

export const Weather = () => {
  const city = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="flex flex-col space-y-8 py-20">
        <h1>Weather Page</h1>
        <Table>
          <TableCaption>Weather for the City of {city?.name}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date(mm/dd/yyyy)</TableHead>
              <TableHead>Temp(F)</TableHead>
              <TableHead className="invisible md:visible">
                Description
              </TableHead>
              <TableHead className="invisible md:visible">Main</TableHead>
              <TableHead className="invisible md:visible">Pressure</TableHead>
              <TableHead className="invisible md:visible">Humidity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                {format(new Date(Date.now() + city?.dt), "MM/dd/yyyy")}
              </TableCell>
              <TableCell>{city?.main?.temp}</TableCell>
              <TableCell className="invisible md:visible">
                {city?.weather[0]?.description}
              </TableCell>
              <TableCell className="invisible md:visible">
                {city?.weather[0]?.main}
              </TableCell>
              <TableCell className="invisible md:visible">
                {city?.main?.pressure}
              </TableCell>
              <TableCell className="invisible md:visible">
                {city?.main?.humidity}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button className="ml-auto w-36" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
};
