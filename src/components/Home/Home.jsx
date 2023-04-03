import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Error from '../Error/Error';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;