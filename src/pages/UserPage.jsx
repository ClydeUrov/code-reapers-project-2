import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import Logo from "../components/Logo";
import TeachersItems from "../components/TeachersItems";
import { AiOutlinePicture } from "react-icons/ai";

const UserPage = () => {
  const [userData, setUserData] = useState({
    fullName: "Симоненко Ганна Петрівна",
    position: "викладач кафедри математики",
    email: "teacher@gmail.com",
    state: "Teacher"
  });

  const handleLogout = () => {

  }

  return (
    <div className="flex h-[100vh]">
      <div className="flex flex-col gap-8 pt-6 px-10 bg-gray-200 ">
        <div className="my-10">
          <Logo />
        </div>
        <div className="w-full flex justify-center mb-6">
          <AiOutlinePicture className="h-40 min-w-32 rounded-md border-solid object-fill shadow-lg text-slate-300" />
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
          <h1 className="text-3xl font-normal">{userData.state === "Student" ? "Електронний кабінет Студента" : "Електронний кабінет Викладача"}</h1>
        </div>

        <section className="flex gap-12 py-4 pl-16">
          <div className="flex flex-col justify-center gap-1 ">
            <span className="text-2xl px-6 py-2">
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
    </div>
  )
}

export default UserPage;