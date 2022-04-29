import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ setSearchVal }) {


  return (
    <div className="flex flex-column float-left ">
      <div className="mb-3 xl:w-96">
        <div className="input-group relative flex flex-row items-stretch w-full mb-4">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search by First or Last Name"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={(e) => setSearchVal(e.target.value)}
          />

          <button
            className="btn px-4 py-2.5 text-gray-400 font-medium text-xs border flex items-center"
            type="button"
            id="button-addon2"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
