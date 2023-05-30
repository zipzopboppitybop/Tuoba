import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOneAnswer } from "../../../store/answer";
import { getOneQuestion } from "../../../store/question";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";


const CreateAnswer = ({ questionId }) => {
    const history = useHistory();
    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user);
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault()
        const newAnswer = {
            content: content
        }
        const successAnswer = await dispatch(createOneAnswer(newAnswer, questionId))
        if (successAnswer) {
            setErrors(successAnswer);
        } else {
            closeModal();
            dispatch(getOneQuestion(questionId))
        }

    }


    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <div className="form-modal">
            <form className="form-modal">
                {errors.length > 0 ? <div className="color-red">
                    Answer must be between 10 or 255 characters!
                </div> : <></>}
                <textarea
                    className="form-modal"
                    rows="8"
                    cols="60"
                    placeholder="Write an answer."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>
            <span >
                <button onClick={handleCancel}>Close</button>
            </span>
            <button onClick={onSubmit}>PostNow</button>
        </div>
    )
}

export default CreateAnswer
