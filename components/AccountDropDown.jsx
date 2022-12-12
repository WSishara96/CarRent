import React, { useState } from 'react';
import Link from 'next/link';
import { FaBookmark, FaCog, FaSignOutAlt, FaUser } from 'react-icons/fa';

const AccountDropDown = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="dropdown relative">
            <button
              className=" dropdown-toggle px-6 py-2.5 text-cr-white dark:text-cr-black font-medium leading-tight capitalize transition duration-150 ease-in-out flex items-center whitespace-nowrap"
              type="button"
              onClick={() => setVisible(!visible)}
            >
              Username
            </button>
            {visible && (
            <ul
              className="dropdown-menu min-w-max w-full absolute dark:bg-cr-white bg-cr-black text-base text-cr-white dark:text-cr-black z-50 float-left rounded-b-sm list-none text-left shadow-lg mt-0 m-0 bg-clip-padding border-non  transition-all duration-500 ease-in-out"
            >
              <li>
                <Link className="flex items-center dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-10" href="/">
                  <FaUser className="mr-2" />
                  Profile
                </Link>
                <Link className="flex items-center dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-10" href="/">
                  <FaBookmark className="mr-2" />
                  Booking
                </Link>
                <Link className="flex items-center dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-10" href="/">
                  <FaCog className="mr-2" />
                  Setting
                </Link>
                <Link className="flex items-center dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-10" href="/">
                  <FaSignOutAlt className="mr-2" />
                  Log out
                </Link>
              </li>
            </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDropDown;
