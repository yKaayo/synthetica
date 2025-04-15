import { useEffect } from "react";
import closeIcon from "../assets/icons/close.svg";

const Modal = ({ isOpen, message, setModal }) => {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  function handleModalClose() {
    setModal((prevModal) => !prevModal);
  }

  console.log(message);

  return (
    <section
      className={`${isOpen ? "fixed" : "hidden"} top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/90`}
    >
      <div className="flex w-3/4 max-w-[720px] min-w-[300px] flex-col rounded-md bg-white p-3">
        <button onClick={handleModalClose} className="cursor-pointer">
          <img
            src={closeIcon}
            className="ms-auto size-8 rounded-full border-2 border-gray-200 bg-gray-200 p-1 duration-300 hover:scale-105 hover:bg-transparent"
            alt="Ícone de fechar"
          />
        </button>
        <h3 className="text-center text-2xl font-bold text-balance">
          {message}
        </h3>

        <button onClick={handleModalClose} className="btn mt-5">
          Fechar
        </button>
      </div>
    </section>
  );
};

export default Modal;
