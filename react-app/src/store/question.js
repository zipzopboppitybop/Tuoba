const GET_QUESTIONS = 'question/GET_QUESTIONS';
const GET_QUESTION = 'question/GET_QUESTION';
const CREATE_QUESTION = 'question/CREATE_QUESTION';
const UPDATE_QUESTION = 'question/UPDATE_QUESTION';
const DELETE_QUESTION = 'question/DELETE_QUESTION';

const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

const getQuestion = (question) => {
    return {
        type: GET_QUESTION,
        question
    }
}

const createQuestion = (question) => {
    return {
        type: CREATE_QUESTION,
        question
    }
}

const updateQuestion = (question) => {
    return {
        type: UPDATE_QUESTION,
        question
    }
}

const deleteQuestion = (questionId) => {
    return {
        type: DELETE_QUESTION,
        questionId
    }
}

export const getAllQuestions = () => async (dispatch) => {
    const response = await fetch('/api/questions')
    if (response.ok) {
        const questions = await response.json()
        dispatch(getQuestions(questions))
    }
}

export const getOneQuestion = (id) => async (dispatch) => {
    const response = await fetch(`/api/questions/${id}`)
    if (response.ok) {
        const question = await response.json()
        dispatch(getQuestion(question))
    }
}

export const createOneQuestion = (question) => async (dispatch) => {
    const response = await fetch('/api/questions/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(question)
    })
    if (response.ok) {
        const question = await response.json();
        dispatch(createQuestion(question));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occured. Please try again.']
    }
}

export const updateOneQuestion = (question, questionId) => async (dispatch) => {
    const response = await fetch(`/api/questions/edit/${questionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(question)
    })

    if (response.ok) {
        const res = await response.json()
        dispatch(updateQuestion(res))
        return res
    }
}

export const deleteOneQuestion = (questionId) => async (dispatch) => {
    const response = await fetch(`/api/questions/delete/${questionId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteQuestion(questionId))
    }
}

export default function questionsReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_QUESTIONS:
            newState = {}
            action.questions.forEach((question) => newState[question.id] = question)
            return newState
        case GET_QUESTION:
            newState = {}
            newState.singleQuestion = action.question
            return newState
        case CREATE_QUESTION:
            newState = { ...state };
            newState[action.question.id] = action.question;
            return newState;
        case UPDATE_QUESTION:
            newState = { ...state }
            newState[action.question.id] = action.question
            return newState
        case DELETE_QUESTION:
            newState = { ...state }
            delete newState[action.questionId]
            return newState
        default:
            return state;
    }
}
