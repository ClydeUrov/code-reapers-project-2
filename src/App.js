import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import { PrivateRoute } from "./helpers/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route
          path="/profile"
          element={<PrivateRoute component={<UserPage />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
