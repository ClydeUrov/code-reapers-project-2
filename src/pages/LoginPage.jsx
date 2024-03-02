import { useEffect, useState } from "react";
import { isValidEmail } from "../helpers/paterns";
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
    <div className="w-full h-[100vh] overflow-hidden bg-slate-50 flex justify-center items-center">
      <form
        className="w-3/5 h-3/5 bg-slate-200 rounded-3xl border border-slate-400 shadow-2xl flex flex-col justify-center items-center gap-6 "
        onSubmit={onSubmit}
      >
        <h1 className="mb-4 font-semibold text-xl">Authorization</h1>
        <div className="flex gap-y-5 flex-col">
          <div className="flex items-center justify-around w-full gap-x-4">
            <label htmlFor="login" className="w-2/5">
              Login
            </label>
            <input
              value={login}
              onChange={(e) => {
                setError("");
                setLogin(e.target.value);
              }}
              required
              type="text"
              id="login"
              className="px-2 py-2 bg-slate-50 border-2 border-slate-300 focus:border-slate-400 focus:outline-none rounded-lg"
            />
          </div>
          <div className="flex items-center justify-around w-full gap-x-4">
            <label htmlFor="password" className="w-2/5">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              type="password"
              id="password"
              className="px-2 py-2 border-2 border-slate-300 focus:border-slate-400 focus:outline-none rounded-lg bg-slate-50"
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
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
