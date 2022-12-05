import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "./CSSTransition";

function EditMenu({ children, ...rest }: any) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null) as any;
  const dropdown = useRef(null) as any;

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div {...rest}>
      <button
        ref={trigger}
        className={`text-slate-400 hover:text-slate-500 rounded-full ${
          dropdownOpen && "bg-slate-100 text-slate-500"
        }`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="2" />
          <circle cx="10" cy="16" r="2" />
          <circle cx="22" cy="16" r="2" />
        </svg>
      </button>
      <div className="origin-top-right z-10 absolute top-full right-0 w-36	bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1">
        <CSSTransition
          in={dropdownOpen}
          timeout={150}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul
            ref={dropdown}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            {children}
          </ul>
        </CSSTransition>
      </div>
    </div>
  );
}

export default EditMenu;
