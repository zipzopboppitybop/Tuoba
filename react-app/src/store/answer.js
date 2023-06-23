const GET_ANSWERS = 'answer/GET_ANSWERS';
const CREATE_ANSWER = 'answer/CREATE_ANSWER';
const UPDATE_ANSWER = 'answer/UPDATE_ANSWER'
const DELETE_ANSWER = 'answer/DELETE_ANSWER';

const getAnswers = (answers) => {
    return {
        type: GET_ANSWERS,
        answers
    }
}

const updateAnswer = (answer) => {
    return {
        type: UPDATE_ANSWER,
        answer
    }
}

const createAnswer = (answer) => {
    return {
        type: CREATE_ANSWER,
        answer
    }
}

const deleteAnswer = (answerId) => {
    return {
        type: DELETE_ANSWER,
        answerId
    }
}

export const getAllAnswers = (id) => async (dispatch) => {
    const response = await fetch(`/api/questions/${id}/answers`);
    if (response.ok) {
        const answers = await response.json()
        dispatch(getAnswers(answers))
    }
}

export const createOneAnswer = (answer, questionId) => async (dispatch) => {
    const response = await fetch(`/api/questions/${questionId}/answers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answer)
    })
    if (response.ok) {
        const answer = await response.json();
        dispatch(createAnswer(answer));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occured. Please try again.']
    }
}

export const updateOneAnswer = (answer, answerId) => async (dispatch) => {
    const response = await fetch(`/api/answers/edit/${answerId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answer)
    })

    if (response.ok) {
        const res = await response.json()
        dispatch(updateAnswer(res))
        return res
    } else if (response.status < 500) {
        const data = await response.json();
        console.log(data)
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occured. Please try again.']
    }
}

export const deleteOneAnswer = (answerId) => async (dispatch) => {
    const response = await fetch(`/api/answers/delete/${answerId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteAnswer(answerId))
    }
}


export default function answersReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_ANSWERS:
            newState = {}
            action.answers.forEach((answer) => newState[answer.id] = answer)
            return newState
        case CREATE_ANSWER:
            newState = { ...state };
            newState[action.answer.id] = action.answer;
            return newState;
        case UPDATE_ANSWER:
            newState = { ...state }
            newState[action.answer.id] = action.answer
            return newState
        case DELETE_ANSWER:
            newState = { ...state }
            delete newState[action.answerId]
            return newState
        default:
            return state;
    }
}
