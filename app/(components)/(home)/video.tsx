import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

const HeroVideo = () => {
    return (
        <div className='w-full '>
            <video width="100%" className='w-full video-height object-cover rounded-b-10xl' autoPlay muted loop>
                <source src="/videos/compressed_hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default HeroVideo;