import { useState } from "react";
import Modal from "../Modal";
import FormDistribution from "./FormDistribution";

const initial = {
  facult: false,
  course: false,
  group: false,
};

const faculList = [
  { name: "FMT", id: 1 },
  { name: "FIO", id: 2 },
  { name: "SBU", id: 3 },
  { name: "FICT", id: 4 },
];
const courses = [
  { name: "I", id: "I" },
  { name: "II", id: "II" },
  { name: "III", id: "III" },
  { name: "IV", id: "IV" },
  { name: "V", id: "V" },
];
const groups = [
  { name: "IO-05", id: 1 },
  { name: "IP-01", id: 2 },
  { name: "IA-12", id: 3 },
  { name: "IM-33", id: 4 },
  { name: "IK-12", id: 5 },
  { name: "IM-03", id: 6 },
  { name: "IL-36", id: 7 },
  { name: "IE-02", id: 8 },
];

function Distribution() {
  const [openModal, setOpenModal] = useState(initial);
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-y-16">
      <h2 className="font-bold text-2xl">Створити розсилку</h2>
      <div className="flex justify-center gap-x-6 text-stone-50 w-full">
        <button
          className="bg-stone-700  w-1/4 h-40 rounded-2xl hover:bg-stone-800/90 hover:shadow-xl"
          onClick={() => setOpenModal((state) => ({ ...state, facult: true }))}
        >
          Для факультету
        </button>

        <button
          className="bg-stone-700  w-1/4 h-40 rounded-2xl hover:bg-stone-800/90 hover:shadow-xl"
          onClick={() => setOpenModal((state) => ({ ...state, course: true }))}
        >
          Для курсу
        </button>
        <button
          className="bg-stone-700  w-1/4 h-40 rounded-2xl hover:bg-stone-800/90 hover:shadow-xl"
          onClick={() => setOpenModal((state) => ({ ...state, group: true }))}
        >
          Для групи
        </button>
      </div>
      {openModal.facult && (
        <Modal title="Розсилка" onCloseModal={() => setOpenModal(initial)}>
          <FormDistribution
            optionList={faculList}
            type="Факультети"
            onCloseModal={() => setOpenModal(initial)}
          />
        </Modal>
      )}
      {openModal.course && (
        <Modal title="Розсилка" onCloseModal={() => setOpenModal(initial)}>
          <FormDistribution
            optionList={courses}
            type="Курси"
            onCloseModal={() => setOpenModal(initial)}
          />
        </Modal>
      )}
      {openModal.group && (
        <Modal title="Розсилка" onCloseModal={() => setOpenModal(initial)}>
          <FormDistribution
            optionList={groups}
            type="Групи"
            onCloseModal={() => setOpenModal(initial)}
          />
        </Modal>
      )}
    </div>
  );
}

export default Distribution;
