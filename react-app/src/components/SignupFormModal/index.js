import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();
	const allErrors = [];

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	if (errors) {
		for (let error of errors) {
			let split = error.split(":")
			allErrors.push(split[1]);
		}
	}




	return (
		<>
			<h1>Sign Up</h1>
			<form className="form-login" onSubmit={handleSubmit}>
				<ul className="errors-list">
					{allErrors.map((error, idx) => (
						<li className="color-red" key={idx}>{error}</li>
					))}
				</ul>
				<label className="form-label">
					Email

				</label>
				<input
					className="inputField"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<label className="form-label">
					Username

				</label>
				<input
					className="inputField"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<label className="form-label">
					Password

				</label>
				<input
					className="inputField"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<label className="form-label">
					Confirm Password

				</label>
				<input
					className="inputField"
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
				<button className="login-button" type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;
