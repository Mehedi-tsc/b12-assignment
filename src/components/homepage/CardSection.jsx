import React from 'react';
import CardInfo from '@/ui/CardInfo';
import ShowMoreBtn from '@/ui/ShowMoreBtn';

const CardSection = async() => {
    const res = await fetch('http://localhost:3000/data.json')
    const cards = await res.json();
    return (
       <div className='container mx-auto py-10'>
         <div className='flex flex-col justify-center items-center space-y-3'>
           <CardInfo cards={cards}></CardInfo>
           <ShowMoreBtn></ShowMoreBtn>
        </div>
       </div>
    );
};

export default CardSection;