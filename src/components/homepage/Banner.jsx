import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#D2D2D2]/10 pt-10 '>
            <div className='space-y-4 container mx-auto'>
            <h2 className='text-7xl font-bold text-center'>We Build <br /> <span  className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>
            <p className='text-[#627382] text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='text-center'>
                <button className='btn btn-outline border border-gray-400 mr-4'>
                    <Image
                    src='/playstore.png'
                    alt='Button-Image'
                    width={32}
                    height={32}
                    />
                    <span className='font-semibold text-lg'>Google Play</span>
                </button>
                <button className='btn btn-outline border border-gray-400'>
                    <Image
                    src='/appstore.png'
                    alt='Button-Image'
                    width={32}
                    height={32}

                    />
                    <span className='font-semibold text-lg'>App Store</span>
                </button>
            </div>
            <div className='flex justify-center items-center'>
                 <Image
                    src='/hero.png'
                    alt='Banner-Image'
                    width={600}
                    height={600}
                    />
            </div>
        </div>
        </div>
    );
};

export default Banner;