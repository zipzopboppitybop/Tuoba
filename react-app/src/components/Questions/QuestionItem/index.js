import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import DeleteQuestion from "../DeleteQuestion"
import OpenModalButton from "../../OpenModalButton"
import UpdateQuestion from "../UpdateQuestion";
import { NavLink } from "react-router-dom";
import './QuestionItem.css'
import SingleQuesiton from "../SingleQuestion";

const QuestionItem = ({ question }) => {
    const currentUser = useSelector(state => state?.session?.user)

    return (
        <div>
            {question?.owner?.username}
            <NavLink question={question} className='question-link' to={`/questions/${question.id}`}>
                {question?.content}
            </NavLink>

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
