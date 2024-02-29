import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/profile" element={<UserPage />} /> */}
        {/* <Route path="/auction/:auctionId" element={<AuctionPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
