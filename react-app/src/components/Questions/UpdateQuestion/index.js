import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateOneQuestion, getOneQuestion, getAllQuestions } from "../../../store/question";
import { useModal } from "../../../context/Modal";

const UpdateQuestion = ({ question }) => {
    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const [content, setContent] = useState(question?.content)
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const updateQuestion = {
            content: content
        };
        const updatedQuestion = await dispatch(updateOneQuestion(updateQuestion, question?.id))
        if (updatedQuestion) {
            setErrors(updatedQuestion)
        }
        if (updatedQuestion.id) {
            closeModal()
            dispatch(getOneQuestion(question.id))
            dispatch(getAllQuestions());
        }

    };
    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    };

    return (
        <div className="form-modal">
            <form onSubmit={handleSubmit} >
                <textarea
                    className="question-form"
                    rows="8"
                    cols="60"
                    placeholder={question?.content}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="question-form-buttons">
                    {errors.length > 0 ? <span className="color-red create-error">
                        Question must be between 10 or 130 characters!
                    </span> : <></>}
                    <span>
                        <button className="close-button" onClick={handleCancel}>Cancel</button>
                    </span>
                    <button className="update-button" type="submit" >Update Question</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateQuestion
