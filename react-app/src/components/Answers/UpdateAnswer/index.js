import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOneAnswer } from "../../../store/answer";
import { getOneQuestion } from "../../../store/question";
import { useModal } from "../../../context/Modal";
import { useHistory, useParams } from "react-router-dom";


const UpdateAnswer = ({ answer }) => {
    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user);
    const [content, setContent] = useState(answer?.content)
    const [errors, setErrors] = useState([]);
    const questionId = useParams();

    const onSubmit = async (e) => {
        const updateAnswer = {
            content: content
        }
        const updatedAnswer = await dispatch(updateOneAnswer(updateAnswer, answer?.id))
        if (updatedAnswer) {
            closeModal();
            dispatch(getOneQuestion(questionId))
        } else {
            closeModal();
        }

    }
    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <div className="form-modal">
            <form className="form-modal">
                {/* <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul> */}
                <textarea
                    className="form-modal"
                    rows="8"
                    cols="60"
                    placeholder={answer?.content}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>
            <span>
                <button onClick={handleCancel}>Close</button>
            </span>
            <button onClick={onSubmit}>PostNow</button>
            <span className="update-something">If you try to edit answer less than 10 characters modal will close</span>
        </div>
    )
}

export default UpdateAnswer
