import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

const ThreeGuys = () => {
    return (
        <div className="max-w-screen-xl py-32 flex lg:flex-row flex-col items-center">
            <Image src="/temp/__temp_3Guys.png"
                            width={700}
                            height={500}
                            alt="Picture of the author"
                            className='pl-4'/>
            <div className='p-6 flex flex-col md:flex-row lg:flex-col items-baseline'>
                <p className='text-blue-black-80 font-medium pb-3 text-sm pr-6 whitespace-nowrap'>О студии</p>
                <p>Discover a new kind of university in New York City, one where scholars, artists, and designers come together to challenge convention and create positive change. Our university takes full advantage of its location in one of the most vibrant and diverse cities in the world. Our colleges and graduate schools include Parsons School of Design, Eugene Lang College of Liberal Arts, the College of Performing Arts, The New School for Social Research, the Schools of Public Engagement, and Parsons Paris.</p>
            </div>
        </div>
    );
};

export default ThreeGuys;