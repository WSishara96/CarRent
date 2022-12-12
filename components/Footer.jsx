import React from 'react';
import Link from 'next/link';
import SocialIcon from './SocialIcon';
import { footerNavItems } from '../utils/constans';

const Footer = () => (
  <div className="flex flex-wrap justify-between items-center py-3 px-10 bg-cr-black dark:bg-cr-white">
    <div className="gap-3 flex flex-row text-gray-300">
      {footerNavItems.map((item) => (
        <Link href={item.link} key={item.name}>{item.name}</Link>
      ))}
    </div>
    <div className="">
      <SocialIcon />
    </div>
  </div>
);

export default Footer;
