import { Suspense } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="w-full grid grid-rows-[100px_1fr_200px]">
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
