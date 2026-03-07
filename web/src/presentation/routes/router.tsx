import { createBrowserRouter, Navigate } from "react-router-dom";

import TabsLayout from "../layouts/TabsLayout";
import AppLayout from "../layouts/AppLayout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Settings from "../pages/settings/Settings";

import Checkin from "../pages/checkin/Checkin";
import BreathingIntro from "../pages/breathing/BreathingIntro";
import Focus from "../pages/focus/Focus";
import SessionComplete from "../pages/session/SessionComplete";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    element: <TabsLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },

  {
    element: <AppLayout />,
    children: [
      {
        path: "/checkin",
        element: <Checkin />,
      },
      {
        path: "/breathing",
        element: <BreathingIntro />,
      },
      {
        path: "/focus",
        element: <Focus />,
      },
      {
        path: "/session-complete",
        element: <SessionComplete />,
      },
    ],
  },
]);