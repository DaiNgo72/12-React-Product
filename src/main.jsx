import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { BrowserRouter } from "react-router";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode: giúp thông báo lỗi sớm khi đang ở môi trường development
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
