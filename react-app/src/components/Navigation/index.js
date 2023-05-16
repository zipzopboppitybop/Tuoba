import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const url = window.location.pathname
	console.log(url)
	return (
		<ul className='navbar'>
			<li className='title'>
				Tuoba
			</li>
			{url === "/" ? (
				<li>
					<NavLink className='fa current  fa-home' exact to="/"></NavLink>
				</li>
			) : (
				<li>
					<NavLink className='fa  fa-home' exact to="/"></NavLink>
				</li>
			)}
			{url === "/following" ? (
				<li>
					<NavLink className='fa current  fas fa-book' exact to="/following"></NavLink>
				</li>
			) : (
				<li>
					<NavLink className='fa  fas fa-book' exact to="/following"></NavLink>
				</li>
			)}

			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
			{sessionUser ? (
				<li>
					<button>hello</button>
				</li>

			) : (<></>)}
		</ul>
	);
}

export default Navigation;
