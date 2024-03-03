import { useState } from "react";
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
      </div>
    </>
  );
};

export default UserPage;
