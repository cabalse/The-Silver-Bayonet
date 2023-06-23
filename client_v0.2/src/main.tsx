import React from "react";
import App from "./components/App.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

const domNode = document.getElementById("root");

if (domNode) {
  const root = createRoot(domNode);
  root.render(<Main />);
} else {
  console.error("Could not find root element");
}
