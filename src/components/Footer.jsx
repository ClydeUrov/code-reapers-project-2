import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  function scrollTo(id) {
    if (document.querySelector(id)) {
      document
        .querySelector(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="mx-auto mt-10 flex min-h-[212px] w-full justify-between bg-gray-300">
      <div className="ml-16 flex items-center">
        <Logo />
      </div>
      <div id="contacts" className="mt-8 flex w-[800px] flex-col gap-6">
        <div className="mb-8 flex justify-center gap-10">
          <p onClick={() => scrollTo("#main")} className="cursor-pointer">Головна</p>
          <p onClick={() => scrollTo("#aboutUs")} className="cursor-pointer">Про нас</p>
          <p onClick={() => scrollTo("#auctions")} className="cursor-pointer">Аукціон</p>
        </div>
        <div className="flex justify-center gap-10">
          <p>Звітність</p>
          <p>Політика конфіденційності</p>
          <p>Правила користування сайтом</p>
        </div>
        <p className="text-center text-slate-500">
          НОВИЙ САЙТ 2023 (©) Усі права захищені
        </p>
      </div>
      <div
        id="icons"
        className="mr-16 flex w-56 items-center justify-center space-x-5"
      >
        <FaFacebook className="text-3xl" />
        <FaInstagramSquare className="text-3xl" />
        <FaTelegram className="text-3xl" />

        <p className="text-2xl font-bold">UA</p>
      </div>
    </div>
  );
};

export default Footer;