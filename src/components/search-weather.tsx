import { Button } from "./ui/button";
import { Form, useActionData } from "react-router-dom";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const SearchWeather = () => {
  const errors = useActionData() as { city: string } | undefined;

  return (
    <div className="flex flex-col justify-center items-center">
      <Form
        method="post"
        className="flex flex-col w-3/6 justify-center items-center  space-y-4"
      >
        <div className="relative flex items-center w-full">
          <SearchIcon className="absolute ml-2" />
          <Input
            name="city"
            type="search"
            placeholder="City"
            className={cn("pl-8", errors?.city ? "border-red-500" : "")}
          />
        </div>
        {errors?.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        <Button type="submit">Display Weather</Button>
      </Form>
    </div>
  );
};
