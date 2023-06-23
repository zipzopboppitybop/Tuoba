import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllQuestions } from '../../store/question'
import { useLocation } from "react-router-dom"
import './ResultsPage.css'
import ResultsErrorMessage from './ResultsError'
import QuestionItem from '../Questions/QuestionItem'
import LoadingScreen from '../LoadingScreen'
function Results() {
  const dispatch = useDispatch()
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('query')
  const questions = useSelector(state => state?.questions)

  const [sortOrder, setSortOrder] = useState('desc');
  function compareQuestions(question1, question2) {
    const timestamp1 = new Date(question1.createdAt).getTime();
    const timestamp2 = new Date(question2.createdAt).getTime();
    if (sortOrder === 'asc') {
      return timestamp1 - timestamp2;
    } else {
      return timestamp2 - timestamp1;
    }
  }

  const sortedQuestions = Object.values(questions).sort(compareQuestions);
  function handleSortClick() {
    if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('asc');
    }
  }

  const filteredQuestions = sortedQuestions.filter(question =>
    (question?.content?.toLowerCase())?.includes(query.toLowerCase()) ||
    (question?.owner?.username?.toLowerCase()?.includes(query.toLowerCase()))
  )

  useEffect(() => {
    dispatch(getAllQuestions())

  }, [dispatch, JSON.stringify(filteredQuestions)])

  if (query.length === 0 || filteredQuestions.length === 0) return <ResultsErrorMessage />


  return (
    <div className='results-of-search'>
      <div className='sort-container'>
        <div className='sort-and-results'>
          <h2 className='res'>Results for <strong>{query}</strong> </h2>
        </div>
      </div>
      <div className='feed'>
        <ul className='question-list'>
          {
            filteredQuestions.map(question => (
              <li key={question?.id} className="question-item">
                <QuestionItem question={question} />
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default Results
