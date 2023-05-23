import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import CreateQuestion from '../Questions/CreateQuestion';
import OpenModalButton from '../OpenModalButton';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const url = window.location.pathname
	return (
		<div className='navbar-container'>
			<ul className='navbar'>
				<li className='title'>
					<Link className='logo' title='Home' exact to="/">
						Tuoba
					</Link>
				</li>
				<li>
					<NavLink title='Home' className='fa  fa-home' exact to="/"></NavLink>
				</li>
				<li>
					<NavLink title='Following' className='fa  fas fa-book' exact to="/following"></NavLink>
				</li>
				{isLoaded && (
					<li>
						<ProfileButton user={sessionUser} />
					</li>
				)}
				{sessionUser ? (
					<li>
						<OpenModalButton buttonText={<><i className="fa fa-pen-square"></i></>} modalComponent={<CreateQuestion />}></OpenModalButton>
					</li>

				) : (<></>)}
			</ul>

		</div>

	);
}

export default Navigation;
