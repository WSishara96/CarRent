import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => (
  <form className="flex items-center">
    <input type="text" name="search" placeholder="Search" className=" h-7 px-2 py-[1px] rounded focus:outline-0 bg-cr-white dark:bg-gray-300" />
    <button type="button" className="w-7 h-7 ml-1 bg-gray-400 text-white flex justify-center items-center rounded hover:text-gray-400 hover:bg-white duration-500">
      <FaSearch />
    </button>
  </form>
);

export default Search;
