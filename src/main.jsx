import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from './components/Coffee/AddCoffee.jsx';
import UpdateCoffee from './components/Coffee/UpdateCoffee.jsx';
import Main from './components/Layout/Main';
import ErrorPage from './components/Layout/ErrorPage';
import Nav from './components/Layout/Nav';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/nav",
        element: <Nav></Nav>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
