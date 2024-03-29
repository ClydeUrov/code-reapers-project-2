import { createPortal } from "react-dom";
import { useOutsideClick } from "../helpers/useOutsideClick";

const Modal = ({ children, onCloseModal, title = "" }) => {
  const ref = useOutsideClick(onCloseModal);
  return createPortal(
    <div className="fixed top-0 right-0 bg-stone-700/35 h-full w-full flex justify-center items-center">
      <section
        className="w-3/5 max-h-3/5 h-fit bg-slate-100 rounded-2xl  px-6 py-4 text-xl"
        ref={ref}
      >
        <header className=" flex items-center justify-between">
          <h2 className="font-semibold tracking-wider">{title}</h2>
          <span
            className="hover:font-bold cursor-pointer"
            onClick={onCloseModal}
          >
            X
          </span>
        </header>
        {children}
      </section>
    </div>,
    document.body
  );
};

export default Modal;
