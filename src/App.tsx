import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <ThemeProvider>
        <ModeToggle />
        <h1>Hello World!</h1>
        <Button>Login</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
