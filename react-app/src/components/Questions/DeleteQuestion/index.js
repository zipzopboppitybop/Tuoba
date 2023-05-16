import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteOneQuestion } from "../../../store/question";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useModal } from "../../../context/Modal";


const DeleteQuestion = ({ questionId }) => {
    const { closeModal } = useModal();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleDelete = async (e) => {
        e.preventDefault();
        dispatch(deleteOneQuestion(questionId))
        closeModal()

    }

    const onCancel = (e) => {
        e.preventDefault();
        closeModal()
    }

    return (
        <div>
            <div>Are you sure you want to delete this question?</div>
            <button onClick={handleDelete}>
                Yes, delete this Question
            </button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </div>
    )
}

export default DeleteQuestion
