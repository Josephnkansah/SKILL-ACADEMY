import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import Contact from './pages/Contact';
import Course from './pages/Course'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
{
  path: "Contact",
  element: <Contact/>,
},
{
  path: "Course",
  element: <Course/>,
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);
