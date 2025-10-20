import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Root from "../Components/Root";
import NewsCategory from "../Components/NewsCategory";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        element: <NewsCategory></NewsCategory>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
]);
export default router;
