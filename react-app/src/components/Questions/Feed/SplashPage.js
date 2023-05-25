import React from 'react';
import { useDispatch } from "react-redux";
import LoginFormModal from '../../LoginFormModal';
import SignupFormModal from '../../SignupFormModal';
import { login } from '../../../store/session';
import "./Feed.css"


const SplashPage = () => {
    const dispatch = useDispatch();

    const demoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login("demo@aa.io", "password"));
    };


    return (
        <div className='splash'>
            <div className='login-container'>

                <h1 className='login-title'>Tuoba</h1>

                <p>A place to share knowledge and better understand the world</p>

                <div className='modals'>
                    <div className='signup'>
                        <SignupFormModal />
                    </div>

                    <div className='login'>
                        <LoginFormModal />
                        <button className='demo-login' onClick={demoLogin}>Demo</button>
                    </div>



                </div>



            </div>

        </div>
    )
}

export default SplashPage;
