import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import CreateQuestion from '../Questions/CreateQuestion';
import OpenModalButton from '../OpenModalButton';
import SearchBar from '../Search/SearchBar';
import CreateQuestionModal from '../Modals/CreateQuestionModal';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='navbar-container'>
			{sessionUser ? (
				<ul className='navbar'>
					<li className='title '>
						<Link className='logo' title='Home' exact to="/">
							Tuoba
						</Link>
					</li>

					<li>
						<NavLink title='Following' className='fa  fas fa-book nav-item' exact to="/following"></NavLink>
					</li>
					<div className="search-bar">
						< SearchBar />
					</div>
					{isLoaded && (
						<li className='nav-item'>
							<ProfileButton user={sessionUser} />
						</li>
					)}
					{sessionUser ? (
						<li className='create-question-div'>
							<CreateQuestionModal buttonText="Add Question" modalComponent={<CreateQuestion />} />
						</li>

					) : (<></>)}
				</ul>
			) : (
				<></>
			)}

			<div>

			</div>

		</div>

	);
}

export default Navigation;
