import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../src/component/Layouts/AppLayout";


import "./App.css";

import { Home } from "../src/pages/Home";
import { About } from "../src/pages/About";
import { Country } from "../src/pages/Country";
import { Contact } from "../src/pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;