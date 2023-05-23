import React from "react";
import { useSelector, useDispatch } from "react-redux"
import OpenModalButton from "../../OpenModalButton";
import { getAllAnswers } from "../../../store/answer";
import DeleteAnswer from "../../Answers/DeleteAnswer";
import UpdateAnswer from "../../Answers/UpdateAnswer";
import { likeOneAnswer } from "../../../store/like";
import "./AnswerItem.css"

const AnswerItem = ({ answer }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user);
    const initials = answer?.owner?.username[0];


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

            {answer?.content}
            <div>
                {currentUser && !answer?.likes?.find(id => id === currentUser?.id) && (currentUser?.id !== answer?.userId) ? <button className="like-button" onClick={onSubmitLike}><i className="far fa-heart"></i></button> : currentUser && answer?.likes?.find(id => id === currentUser?.id) && (currentUser?.id !== answer?.userId) ? <button className="unlike-button" onClick={onSubmitLike}><i className="fas fa-heart" ></i></button> : <></>}
            </div>

            {currentUser?.id === answer?.userId ? (
                <div>
                    <OpenModalButton
                        buttonText={<><i className="fas fa-trash-alt"></i></>}
                        modalComponent={<DeleteAnswer answerId={answer?.id} />}
                    />
                    <OpenModalButton
                        buttonText={<><i className="fa fa-pencil"></i></>}
                        modalComponent={<UpdateAnswer answer={answer} />}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>

    )

}

export default AnswerItem;
