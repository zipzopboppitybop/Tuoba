import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOneAnswer } from "../../../store/answer";
import { getOneQuestion } from "../../../store/question";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";


const CreateAnswer = ({ question }) => {
    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault()
        const newAnswer = {
            content: content
        }
        const successAnswer = await dispatch(createOneAnswer(newAnswer, question.id))
        if (successAnswer) {
            setErrors(successAnswer);
        } else {
            closeModal();
            dispatch(getOneQuestion(question.id))
        }

    }

    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <div className="form-modal stuff">
            <h2 className="extra-padding answer-question-title">{question.content}</h2>
            <form className="extra-padding">
                {errors.length > 0 ? <div className="color-red">
                    Answer must be between 10 or 500 characters!
                </div> : <></>}
                <textarea
                    className="answer-modal"
                    rows="8"
                    cols="60"
                    placeholder="Write an answer."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

            </form>
            <div className="question-form-buttons answer-buttons">
                <button className="close-button" onClick={handleCancel}>Close</button>
                <button className="create-button" onClick={onSubmit}>Post</button>

            </div>
        </div>
    )
}

export default CreateAnswer
