import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialIcon = () => (
  <div className="flex row justify-end items-center ">
    <Link href="/" className="mx-2 text-gray-600 dark:text-gray-100 dark:hover:text-gray-600 hover:text-black duration-500"><FaFacebookSquare /></Link>
    <Link href="/" className="mx-2 text-gray-600 dark:text-gray-100 dark:hover:text-gray-600 hover:text-black duration-500"><FaTwitter /></Link>
    <Link href="/" className="mx-2 text-gray-600 dark:text-gray-100 dark:hover:text-gray-600 hover:text-black duration-500"><FaYoutube /></Link>
    <Link href="/" className="mx-2 text-gray-600 dark:text-gray-100 dark:hover:text-gray-600 hover:text-black duration-500"><FaInstagramSquare /></Link>
  </div>
);

export default SocialIcon;
