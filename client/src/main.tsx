import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import AppContextprovider from "./context/appcontextprovider.tsx";

const Main = () => {
  return (
    <React.StrictMode>
      <AppContextprovider>
        <App />
      </AppContextprovider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main />
);
