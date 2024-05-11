import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

//react-router-dom
import { HashRouter, Routes, Route } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter >
        <Routes>
          <Route path="/" element={<App/>} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
