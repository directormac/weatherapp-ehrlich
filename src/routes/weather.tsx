import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLoaderData } from "react-router-dom";
import React from "react";

export const Weather = () => {
  const city = useLoaderData();

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
              <TableHead>Description</TableHead>
              <TableHead>Main</TableHead>
              <TableHead>Pressure</TableHead>
              <TableHead>Humidity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{city?.dt}</TableCell>
              <TableCell>{city?.main?.temp}</TableCell>
              <TableCell>{city?.weather[0]?.description}</TableCell>
              <TableCell>{city?.weather[0]?.main}</TableCell>
              <TableCell>{city?.main?.pressure}</TableCell>
              <TableCell>{city?.main?.humidity}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* <p>{JSON.stringify(city)}</p> */}
      </div>
    </div>
  );
};
