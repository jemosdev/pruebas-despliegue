import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App.jsx';
import { GuidePage } from './pages/GuidePage.jsx';
import { GuideDetailPage } from './pages/GuideDetailPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Esta es la homepage</h1>,
    errorElement: <h1>Esta sería la errorpage</h1>,
  },
  {
    path: '/guides',
    element: <GuidePage />,
  },
  {
    path: '/guides/:description/id/:guideId',
    element: <GuideDetailPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
);