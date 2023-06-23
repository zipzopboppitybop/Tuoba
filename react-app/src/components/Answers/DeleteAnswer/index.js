import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteOneAnswer } from "../../../store/answer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useModal } from "../../../context/Modal";


const DeleteAnswer = ({ answerId }) => {
    const { closeModal } = useModal();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleDelete = async (e) => {
        e.preventDefault();
        dispatch(deleteOneAnswer(answerId))
        closeModal()

    }

    const onCancel = (e) => {
        e.preventDefault();
        closeModal()
    }

    return (
        <div className="delete-form">
            <div>Delete Answer?</div>
            <p>This cannot be undone.</p>
            <div className="question-form-buttons">
                <span>
                    <button className="delete-close-button" onClick={onCancel}>Cancel</button>
                </span>
                <button className="delete-button" onClick={handleDelete} >Confirm</button>
            </div>
        </div>
    )
}

export default DeleteAnswer
