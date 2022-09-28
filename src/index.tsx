import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App, { ChainsMode } from "./components/App";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route
          path="/metadata-portal"
          element={<App mode={ChainsMode.prod} />}
        />
        <Route
          path="/metadata-portal/dev"
          element={<App mode={ChainsMode.dev} />}
        />
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
