import { createHashRouter, Outlet } from "react-router-dom";
import AuthProvider  from "../context/AuthProvider.tsx";
import HomePage from "../no-authen/home-page/index.tsx";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import ErrorPage from "../no-authen/error-page/index.tsx";
import Edit from "../authen/Edit/index.tsx";
import UserTemplate from "../template/UserTemplate.tsx";


const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default createHashRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <UserTemplate />,
            children: [
              {
                element: <Edit />,
                path: "edit",
              },
            ],
          },
        ],
      },
    ],
  },
])