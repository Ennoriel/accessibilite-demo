import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./routes/Home";
import { Layout } from "./routes/Layout";
import { Pokemon } from "./routes/Pokemon";

import { pokemons } from "./pokemons";

import "./index.css";
import { Planning } from "./routes/Planning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "pokemon",
        loader: async () => {
          return pokemons.slice(0, 12);
        },
        element: <Pokemon />,
      },
      {
        path: "pokemon/:page",
        loader: async ({ params }) => {
          return pokemons.slice(12 * params.page, 12 * params.page + 12);
        },
        element: <Pokemon />,
      },
      {
        path: "planning",
        element: <Planning />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
