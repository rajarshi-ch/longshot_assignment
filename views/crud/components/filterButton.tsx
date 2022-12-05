import React, { useState, useRef } from "react";

function FilterButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);

  return (
    <button
      ref={trigger}
      className="font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
        <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
      </svg>
    </button>
  );
}

export default FilterButton;
