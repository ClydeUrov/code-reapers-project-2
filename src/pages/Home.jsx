import { useState } from "react";
import CustomButton from "../components/CustomButton";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      <div>
        <CustomButton onClick={() => setIsModalOpen(true)} text="Open Modal" />
      </div>

      {isModalOpen && (
        <Modal onCloseModal={() => setIsModalOpen(false)} title="Some header" />
      )}
    </div>
  );
};

export default Home;
