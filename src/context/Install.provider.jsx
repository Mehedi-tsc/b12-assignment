'use client'
import React, { createContext, useState } from 'react';

export const installContext= createContext();
const InstallProvider = ({children}) => {
    const [install, setInstall]=useState('Install Now')
    const handleClickInstallBtn =()=>{
        setInstall('Installed')
        
    }
    const data ={
        install,
        handleClickInstallBtn
    }
    return (
        <installContext.Provider value={data}>{children}</installContext.Provider>
    );
};

export default InstallProvider;