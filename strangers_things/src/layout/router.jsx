import Root from "./Root";
import Lipsum from "../features/lipsum/Lipsum";
import AuthForm from "../features/authorization/AuthForm";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Lipsum />,
      },
      {
        path: "/login",
        element: <AuthForm />,
      },
    ],
  },
]);

export default router;
