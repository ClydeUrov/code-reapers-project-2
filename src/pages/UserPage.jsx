import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const UserPage = () => {
  const [userData, setUserData] = useState([]);

  const handleLogout = () => {

  }

  return (
    <div>
      <article>
        <div className="mb-12 ml-12 mt-14 flex items-center justify-between px-8 pt-6">
          <h1 className="text-3xl font-normal">Особисті дані</h1>
          <span
            className="styledLi mb-4 mr-6 flex items-center gap-2 self-end"
            onClick={handleLogout}
          >
            <i>
              <IoMdArrowBack size={20} />
            </i>
            <span>ВИХІД</span>
          </span>
        </div>

        <section className="flex gap-12 bg-gray-200 py-4 pl-16">
          <img
            src={userData.photoURL}
            alt=""
            className="h-40 min-w-32 rounded-md border-solid object-fill shadow-lg"
          />
          <div className="flex flex-col justify-center gap-6 ">
            <span className="rounded-full border-solid bg-gray-50 px-6 py-2">
              {userData.name}
            </span>

            <span className="rounded-full bg-gray-50 px-6 py-2">
              {userData.email}
            </span>
          </div>
        </section>
      </article>
    </div>
  )
}

export default UserPage;