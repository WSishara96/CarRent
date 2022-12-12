import React from 'react';
import Link from 'next/link';
import SocialIcon from './SocialIcon';
import {footerBanners, footerNavItems} from '../utils/constans';

const Footer = () => (
 <div>
     <div className='px-3 md:px-10 flex flex-col md:flex-row items-center my-2'>
         {footerBanners.map((item)=>(
             <div key={item.title} className='w-full h-14 md:w-1/3 px-1 flex flex-row items-center mb-2 dark:text-cr-white'>
                 <div className='mr-2'>
                     <img src={item.icon} className='h-14 w-14' alt={item.title} />
                 </div>
                 <div className='flex flex-col justify-start items-start h-14'>
                     <h5 className='text-sm font-semibold capitalize'>{item.title}</h5>
                     <p className='text-sm'>{item.description}</p>
                 </div>
             </div>
         ))}
     </div>
     <div className="flex flex-col md:flex-row justify-between items-center py-3 px-10 bg-cr-black dark:bg-cr-white ">
         <div className="gap-3 flex flex-row text-gray-300 dark:text-gray-800">
             {footerNavItems.map((item) => (
                 <Link href={item.link} key={item.name}>{item.name}</Link>
             ))}
         </div>
         <div className="">
             <SocialIcon />
         </div>
     </div>
 </div>
);

export default Footer;
