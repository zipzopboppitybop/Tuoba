import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';

function Footer() {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='footer'>
            <p>Brian Washington Jr</p>
        </div>

    );
}

export default Footer;
