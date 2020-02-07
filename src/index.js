import React from "react";
import ReactDOM from "react-dom";

import { TodoProvider } from "./providers/TodoProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  rootElement
);
