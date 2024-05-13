import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

//react-router-dom
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";
import HomePage from "./pages/HomePage/HomePage.tsx";

const hashRouter = createHashRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        path: "",
        element: <Navigate to={'/home'}/>
      },
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "party",
        element: <HomePage />
      },
      {
        path: "premium",
        element: <HomePage />
      },
      {
        path: "stream",
        element: <HomePage />
      },
      {
        path: "*",
        element: <HomePage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={hashRouter}/>
    </Provider>
  </React.StrictMode>
);
