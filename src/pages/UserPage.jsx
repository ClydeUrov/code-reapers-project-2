import { useState } from "react";
import { IoSettings } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import { mainPages } from "../data/mainPages";
import { useLocalStorageState } from "../helpers/useLocalStorageState";

const UserPage = () => {
  const [currentPage, setCurrentPage] = useState("main");
  const [user] = useLocalStorageState(null, "user");
  const userRole = {
    ROLE_STUDENT: "Студент",
    ROLE_ADMIN: "Старший викладач",
    ROLE_TEACHER: "Викладач",
  };
  return (
    <>
      <div className="flex h-full min-h-[100vh]">
        <NavBar setCurrentPage={setCurrentPage} />
        <div className="w-full">
          <h1 className="text-3xl font-normal">
            Електронний кабінет {userRole[user.role]}
          </h1>
          {mainPages[currentPage]}
        </div>

        <div className="mr-8 my-11 relative">
          <FaRegBell className="text-3xl absolute top-10 right-10" />
          <IoSettings className="text-3xl mt-auto  absolute bottom-10 right-10" />
        </div>
      </div>
    </>
  );
};

export default UserPage;
