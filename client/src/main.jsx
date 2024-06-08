import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/_style.scss";
import { BrowserRouter } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import App from "./App";

import { Provider } from "react-redux";
import state from "./state/index";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={state}>
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

initializeIcons();
