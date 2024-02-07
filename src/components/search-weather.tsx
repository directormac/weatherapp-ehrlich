import { Button } from "./ui/button";
import { Form } from "react-router-dom";
import { Input } from "./ui/input";

export const SearchWeather = () => {
  return (
    <>
      <Form method="post" action="/home">
        <Input name="city" placeholder="City" />
        <Button type="submit">Display Weather</Button>
      </Form>
    </>
  );
};
