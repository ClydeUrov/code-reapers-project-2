import { BsListCheck } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";

export const linksForTeachers = [
  {
    text: "Студенти",
    icon: <FaPeopleGroup />,
    onClick: (func) => func("studentsTable"),
  },
  {
    text: "Створити тестування",
    icon: <BsListCheck />,
    onClick: (func) => func("createTest"),
  },
  {
    text: "Створити розсилку",
    icon: <RiMailSendLine />,
    onClick: (func) => func("distribution"),
  },
];
