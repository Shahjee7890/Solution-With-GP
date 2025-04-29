import { RouterProvider } from "react-router-dom";
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";

import Router from "./Router";

const App = () => {
  return <RouterProvider router={Router}></RouterProvider>;
};

export default App;
