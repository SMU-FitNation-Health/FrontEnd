import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main'; //폴더 명만 적어도 알아서 Min을 찾아서 import한다
import LoginPage from "../pages/login/LoginPage.jsx";
import SignPage from "../pages/sign/SignPage.jsx";


const router = createBrowserRouter([

  { path: "/", element: <Main /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/sign", element: <SignPage /> },

]);
export default router;