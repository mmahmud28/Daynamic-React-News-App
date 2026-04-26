import Navbar from 'daisyui/components/navbar';
import React from 'react';

const Augthlayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default Augthlayout;