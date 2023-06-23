import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteOneQuestion } from "../../../store/question";
import { useModal } from "../../../context/Modal";

const DeleteQuestion = ({ questionId }) => {
    const { closeModal } = useModal();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleDelete = async (e) => {
        e.preventDefault();
        dispatch(deleteOneQuestion(questionId))
        history.push('/')
        closeModal()

    }

    const onCancel = (e) => {
        e.preventDefault();
        closeModal()
    }

    return (
        <div className="delete-form">
            <div>Delete Question?</div>
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

export default DeleteQuestion
