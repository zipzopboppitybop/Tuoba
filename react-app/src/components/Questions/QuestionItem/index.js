import React from "react";
import { useSelector, useDispatch } from "react-redux"
import DeleteQuestion from "../DeleteQuestion"
import OpenModalButton from "../../OpenModalButton"
import UpdateQuestion from "../UpdateQuestion";
import { NavLink } from "react-router-dom";
import './QuestionItem.css'
import { getFollowsForUser } from "../../../store/follow";
import { getAllQuestions } from "../../../store/question";

const QuestionItem = ({ question }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user)
    const follower = question?.owner?.followers?.find(id => id === currentUser?.id)
    const initials = question?.owner?.username[0]
    const answers = Object.values(question.answers)

    console.log()

    const onSubmitFollow = async (e) => {
        e.preventDefault()

        dispatch(getFollowsForUser(question?.userId))
        dispatch(getAllQuestions())
    }

    return (
        <div>
            <div className="username-unfollow-follow">
                <div className="circle">{initials}</div>
                <span className="username">{question?.owner?.username}</span>

                {currentUser && follower && (currentUser?.id !== question?.userId) ? <button className="button-unfollow" onClick={onSubmitFollow}>unfollow</button> : currentUser && !follower && (currentUser?.id !== question?.userId) ? <button className="button-follow" onClick={onSubmitFollow}>Follow</button> : <></>}
            </div>
            <NavLink question={question} className='question-link' to={`/questions/${question.id}`}>
                {question?.content}
            </NavLink>
            <div className="question-answer">
                {answers[0]?.content}
            </div>


            {currentUser?.id === question?.userId ? (
                <div>
                    <OpenModalButton
                        buttonText={<><i className="fas fa-trash-alt"></i></>}
                        modalComponent={<DeleteQuestion questionId={question?.id} />}
                    />

                    <OpenModalButton
                        buttonText={<><i className="fa fa-pencil"></i></>}
                        modalComponent={<UpdateQuestion question={question} />}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default QuestionItem
