import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import CreateQuestion from '../Questions/CreateQuestion';
import OpenModalButton from '../OpenModalButton';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	const handleClick = (e) => {
		e.preventDefault();
		console.log()
	}



	return (
		<div className='navbar-container'>
			{sessionUser ? (
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
						<li className='create-question-div'>
							<OpenModalButton className="span-create-post" buttonText={<><i className="fas fa-pen-square">Add Question</i></>} modalComponent={<CreateQuestion />}></OpenModalButton>
						</li>

					) : (<></>)}
				</ul>
			) : (
				<></>
			)}

		</div>

	);
}

export default Navigation;
