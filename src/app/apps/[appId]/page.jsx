'use client'
import { installContext } from '@/context/Install.provider';
import Image from 'next/image';
import React, { use, useContext } from 'react';

const appsData = fetch('/data.json').then(res => res.json())

const DetailsApp = ({ params }) => {
    const {install, handleClickInstallBtn} = useContext(installContext);
    
    const { appId } = use(params);
    const datum = use(appsData);
    const card = datum.find(app => app.id == appId);

    

    return (
        <div className="my-10  card bg-base-100  shadow-sm">
            <Image
            src={card.image}
            alt={card.title}
            width={300}
            height={300}
            />
            <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
                <div className='flex justify-between'>
                    <div className="badge badge-info">Size: {card.size} Mb</div>
                    <div className="badge badge-info">{card.ratingAvg}</div>

                </div>
                <div className="card-actions justify-end">

                    <button onClick={()=>handleClickInstallBtn()} className={`btn ${install==='Installed'? 'btn-disabled':'btn-primary'}`}>{install}</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsApp;