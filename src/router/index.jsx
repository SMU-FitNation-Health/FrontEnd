import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main'; //폴더 명만 적어도 알아서 Min을 찾아서 import한다
import LoginPage from "../pages/login/LoginPage.jsx";
import SignPage from "../pages/sign/SignPage.jsx";
import OnboardingPage from "../pages/onboarding/OnboardingPage.jsx";
import DashBoardPage from "../pages/dashboard/DashBoardPage.jsx";
import DailyFoodPage from '../pages/dailyfood/DailyFoodPage.jsx';

const router = createBrowserRouter([

  { path: "/", element: <Main /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/sign", element: <SignPage /> },
  { path: "/onboarding", element: <OnboardingPage /> },
  { path: "/dashboard", element: <DashBoardPage /> },
  { path: "/dailyfood", element: <DailyFoodPage /> },

]);
export default router;