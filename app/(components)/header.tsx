import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

const Header = () => {
    return (
        <header className='flex justify-center items-center border-solid border-b p-5'>
            <nav className='flex justify-between items-center max-w-screen-xl w-full'>
                 <Image src="/images/Logo_Type=Horizontal.svg"
                                width={300}
                                height={500}
                                alt="Picture of the author"/>
                    <ul className='flex items-center gap-4 '>
                        {/* <img src="/images/Logo_Type=Horizontal.svg" alt="" /> */}
                        
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/groups/stainslavcy'>Stanislavcy</Link></li>
                    </ul>       
             </nav>
        </header>
    );
};

export default Header;