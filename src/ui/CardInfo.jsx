'use client'
import Card from '@/components/homepage/Card';
import { usePathname } from 'next/navigation';
import React from 'react';

const CardInfo = ({cards}) => {
    const pathName = usePathname();
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-7'>
             {
               cards.slice(0,pathName==='/'?8:cards.length).map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default CardInfo;