import { AiOutlinePicture } from "react-icons/ai";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { linksForStudent } from "../data/linksForStudent";
import { linksForTeachers } from "../data/linksForTeacers";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { useLocalStorageState } from "../helpers/useLocalStorageState";
import { useEffect } from "react";

function NavBar({ setCurrentPage }) {
  const navigate = useNavigate();
  const [user] = useLocalStorageState(null, "user");

  useEffect(() => {
    if (!user) navigate("/");
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="flex flex-col gap-8 pt-6 px-6 bg-[#8A8677]  min-w-[320px] w-1/5  text-white">
      <div className="my-10 mr-4">
        <Logo />
      </div>
      <div className="w-full flex justify-center mb-6">
        <AiOutlinePicture className="rounded-full p-10 bg-aliceblue bg-opacity-60 h-auto min-w-32 border-solid object-fill shadow-lg text-slate-300" />
      </div>
      {user.role === "ROLE_STUDENT" ? (
        <NavLinks list={linksForStudent} setCurrentPage={setCurrentPage} />
      ) : (
        <NavLinks list={linksForTeachers} setCurrentPage={setCurrentPage} />
      )}
      <span
        className="styledLi mb-4 mr-6 flex items-center gap-2 mt-auto"
        onClick={handleLogout}
      >
        <i>
          <IoMdArrowBack size={20} />
        </i>
        <span>ВИХІД</span>
      </span>
    </div>
  );
}

export default NavBar;
