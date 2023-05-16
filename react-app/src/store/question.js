const GET_QUESTIONS = "question/GET_QUESTIONS";

const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const getAllQuestions = () => async dispatch => {
    const response = await fetch('/api/questions')
    if (response.ok) {
        const questions = await response.json()
        dispatch(getQuestions(questions))
    }
}

export default function questionsReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_QUESTIONS:
            newState = {}
            action.questions.forEach((question) => newState[question.id] = question)
            return newState
        default:
            return state
    }
}
