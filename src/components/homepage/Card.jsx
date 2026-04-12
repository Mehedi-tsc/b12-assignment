import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ card }) => {
    return (
        <Link href={`/apps/${card.id}`}>
        <div className="card bg-base-100 shadow-sm">
            <div className='m-3 p-10 flex justify-center items-center bg-gray-200 rounded-2xl'>
                <Image
                src={card.image}
                alt={card.title}
                width={200}
                height={200}
                />
            </div>
            <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <div className="card-actions justify-between">
                   <div className="badge badge-soft badge-warning">Warning</div>
                   <div className="badge badge-soft badge-warning">Warning</div>
                   
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Card;