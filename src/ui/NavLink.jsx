'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {
const pathName = usePathname();
    return (
       <>
        <li className='font-semibold text-lg'><Link className={`${pathName==='/'?'border-b-2 border-blue text-blue-500':''}`} href='/'>Home</Link></li>
        <li className='font-semibold text-lg'><Link className={`${pathName==='/apps'?'border-b-2 border-blue text-blue-500':''}`} href='/apps'>Apps</Link></li>
        <li className='font-semibold text-lg'><Link className={`${pathName==='/installation'?'border-b-2 border-blue text-blue-500':''}`} href='/installation'>Installation</Link></li>
    </>
    );
};

export default NavLink;