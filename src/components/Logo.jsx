import { Link } from "react-router-dom";

function Logo() {
  return (
    <section className="md:w-1/5 w-2/5 ">
      <Link to="/" className="flex w-fit items-center">
        <span className="text-6xl">🏰</span>
        <span className="text-l pt-3 w-28 font-extrabold">
          НОВИЙ<br />
          САЙТ
        </span>
      </Link>
    </section>
  );
}

export default Logo;