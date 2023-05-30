import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal()
    }
  };

  return (
    <>
      <h1  >Log In</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <ul>
          {errors.length > 0 ? <div className="signup-errors">
            Credentials Invalid
          </div> : <></>}
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
          Password

        </label>
        <input
          className="inputField"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginFormModal;
