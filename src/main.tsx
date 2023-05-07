import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter } from 'react-router-dom'

import HomePage from './shared/pages/HomePage/HomePage.tsx';
import NotFound from './shared/pages/ErrorPages/NotFound.tsx';
import Personal from './shared/pages/Personal/Personal.tsx';

import './main.css';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App></App>
  </React.StrictMode>,
)
