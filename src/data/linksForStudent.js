import { TiMessages } from "react-icons/ti";
import { IoBarChart } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaListCheck } from "react-icons/fa6";

export const linksForStudent = [
  {
    text: "Повідомлення",
    icon: <TiMessages />,
    onClick: (func) => func("messages"),
  },
  {
    text: "Аналіз успішності",
    icon: <IoBarChart />,
    onClick: (func) => func("analisysSuccess"),
  },
  {
    text: "Аналіз відвідуваності",
    icon: <LiaChalkboardTeacherSolid />,
    onClick: (func) => func("attendanceAnalysis"),
  },
  {
    text: "Пройти тестування",
    icon: <FaListCheck />,
    onClick: (func) => func("passTest"),
  },
];
