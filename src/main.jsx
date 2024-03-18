import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import { routes } from "./routes";
const router = createBrowserRouter(routes);
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,

  </React.StrictMode>
);