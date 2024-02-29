import { useState } from "react";
import CustomButton from "../components/CustomButton";
import Modal from "../components/Modal";
import { RxCross1 } from "react-icons/rx";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      <div>
        <CustomButton onClick={() => setIsModalOpen(true)} text="Open Modal" />
      </div>
      {isModalOpen && (
        <div className="fixed left-0 top-12 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative h-[500px] w-[800px] rounded-lg bg-white px-16">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3 top-3 rounded-full p-2 text-slate-600 hover:text-black"
            >
              <RxCross1 className="text-2xl" />
            </button>
            <Modal closeModal={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home;