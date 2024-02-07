import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./globals.css";
import { Auth0ProviderWithNavigate } from "@/components/auth-provider";
import { ThemeProvider } from "@/components/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>,
);
