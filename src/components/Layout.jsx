import { Suspense } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";

const Layout = () => {
  return (
    <div className="w-full">
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  )
}

export default Layout;