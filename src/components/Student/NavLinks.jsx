import { FaCalendarAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";

const links = {
  calendar: {
    text: "Навчальний календар",
    icon: <FaCalendarAlt />,
  },
  messages: {
    text: "Повідомлення",
    icon: <TiMessages />,
  },
};

function NavLinks() {
  return (
    <nav>
      <ul></ul>
    </nav>
  );
}

export default NavLinks;
