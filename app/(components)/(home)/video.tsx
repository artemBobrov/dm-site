import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

const HeroVideo = () => {
    return (
        <div className='w-full p-4 pt-4'>
            <video width="96%" className='w-full video-height object-cover rounded-3xl lg:rounded-10xl' autoPlay muted loop playsInline>
                <source src="/videos/compressed_hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default HeroVideo;