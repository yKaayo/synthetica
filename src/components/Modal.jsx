import { useEffect } from "react";

// Icon
import closeIcon from "../assets/icons/close.svg";

const Modal = ({ isOpen, setModal, content }) => {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  function handleModalClose() {
    setModal((prevModal) => !prevModal);
  }

  return (
    <section
      className={`${isOpen ? "fixed" : "hidden"} top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/90`}
    >
      <div className="relative z-[1] flex max-h-[90vh] w-3/4 max-w-[720px] min-w-[300px] flex-col rounded-md bg-white p-3 ">
        <button
          onClick={handleModalClose}
          className="relative z-[1] cursor-pointer"
        >
          <img
            src={closeIcon}
            className="ms-auto size-7 rounded-full border-2 border-gray-200 bg-gray-200 p-1 duration-300 hover:scale-105 hover:bg-gray-100/40"
            alt="Fechar"
          />
        </button>

        {content}

        <button onClick={handleModalClose} className="btn z-[1] mt-5">
          Fechar
        </button>
      </div>
    </section>
  );
};

export default Modal;
