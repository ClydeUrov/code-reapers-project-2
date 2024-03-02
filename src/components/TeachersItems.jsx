import { IoCalendarOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";
import { BsListCheck } from "react-icons/bs";

const TeachersItems = () => {
  return (
    <>
      <button className="flex items-center">
        <IoCalendarOutline className="text-4xl" />
        <p className="ml-3 text-lg">Навчальний календар</p>
      </button>
      <button className="flex items-center">
        <TiMessages className="text-4xl" />
        <p className="ml-3 text-lg">Повідомлення</p>
      </button>
      <button className="flex items-center">
        <FaPeopleGroup className="text-4xl" />
        <p className="ml-3 text-lg">Студенти</p>
      </button>
      <button className="flex items-center">
        <BsListCheck className="text-4xl" />
        <p className="ml-3 text-lg">Створити тестування</p>
      </button>
      <button className="flex items-center">
        <RiMailSendLine className="text-4xl" />
        <p className="ml-3 text-lg">Створити розсилку</p>
      </button>
    </>
  )
}

export default TeachersItems;