import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes";

export default function App() {
  return (
      <RouterProvider router={AppRoutes} />
  );  
}
