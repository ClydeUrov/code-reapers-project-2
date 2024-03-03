import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocalStorageState } from "../helpers/useLocalStorageState";
import { errorToast } from "../helpers/toasters";
import { getOneUser } from "../helpers/api";

function MainUserPage() {
  const [user] = useLocalStorageState(null, "user");
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");

  useEffect(() => {
    if (!user) navigate("/");
  });
  useEffect(() => {
    async function fetch() {
      try {
        await getOneUser().then((d) => setUserData(d));
      } catch (error) {
        console.log(error);
        errorToast(error.message);
      }
    }
    fetch();
  }, []);
  return (
    <article className="w-4/5">
      <div className="mb-12 ml-12 mt-14 flex items-center justify-between px-8 pt-6"></div>

      <section className="flex gap-12 py-4 pl-16">
        <div className="flex flex-col justify-center gap-1 ">
          <span className="text-[32px] font-bold px-6 py-2 w-80">
            {userData.lastName +
              " " +
              userData.firstName +
              " " +
              userData.middleName}{" "}
          </span>
          <span className="px-6 py-2">
            {user.role === "ROLE_STUDENT" ? "Студент" : "Вчитель"}
          </span>
          <span className="px-6 py-2">Group: {userData.groupCipher}</span>
          <span className="px-6 py-2">Course: {userData.course}</span>
          <span className="px-6 py-2">Faculty: {userData.faculty}</span>
          <span className="rounded-full  px-6 py-2">
            Email: {userData.email}
          </span>
        </div>
      </section>
    </article>
  );
}

export default MainUserPage;
