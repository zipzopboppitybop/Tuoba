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

    const onSubmit = async (e) => {
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
        <div className="form-modal">
            <form className="form-modal">
                {errors.length > 0 ? <div className="color-red">
                    Question must be between 10 or 130 characters!
                </div> : <></>}
                <textarea
                    className="form-modal"
                    rows="8"
                    cols="60"
                    placeholder="Go ahead, put anything."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>
            <span>
                <button onClick={handleCancel}>Close</button>
            </span>
            <button onClick={onSubmit}>PostNow</button>
        </div>
    )
}

export default CreateQuestion
