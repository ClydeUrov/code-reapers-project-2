import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocalStorageState } from "../helpers/useLocalStorageState";

function MainUserPage() {
  const [user] = useLocalStorageState(null, "user");
  const navigate = useNavigate();
  const userData = {
    fullName: "Симоненко Ганна Петрівна",
    position: "викладач кафедри математики",
    email: "teacher@gmail.com",
    state: "Teacher",
    // state: "Student",
  };

  useEffect(() => {
    if (!user) navigate("/login");
  });
  return (
    <article className="w-4/5">
      <div className="mb-12 ml-12 mt-14 flex items-center justify-between px-8 pt-6"></div>

      <section className="flex gap-12 py-4 pl-16">
        <div className="flex flex-col justify-center gap-1 ">
          <span className="text-[32px] font-bold px-6 py-2 w-80">
            {userData.fullName}
          </span>
          <span className="px-6 py-2">{userData.position}</span>
          <span className="rounded-full  px-6 py-2">{userData.email}</span>
        </div>
      </section>
    </article>
  );
}

export default MainUserPage;
