import { BsListCheck } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";

export const linksForTeachers = [
  {
    text: "Навчальний календар",
    icon: <IoCalendarOutline />,
    onClick: (func) => func("calendar"),
  },
  {
    text: "Повідомлення",
    icon: <TiMessages />,
    onClick: (func) => func("messages"),
  },
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
