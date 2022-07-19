import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "contexts/auth-context";
import { TasksProvider } from "contexts/tasks-context";
import { ThemeProvider } from "contexts/theme-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <TasksProvider>
            <App />
          </TasksProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
