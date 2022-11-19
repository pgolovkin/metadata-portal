import { render } from "@testing-library/react";
import App, { ChainsMode } from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("renders ok", () => {
  render(
    <Router>
      <App mode={ChainsMode.Prod} />
    </Router>
  );
});

test("data file exists", async () => {
  require("../../public/data.json");
  require("../../public/data_dev.json");
});
