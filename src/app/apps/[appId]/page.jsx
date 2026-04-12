'use client'
import React, { use } from 'react';

const appsData = fetch('/data.json').then(res=>res.json())

const DetailsApp = ({params}) => {
    const {appId} = use(params);
    const datum = use(appsData);
    const card= datum.find(app=> app.id==appId);

    
    
    return (
        <div>
          {card.title}
        </div>
    );
};

export default DetailsApp;