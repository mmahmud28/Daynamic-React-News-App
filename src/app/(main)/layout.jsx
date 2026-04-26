import React from 'react';
import Header from '../component/shared/Header';
import Navbar from 'daisyui/components/navbar';

const Mainlayout = ({children}) => {
    return (
        <div>
            <Header/>
            <Navbar/>
            {children}
        </div>
    );
};

export default Mainlayout;