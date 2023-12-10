"use client"; // This is a client component 👈🏽

import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import DropDown from './(header)/dropdown';
import CtaButton from './(buttons)/cta-button';

const Header = () => {
    return (
        <header className='sticky top-0 z-50 bg-white flex justify-center items-center border-solid border-b p-5'>
            <nav className='flex justify-between items-center max-w-screen-xl w-full'>
                    <Link href='/'> 
                    <Image src="/images/Logo_Type=Horizontal.svg"
                            width={260}
                            height={500}
                            alt="Picture of the author"/>
                    </Link>
                
                    <ul className='hidden lg:flex items-center gap-6 text-m font-medium '>
                        <li><DropDown label = "О студии" showIcon = {true}/></li>
                        <li><DropDown label = "Расписание и цены" showIcon = {true}/></li>
                        <li><DropDown label = "Группы" showIcon = {false}/></li>
                        <li><DropDown label = "Ресурсы" showIcon = {true}/></li>
                        <li><DropDown label = "Контакты" showIcon = {false}/></li>
                        <CtaButton text='Запись' size='m'/>   
                    </ul>
                    <svg className=" lg:hidden ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                     </svg>       
             </nav>
        </header>
    );
};

export default Header;