import React, { useContext } from 'react';
import Header from '../../pages/shared/Header/Header';
import './Main.css'
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthCnotext/AuthProvider';

const Main = () => {

    const { selectedCountry } = useContext(AuthContext)
    return (
        <div className='bg-image' style={{
            width: '',
            backgroundImage: `url(${selectedCountry.img})`
        }}>
            <div >
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;