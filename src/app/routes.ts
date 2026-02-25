import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { BlogList } from "./components/BlogList";
import { BlogPost } from "./components/BlogPost";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: BlogList },
      { path: "blog/:slug", Component: BlogPost },
      { path: "*", Component: NotFound },
    ],
  },
]);
