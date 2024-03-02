// import { useState } from "react";
// import CustomButton from "../components/CustomButton";
// import Modal from "../components/Modal";
// import { errorToast, infoToast, successToast } from "../helpers/toasters";

import NavLinks from "../components/NavLinks";

const Home = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      <NavLinks />
      {/* <div>
        <CustomButton onClick={() => setIsModalOpen(true)} text="Open Modal" />
        <div className="space-x-6">
          <h3>toasters</h3>
          <button onClick={() => infoToast("SOME MESSAGE")}>INFO</button>
          <button onClick={() => successToast()}>SUCCESS</button>
          <button onClick={() => errorToast()}>ERROR</button>
        </div>
      </div>

      {isModalOpen && (
        <Modal onCloseModal={() => setIsModalOpen(false)} title="Some header" />
      )} */}
    </div>
  );
};

export default Home;
