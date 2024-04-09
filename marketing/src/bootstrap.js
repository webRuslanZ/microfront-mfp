import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const mount = (root) => {
  ReactDOM.createRoot(root).render(
    <App/>    
  );
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
