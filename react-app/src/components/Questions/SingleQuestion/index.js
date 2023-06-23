import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { getOneQuestion } from "../../../store/question";
import { getAllAnswers } from "../../../store/answer";
import './SingleQuestion.css'
import CreateAnswer from "../../Answers/CreateAnswer";
import AnswerItem from "../../Answers/AnswerItem";
import { useHistory } from "react-router-dom";
import LoadingScreen from "../../LoadingScreen";
import UpdateDeleteQuestion from "../QuestionItem/UpdateDeleteQuestion";
import CreateAnswerModal from "../../Modals/CreateAnswerModal";


const SingleQuesiton = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const currentUser = useSelector(state => state?.session?.user);
    const question = useSelector(state => state.questions?.singleQuestion);
    const answers = useSelector(state => state.answers)

    useEffect(() => {
        dispatch(getOneQuestion(id))
        dispatch(getAllAnswers(id))
    }, [dispatch, id])

    if (!question) {
        return (
            <LoadingScreen />
        )
    }

    if (!currentUser) history.push("/");

    return (
        <div >
            <div className="question">
                <span className="question-content">{question?.content}
                </span>
                <div className="answer-edit">
                    {currentUser?.id ? (
                        <span>
                            <CreateAnswerModal buttonText={<><i className="fas fa-pen-square"> Answer</i></>} modalComponent={<CreateAnswer question={question} />}></CreateAnswerModal>
                        </span>

                    ) : (
                        <></>
                    )}
                    {currentUser?.id === question?.userId ? (
                        <div className="edit-delete-container lol">
                            <UpdateDeleteQuestion
                                user={currentUser}
                                question={question}
                            />
                        </div>
                    ) : (
                        <></>
                    )}

                </div>
            </div>
            <ul>
                {Object?.values(answers).sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))?.map(answer =>
                (
                    <li key={answer?.id} className="answer-item">
                        <AnswerItem answer={answer} question={question} />
                    </li>
                )
                )
                }
            </ul>
        </div>
    )
}

export default SingleQuesiton
