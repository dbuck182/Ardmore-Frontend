import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/Homepage.jsx';
import ErrorPage from './Pages/error-page.jsx';
import AdminUpdate from './Pages/AdminUpdate.jsx';
import Login from './Pages/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminUpdate />
  },
  {
    path: "/login",
    element: <Login />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
