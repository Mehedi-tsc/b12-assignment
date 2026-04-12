'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ShowMoreBtn = () => {
    const pathName = usePathname();
    return (
        <Link href='/apps'><button className={`btn btn-primary ${pathName==='/apps'&& 'hidden'}`}>Show More</button></Link>
    );
};

export default ShowMoreBtn;