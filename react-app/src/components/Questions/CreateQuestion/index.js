import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOneQuestion, getAllQuestions } from "../../../store/question";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";
// import "./CreatePost.css"


const CreateQuestion = () => {
    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user);
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        const newQuestion = {
            content: content
        }
        const successQuestion = await dispatch(createOneQuestion(newQuestion))
        if (successQuestion) {
            setErrors(successQuestion);
        } else {
            closeModal();
            dispatch(getAllQuestions())
        }

    }

    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <div>
            <form>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <textarea
                    // className="create-post-textarea"
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
