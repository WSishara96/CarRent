import React, {useState} from 'react';
import Link from 'next/link';
import {FaBars, FaCar, FaMoon, FaPhone, FaSun} from 'react-icons/fa';
import {BsEnvelope} from 'react-icons/bs';
import useTheme from 'next-theme';
import SocialIcon from './SocialIcon';
import AccountDropDown from './AccountDropDown';
import {navItems} from '../utils/constans';

const MenuItems = ({ Style }) => (
  <div className={`flex ${Style}`}>
    {navItems.map((item) => (
      <Link href={item.link} key={item.link} className="px-2 text-white capitalize font-bold hover:text-neutral-400 dark:text-cr-black duration-500">{item.name}</Link>))}
  </div>
);

const ThemeBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center mx-5">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="opacity-0 absolute checkbox"
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <label
        htmlFor="checkbox"
        className="flex text-white cursor-pointer justify-between w-8 h-4 bg-gray-400 rounded-2xl p-1 relative transform scale-[1.5] label"
      >
        <FaSun className="text-[9px] mt-0 pt-0 text-yellow-400" />
        <FaMoon className="text-[9px] mt-0 pt-0 text-yellow-500" />
        <div
          className="w-3 h-3 bg-white absolute rounded-full top-[2px] left-[2px] ball transition duration-500 "
        />
      </label>
    </div>
  );
};

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);

  return (
    <>
      <div
        className="h-12 bg-cr-white dark:bg-cr-black text-cr-black shadow dark:text-cr-white flex justify-between px-10 items-center"
      >
        <Link href="/" className=" mx-1 hover:text-fuchsia-800 duration-500">
          <div className="text-2xl font-bold flex flex-row items-center">
            <FaCar className="mr-2" />
            <h2>CarRent</h2>
          </div>
        </Link>
        <div className=" hidden md:flex justify-start items-center">
          <div
            className="border rounded-full h-7 w-7 flex justify-center items-center border-black dark:border-cr-white"
          >
            <BsEnvelope className="p-0 m-0" />
          </div>
          <div className="ml-3">
            <h3 className="font-bold text-sm uppercase mb-[-5px] pb-0">for support mail us</h3>
            <h6 className="mt-0 pt-0">current@gmail.com</h6>
          </div>
        </div>
        <div className=" hidden md:flex justify-start items-center ">
          <div
            className="border rounded-full h-7 w-7 flex justify-center items-center border-black dark:border-cr-white"
          >
            <FaPhone />
          </div>
          <div className="ml-3">
            <h3 className="font-bold text-sm uppercase mb-[-5px] pb-0">service helping call us</h3>
            <h6 className="mt-0 pt-0">+94 0711234567</h6>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <SocialIcon />
        </div>
        <button type="button" className="block md:hidden" onClick={() => setNavShow(!navShow)}>
          <FaBars />
        </button>
      </div>

      <nav
        className="h-10 bg-cr-black dark:bg-cr-white hidden md:flex justify-between items-center px-12 py-2 sticky top-0 shadow-lg z-40"
      >
        <div className=" ">
          <MenuItems Style="flex-row" />
        </div>
        <div className="flex items-center">
          <ThemeBtn />
          <AccountDropDown />
        </div>
      </nav>

      {navShow && (
      <div
        className="bg-cr-black dark:bg-cr-white absolute w-screen cr-h-nav transition-all duration-500 md:hidden px-2 flex flex-col justify-between"
      >
        <div className="py-3 flex justify-end">
          <ThemeBtn />
        </div>
        <div onClick={() => setNavShow(!navShow)}>
          <MenuItems Style="flex-col text-center gap-3 my-2" />
        </div>
        <div className="w-screen">
          {/* <AccountDropDown/> */}
        </div>
        <div className="w-fit flex flex-col mx-auto mb-5 text-cr-white dark:text-cr-black">
          <div className=" flex justify-start items-center mb-2">
            <div
              className="border rounded-full h-7 w-7 flex justify-center items-center border-white dark:border-black"
            >
              <BsEnvelope className="p-0 m-0" />
            </div>
            <div className="ml-3">
              <h3 className="font-bold text-sm uppercase mb-[-5px] pb-0">for support mail us</h3>
              <h6 className="mt-0 pt-0">current@gmail.com</h6>
            </div>
          </div>
          <div className=" flex justify-start items-center ">
            <div
              className="border rounded-full h-7 w-7 flex justify-center items-center border-white dark:border-black"
            >
              <FaPhone />
            </div>
            <div className="ml-3">
              <h3 className="font-bold text-sm uppercase mb-[-5px] pb-0">service helping call us</h3>
              <h6 className="mt-0 pt-0">+94 0711234567</h6>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Navbar;
