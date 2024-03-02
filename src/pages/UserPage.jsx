import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import Logo from "../components/Logo";
import TeachersItems from "../components/TeachersItems";
import { AiOutlinePicture } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

const UserPage = () => {
  const [userData, setUserData] = useState({
    fullName: "Симоненко Ганна Петрівна",
    position: "викладач кафедри математики",
    email: "teacher@gmail.com",
    state: "Teacher"
  });

  const userRole =
    userData.state === "Student"
      ? "Студента"
      : userData.state === "Admin"
      ? "Адміністратора"
      : "Викладача";

  const handleLogout = () => {

  }

  return (
    <div className="flex h-[100vh]">
      <div className="flex flex-col gap-8 pt-6 px-10 bg-gray-200 w-1/5">
        <div className="my-10">
          <Logo />
        </div>
        <div className="w-full flex justify-center mb-6">
          <AiOutlinePicture className="h-28 min-w-32 rounded-md border-solid object-fill shadow-lg text-slate-300" />
        </div>
        {userData.state === "Student" ?
          <></>
          : <TeachersItems />
        }
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
      <article className="w-4/5">
        <div className="mb-12 ml-12 mt-14 flex items-center justify-between px-8 pt-6">
          <h1 className="text-3xl font-normal">
            Електронний кабінет {userRole}
          </h1>
        </div>

        <section className="flex gap-12 py-4 pl-16">
          <div className="flex flex-col justify-center gap-1 ">
            <span className="text-[32px] font-bold px-6 py-2 w-80">
              {userData.fullName}
            </span>
            <span className="px-6 py-2">
              {userData.position}
            </span>
            <span className="rounded-full  px-6 py-2">
              {userData.email}
            </span>
          </div>
        </section>
      </article>
      <div className="mr-8 my-11 flex flex-col">
        <FaRegBell className="text-3xl" />
        <IoSettings className="text-3xl mt-auto" />
      </div>
    </div>
  )
}

export default UserPage;