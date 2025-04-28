import React, { useCallback, useEffect, useRef } from "react";

const Dropdown = ({ openDropdown, setOpenDropDown,handleDropdown }) => {
  const dropdownRef = useRef(null);


  const handleClickOutside = useCallback((event) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current).contains(event.target)
    ) {
      setOpenDropDown(false);
    }
  }, [setOpenDropDown, dropdownRef]);


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
    
  return (
    <div class="relative inline-block text-left">
      <div>
        <button
          type="button"
          class="inline-flex cursor-pointer w-full justify-center hover:text-yellow-400 text-white transition duration-300 ease-in-out"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleDropdown}
          data-slot="button"
        >
          Dropdown
          <svg
            class="-mr-1 size-5  "
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {openDropdown && (
        <div
        ref={dropdownRef}
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <ul class="text-gray-700" role="none">
              <li
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 cursor-pointer transition duration-300 ease-in-out"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Dropdown 1
              </li>
              <li
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 cursor-pointer transition duration-300 ease-in-out"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Dropdown 2
              </li>
              <li
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 cursor-pointer transition duration-300 ease-in-out"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                Dropdown 3
              </li>
              <li
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 cursor-pointer transition duration-300 ease-in-out"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Dropdown 4
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
