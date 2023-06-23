import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOneQuestion, getAllQuestions } from "../../../store/question";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";


const CreateQuestion = () => {
    const history = useHistory();
    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newQuestion = {
            content: content
        }
        const successQuestion = await dispatch(createOneQuestion(newQuestion))
        if (successQuestion) {
            setErrors(successQuestion);
        } else {
            closeModal();
            history.push("/")
            dispatch(getAllQuestions())
        }

    }

    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <div className="form-modal" >
            <form onSubmit={handleSubmit}>

                <textarea
                    className="question-form"
                    rows="8"
                    cols="60"
                    placeholder='Start your question with "What", "How", "Why", etc.'
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
                    <button className="create-button" type="submit" >Add Question</button>
                </div>

            </form>

        </div>
    )
}

export default CreateQuestion
