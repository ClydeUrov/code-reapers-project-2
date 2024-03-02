import { useEffect, useState } from "react";
import { isValidEmail } from "../helpers/paterns";
import backgroundImage from "../icons/bg.png";
import { SiInternetarchive } from "react-icons/si";
import { fetchUser } from "../helpers/api";
import { useNavigate } from "react-router";
import { errorToast } from "../helpers/toasters";
import toast from "react-hot-toast";

function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (!login || !password) {
      setError("Fill in all fields!");
      return;
    } else if (!isValidEmail(login)) {
      setError("Please, write the correct Login");
      return;
    }

    toast.promise(
      fetchUser(login, password)
        .then((data) => {
          if (data) {
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/profile");
          }
          return data;
        })
        .catch((err) => {
          if (err.response.status === 400) {
            errorToast("Не вірниий логін або пароль");
            return;
          }
          errorToast(err.message);
        }),
      {
        loading: "Зачекайте",
      }
    );
  }
  return (
    <div
      className="w-full h-[100vh] overflow-hidden flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="absolute left-5 top-8 flex p-10 text-white"
        style={{ background: "radial-gradient(#000 1%, transparent 40%)" }}
      >
        <span className="text-4xl">
          <SiInternetarchive />
        </span>
        <h2 className="w-[230px] ml-5 text-5xl">
          Університет Інформаційних Технологій
        </h2>
      </div>
      <form
        className="w-2/5 h-3/6 rounded-3xl shadow-2xl flex flex-col justify-center items-center gap-6 bg-[#8A8677] bg-opacity-60"
        onSubmit={onSubmit}
      >
        <h1 className="mb-4 font-semibold text-2xl">Авторизація</h1>
        <div className="flex gap-y-5 flex-col">
          <div className="flex items-center justify-around gap-x-4 lg:w-96">
            <input
              value={login}
              onChange={(e) => {
                setError("");
                setLogin(e.target.value);
              }}
              placeholder="E-mail"
              required
              type="text"
              id="login"
              className="w-full px-2 py-2 bg-slate-50 border-2 border-slate-300 focus:border-slate-400 focus:outline-none rounded-full"
            />
          </div>
          <div className="flex items-center justify-around gap-x-4 lg:w-96">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              minLength={6}
              type="password"
              id="password"
              className="w-full px-2 py-2 border-2 border-slate-300 focus:border-slate-400 focus:outline-none rounded-full bg-slate-50"
            />
          </div>
        </div>
        <p className="h-4 text-red-600 text-base">{error}</p>
        <button
          className={`border-2  duration-150 border-slate-400 py-2 min-w-40 bg-slate-900/40 rounded-lg text-slate-950 text-lg font-semibold shadow-md ${
            !error
              ? "cursor-pointer hover:bg-slate-900/50"
              : "cursor-not-allowed"
          } `}
          disabled={!!error}
        >
          Увійти
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
