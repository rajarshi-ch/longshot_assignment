import React, { useRef, useEffect, ReactNode } from "react";
import { CSSTransition } from "./CSSTransition";

function Modal({
  children,
  modalOpen,
  setModalOpen,
}: {
  children: ReactNode;
  modalOpen: boolean;
  setModalOpen: Function;
}) {
  const modalContent = useRef(null) as any;
  const searchInput = useRef(null) as any;

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      {/* Modal backdrop */}
      <CSSTransition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        in={modalOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        aria-hidden="true"
        timeout={150}
        children={null}
      />
      {/* Modal dialog */}
      <CSSTransition
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
        aria-modal="true"
        in={modalOpen}
        enter="transition ease-in-out duration-200"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-4"
        timeout={150}
      >
        <div
          ref={modalContent}
          className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
        >
          {children}
        </div>
      </CSSTransition>
    </>
  );
}

export default Modal;
