import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main'; //폴더 명만 적어도 알아서 Min을 찾아서 import한다


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },

]);

export default router;