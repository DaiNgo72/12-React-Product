import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode: giúp thông báo lỗi sớm khi đang ở môi trường development
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
