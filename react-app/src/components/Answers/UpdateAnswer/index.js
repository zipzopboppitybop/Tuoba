import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOneAnswer } from "../../../store/answer";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";


const UpdateAnswer = ({ answer }) => {
    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user);
    const [content, setContent] = useState(answer?.content)
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        const updateAnswer = {
            content: content
        }
        const updatedAnswer = await dispatch(updateOneAnswer(updateAnswer, answer?.id))
        if (updatedAnswer) {
            closeModal();
            // dispatch(getOneQuestion(id))
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
                    placeholder={answer?.content}
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

export default UpdateAnswer
