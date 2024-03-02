import { IoCalendarOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoBarChart } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaListCheck } from "react-icons/fa6";

export const linksForStudent = [
  {
    text: "Навчальний календар",
    icon: <IoCalendarOutline />,
    onClick: () => console.log("!!!!!!!!!!"),
  },
  {
    text: "Повідомлення",
    icon: <TiMessages />,
    onClick: () => console.log("!!!!!!!!!!"),
  },
  {
    text: "Аналіз успішності",
    icon: <IoBarChart />,
    onClick: () => console.log("!!!!!!!!!!"),
  },
  {
    text: "Аналіз відвідуваності",
    icon: <LiaChalkboardTeacherSolid />,
    onClick: () => console.log("!!!!!!!!!!"),
  },
  {
    text: "Пройти тестування",
    icon: <FaListCheck />,
    onClick: () => console.log("!!!!!!!!!!"),
  },
];
