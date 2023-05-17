import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import DeleteQuestion from "../DeleteQuestion"
import OpenModalButton from "../../OpenModalButton"
import UpdateQuestion from "../UpdateQuestion";
import { useParams } from "react-router-dom";
import { getOneQuestion } from "../../../store/question";
import './SingleQuestion.css'

const SingleQuesiton = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const currentUser = useSelector(state => state?.session?.user);
    const question = useSelector(state => state.questions?.singleQuestion);
    const answers = useSelector(state => state.questions?.singleQuestion?.answers)

    useEffect(() => {
        dispatch(getOneQuestion(id))
    }, [dispatch])

    return (
        <div >
            <div className="question">
                {question?.owner?.username}
                <span className="question-content">{question?.content}
                </span>
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



            {answers?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))?.map(answer =>
            (
                <li key={answer?.id} className="answer-item">

                    {answer.content}
                </li>
            )
            )
            }

        </div>
    )
}

export default SingleQuesiton
