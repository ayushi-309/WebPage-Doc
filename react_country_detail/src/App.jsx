import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Country } from "./Pages/Country";
import { Home } from "./Pages/Home";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"contact",
    element:<Contact/>
  },
  {
    path:"country",
    element:<Country/>
  },
])

const App = () => {
  return <h1>Hello React project</h1>;
};

export default App;