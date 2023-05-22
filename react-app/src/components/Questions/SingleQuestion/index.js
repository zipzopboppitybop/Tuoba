import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import DeleteQuestion from "../DeleteQuestion"
import OpenModalButton from "../../OpenModalButton"
import UpdateQuestion from "../UpdateQuestion";
import { useParams } from "react-router-dom";
import { getOneQuestion } from "../../../store/question";
import { getAllAnswers } from "../../../store/answer";
import './SingleQuestion.css'
import CreateAnswer from "../../Answers/CreateAnswer";
import DeleteAnswer from "../../Answers/DeleteAnswer";
import UpdateAnswer from "../../Answers/UpdateAnswer";
import AnswerItem from "../../Answers/AnswerItem";


const SingleQuesiton = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const currentUser = useSelector(state => state?.session?.user);
    const question = useSelector(state => state.questions?.singleQuestion);
    const answers = useSelector(state => state.answers)

    useEffect(() => {
        dispatch(getOneQuestion(id))
        dispatch(getAllAnswers(id))
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
            <OpenModalButton buttonText={<><i className="fa fa-pen-square"></i></>} modalComponent={<CreateAnswer questionId={question?.id} />}></OpenModalButton>

            <ul>
                {Object?.values(answers).sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))?.map(answer =>
                (
                    <li key={answer?.id} className="answer-item">
                        <AnswerItem answer={answer} />
                    </li>
                )
                )
                }
            </ul>

        </div>
    )
}

export default SingleQuesiton
