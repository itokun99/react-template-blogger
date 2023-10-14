import {
  createBrowserRouter
} from "react-router-dom";

import Root from '../pages/Root';


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: Root
  },
]);