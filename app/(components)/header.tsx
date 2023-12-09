"use client"; // This is a client component 👈🏽

import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import DropDown from './(header)/dropdown';

const Header = () => {
    return (
        <header className='flex justify-center items-center border-solid border-b p-5'>
            <nav className='flex justify-between items-center max-w-screen-xl w-full'>
                    <Link href='/'> 
                    <Image src="/images/Logo_Type=Horizontal.svg"
                                    width={300}
                                    height={500}
                                    alt="Picture of the author"/>
                    </Link>
                
                    <ul className='flex items-center gap-6 text-m font-medium '>
                        <li><DropDown label = "О студии" showIcon = {true}/></li>
                        <li><DropDown label = "Расписание и цены" showIcon = {true}/></li>
                        <li><DropDown label = "Группы" showIcon = {false}/></li>
                        <li><DropDown label = "Ресурсы" showIcon = {true}/></li>
                        <li><DropDown label = "Контакты" showIcon = {false}/></li>
                        <button className='p-4 text-white rounded bg-cta-blue'>Запись</button>
                    </ul>       
             </nav>
        </header>
    );
};

export default Header;