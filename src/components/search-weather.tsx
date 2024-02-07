import { Button } from "./ui/button";
import { Form } from "react-router-dom";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

export const SearchWeather = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Form
        method="post"
        action="/home"
        className="flex flex-col w-3/6 justify-center items-center  space-y-4"
      >
        <div className="relative flex items-center w-full">
          <SearchIcon className="absolute ml-2" />
          <Input
            name="city"
            type="search"
            placeholder="City"
            className="pl-8"
          />
        </div>
        <Button type="submit">Display Weather</Button>
      </Form>
    </div>
  );
};
