import { Outlet, Route, Routes } from "react-router-dom";
import FullPage from "./templates/fullpage";

function App() {
  return (
    <Routes>
      <Route
        element={
          <FullPage>
            <Outlet />
          </FullPage>
        }
      >
        <Route path="/" element={<div>The Silver Bayonet</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Route>
    </Routes>
  );
}

export default App;
