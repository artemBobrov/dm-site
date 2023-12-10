import Link from 'next/link';
import React from 'react';

const HeroText = () => {
    return (
        <div className='max-w-screen-xl'>
           <p className='text-3xl lg:text-6xl text-center p-6 pb-2 lg:pb-4 font-bold uppercase text-primary-blue-light'>Детская театральная студия «Дело Мечты»</p>
           <p className='text-l lg:text-xl text-center p-8 pt-1 font-medium text-primary-blue-light'> Catch your breath, relax your mind, and feel 14% less stressed in just 10 days</p>
        </div>
    );
};

export default HeroText;