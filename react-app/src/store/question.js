const GET_QUESTIONS = "question/GET_QUESTIONS";
const CREATE_QUESTION = "question/CREATE_QUESTION";

const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

const createQuestion = (question) => {
    return {
        type: CREATE_QUESTION,
        question
    }
}

export const getAllQuestions = () => async (dispatch) => {
    const response = await fetch('/api/questions')
    if (response.ok) {
        const questions = await response.json()
        dispatch(getQuestions(questions))
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

export default function questionsReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_QUESTIONS:
            newState = {}
            action.questions.forEach((question) => newState[question.id] = question)
            return newState
        case CREATE_QUESTION:
            newState = { ...state };
            newState[action.question.id] = action.question;
            return newState;
        default:
            return state;
    }
}
