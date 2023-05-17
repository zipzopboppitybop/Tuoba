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
        <div>
            <div>Are you sure you want to delete this answer?</div>
            <button onClick={handleDelete}>
                Yes, delete this Answer
            </button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </div>
    )
}

export default DeleteAnswer
