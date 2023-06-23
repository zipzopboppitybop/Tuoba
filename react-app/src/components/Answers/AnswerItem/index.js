import React from "react";
import { useSelector, useDispatch } from "react-redux"
import OpenModalButton from "../../OpenModalButton";
import { getAllAnswers } from "../../../store/answer";
import DeleteAnswer from "../../Answers/DeleteAnswer";
import UpdateAnswer from "../../Answers/UpdateAnswer";
import { likeOneAnswer } from "../../../store/like";
import UpdateDeleteAnswer from "./UpdateDeleteAnswer";
import "./AnswerItem.css"

const AnswerItem = ({ answer, question }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user);
    const initials = answer?.owner?.username[0];
    const count = answer?.likes.length

    const onSubmitLike = async (e) => {
        e.preventDefault()

        dispatch(likeOneAnswer(answer?.id))
        dispatch(getAllAnswers(answer?.questionId))
    }

    return (
        <div className="answer-container">
            <div className="username-initials">
                <div className="circle">
                    {initials}
                    <span className="username-answer">
                        {answer?.owner?.username}
                    </span>
                </div>

            </div>

            <div className="answer-content">
                {answer?.content}
            </div>

            {currentUser?.id === answer?.userId ? (
                <div className="edit-delete-container answer-likes">
                    <span className="count">Likes
                        <span> &middot; {count}</span></span>
                    <UpdateDeleteAnswer
                        user={currentUser}
                        question={question}
                        answer={answer}
                    />
                </div>
            ) : (
                <div className="edit-delete-container answer-likes">
                    <span className="count">
                        {currentUser && !answer?.likes?.find(id => id === currentUser?.id) && (currentUser?.id !== answer?.userId) ? <button className="like-button" onClick={onSubmitLike}><i className="far fa-heart"></i></button> : currentUser && answer?.likes?.find(id => id === currentUser?.id) && (currentUser?.id !== answer?.userId) ? <button className="unlike-button" onClick={onSubmitLike}><i className="fas fa-heart" ></i></button> : <></>}Likes
                        <span> &middot; {count}</span>

                    </span>
                </div>
            )}
        </div>

    )

}

export default AnswerItem;
