import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOneAnswer } from "../../../store/answer";
import { getOneQuestion } from "../../../store/question";
import { useModal } from "../../../context/Modal";

const UpdateAnswer = ({ answer, question }) => {
    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const [content, setContent] = useState(answer?.content)
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const updateAnswer = {
            content: content
        }
        const updatedAnswer = await dispatch(updateOneAnswer(updateAnswer, answer?.id))
        if (updatedAnswer) {
            setErrors(updatedAnswer)
        }
        if (updatedAnswer.id) {
            closeModal();
            // dispatch(getOneQuestion(question.id))
        }

    }
    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <div className="form-modal">
            <h2 className="extra-padding answer-question-title">{question.content}</h2>
            <form onSubmit={handleSubmit} className="extra-padding" >
                <textarea
                    className="answer-modal"
                    rows="8"
                    cols="60"
                    placeholder={question?.content}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="question-form-buttons">
                    {errors.length > 0 ? <span className="color-red create-error">
                        Answer must be between 10 or 500 characters!
                    </span> : <></>}
                    <span>
                        <button className="close-button" onClick={handleCancel}>Cancel</button>
                    </span>
                    <button className="update-button" type="submit" >Update Answer</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateAnswer
