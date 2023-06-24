import React from 'react';
import './Navigation.css';

const Footer = () => {
    return (
        <div className='footer'>
            <p className='footer-content'>
                Brian Washington Jr:
                <a className='about-link' target='_blank' href='https://github.com/zipzopboppitybop'>
                    <i className="fa fa-github "></i>
                </a>
                <a className='about-link' target='_blank' href='https://www.linkedin.com/in/brian-washington-668129244/'>
                    <i className="fa fa-linkedin">
                    </i>
                </a>
            </p>
            <p></p>
        </div>

    );
}

export default Footer;
