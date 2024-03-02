import { BsListCheck } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";

export const linksForTeachers = [
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
    text: "Студенти",
    icon: <FaPeopleGroup />,
    onClick: () => console.log("!!!!!!!!!!"),
  },
  {
    text: "Створити тестування",
    icon: <BsListCheck />,
    onClick: () => console.log("!!!!!!!!!!"),
  },
  {
    text: "Створити розсилку",
    icon: <RiMailSendLine />,
    onClick: () => console.log("!!!!!!!!!!"),
  },
];
