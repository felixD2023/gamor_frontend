import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage.tsx";
import App from "./App.tsx";

//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "party/",
        element: <HomePage />,
      },
      {
        path: "premium/",
        element: <HomePage />,
      },
      {
        path: "stream/",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
