import { createPortal } from "react-dom";

const Modal = ({ children, onCloseModal, title = "" }) => {
  return createPortal(
    <div className="fixed top-0 right-0 bg-slate-500/35 h-full w-full flex justify-center items-center">
      <section className="w-3/5 h-3/5 bg-slate-100 rounded-2xl max-w-[550px] px-6 py-4 text-xl">
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
