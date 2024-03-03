import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import { PrivateRoute } from "./helpers/PrivateRoute";
import TestingPage from "./pages/TestingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route
          path="/profile"
          element={<PrivateRoute component={<UserPage />} />}
        ></Route>
        <Route
          path="/test/:id"
          element={<PrivateRoute component={<TestingPage />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
