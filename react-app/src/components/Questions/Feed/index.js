import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllQuestions } from '../../../store/question';
import QuestionItem from '../QuestionItem';
import "./Feed.css"


const Feed = () => {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions)

    useEffect(() => {
        dispatch(getAllQuestions())
    }, [dispatch,])

    return (
        <div className='feed'>
            <ul className='question-list'>
                {Object?.values(questions)?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))?.map(question =>
                (
                    <li key={question?.id} className="question-item">
                        <QuestionItem question={question} />
                    </li>
                )
                )
                }
            </ul>
        </div>
    )
}

export default Feed;
