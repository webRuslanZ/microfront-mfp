import React from "react";
import { StylesProvider } from "@material-ui/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "*",
      element: <>Хуй</>,
    },
  ]);
  return (
    <StylesProvider>
      <RouterProvider router={router}></RouterProvider>
    </StylesProvider>
  );
};

export default App
