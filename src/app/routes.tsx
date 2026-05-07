import { createBrowserRouter } from "react-router";
import { Home, About, Programs, Contact } from "./pages";
import { Layout } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "contact", Component: Contact },
    ],
  },
]);
