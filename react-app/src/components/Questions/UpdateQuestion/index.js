import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOneQuestion, getAllQuestions } from "../../../store/question";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";


const UpdateQuestion = ({ question }) => {
    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user);
    const [content, setContent] = useState(question?.content)
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        const updateQuestion = {
            content: content
        }
        const updatedQuestion = await dispatch(updateOneQuestion(updateQuestion, question?.id))
        if (updatedQuestion) {
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
                {/* <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul> */}
                <textarea
                    rows="8"
                    cols="60"
                    placeholder={question?.content}
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

export default UpdateQuestion
