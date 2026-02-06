import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../shared/components/layout/MainLayout";
import BundlePage from "../pages/BundlePage";
import DashboardPage from "../pages/DashboardPage";
import MyPlanPage from "../pages/MyPlanPage";
import OnboardingPage from "../pages/OnboardingPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/onboarding" replace /> },
      { path: "/onboarding", element: <OnboardingPage /> },
      { path: "/bundles", element: <BundlePage /> },
      { path: "/plan", element: <MyPlanPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
    ],
  },
]);

export default router;
