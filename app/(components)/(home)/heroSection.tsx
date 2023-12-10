import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex flex-col h-[calc(100vh-125px)] w-full items-center">
            <div className='flex-grow w-full relative p-4 overflow-hidden'>
                <video className='w-full h-full object-cover rounded-3xl lg:rounded-10xl' autoPlay muted loop playsInline>
                    <source src="/videos/compressed_hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='max-w-screen-xl'>
                <p className='text-3xl lg:text-6xl text-center p-6 pb-2 lg:pb-4 font-bold uppercase text-primary-blue-light '>Детская театральная студия «Дело Мечты»</p>
                <p className='text-l lg:text-xl text-center p-8 pt-1 font-medium text-primary-blue-light'> Catch your breath, relax your mind, and feel 14% less stressed in just 10 days</p>
                <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className='fill-blue-gray-medium hover:fill-primary-blue-light cursor-pointer'>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 20.0002C3.33333 29.2049 10.7953 36.6668 20 36.6668C29.2047 36.6668 36.6667 29.2049 36.6667 20.0002C36.6667 10.7954 29.2047 3.3335 20 3.3335C10.7953 3.33349 3.33333 10.7954 3.33333 20.0002ZM27.8452 19.512C28.4961 18.8611 28.4961 17.8059 27.8452 17.155C27.1943 16.5041 26.139 16.5041 25.4882 17.155L20 22.6431L14.5118 17.155C13.861 16.5041 12.8057 16.5041 12.1548 17.155C11.5039 17.8059 11.5039 18.8611 12.1548 19.512L18.8215 26.1787C19.134 26.4912 19.558 26.6668 20 26.6668C20.442 26.6668 20.8659 26.4912 21.1785 26.1787L27.8452 19.512Z" />
                    </svg>
             </div>
            </div>
        </div>
    );
};

export default HeroSection;