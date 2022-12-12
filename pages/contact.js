import React from 'react';
import SocialIcon from "../components/SocialIcon";
import ContactForm from "../components/ContactForm";

const contact = () => (
    <div className='text-cr-black dark:text-cr-white'>
        <h1 className="text-4xl font-bold text-center my-10">Contact Us</h1>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585985172!2d79.7861645766612!3d6.92200394589475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1641692481519!5m2!1sen!2slk"
            className='w-full h-[500px] mb-5 rounded drop-shadow-lg md:px-10 z-0'
            allowFullScreen=""
            loading="lazy">
        </iframe>
        <div className="flex flex-col md:flex-row w-full px-3 md:px-10">
            <div className="flex flex-col w-full md:w-1/2 my-5 px-2">
                <h2 className='text-2xl font-bold my-2'>Contact Us</h2>
                <p className='my-1'>There are many ways to contact us. You may drop us a line, give us a call or send an
                    email, choose what suits you the most.</p>
                <p className='my-1'>+94 713235898 <br/> surangaishara8@gmail.com</p>
                <p className="my-1">
                    Address line 1
                    <br/>
                    Address line 2
                    <br/>
                    city line 1
                    <br/>
                    country
                </p>
                <h2 className='text-2xl font-bold my-2'>Follow Us</h2>
                <SocialIcon iconAlign='justify-start'/>
            </div>
            <div className="flex flex-col w-ful md:w-1/2 my-5 px-2">
                <h2 className='text-2xl font-bold my-2'>Get In Touch With Us!</h2>
                <p className="my-1">
                    Fill out the form below to recieve a free and confidential.
                </p>
                <div className='pr-5'>
                   <ContactForm />
                </div>
            </div>
        </div>
    </div>
);

export default contact;
