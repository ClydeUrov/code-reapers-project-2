import { Link } from "react-router-dom";
import { SiInternetarchive } from "react-icons/si";

function Logo() {
  return (
    <section className="md:w-1/5 w-2/5 ">
      <Link to="/" className="flex w-fit items-center justify-center">
        <span className="text-4xl"><SiInternetarchive /></span>
        <span className="text-lg pt-3 w-28 ml-3 font-extrabold ">
          УнІТ
        </span>
      </Link>
    </section>
  ); 
}

export default Logo;