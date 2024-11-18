import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

import AllTreatments from "../Pages/AllTreatments";
import Profile from "../Pages/Profile";
import MyAppoinments from "../Pages/MyAppoinments";
import Details from "../components/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/services.json");
          const servicesData = await servicesRes.json();

          const feedbackRes = await fetch("/feedback.json");
          const feedbackData = await feedbackRes.json();
          return { servicesData, feedbackData };
        },
      },
      {
        path: "/all-treatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-appoinments",
        element: (
          <PrivateRoute>
            <MyAppoinments></MyAppoinments>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(`/services.json`);
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);

          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
