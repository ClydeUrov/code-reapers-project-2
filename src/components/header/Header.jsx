import { useNavigate } from "react-router";
import Logo from "../Logo";
import LoginLogoutBtn from "./LoginLogoutBtn";

const Header = () => {
  const navigate = useNavigate();

  function scrollTo(id) {
    if (document.querySelector(id)) {
      document
        .querySelector(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
    }
  }

  return (
    <header
      className="sticky top-0 z-30 flex h-24 w-full items-center justify-between bg-gray-50 px-8 py-6 shadow-2xl"
    >
      <Logo />
      <nav>
        <ul className="flex gap-6">
          <li className="styledLi">
            <span onClick={() => scrollTo("#main")}>Головна</span>
          </li>
          <li className="styledLi">
            <span onClick={() => scrollTo("#aboutUs")}>Про нас</span>
          </li>
          <li className="styledLi">
            <span onClick={() => scrollTo("#auctions")}>Аукціон</span>
          </li>
        </ul>
      </nav>
      <LoginLogoutBtn />
      
    </header>
  );
};

export default Header;
