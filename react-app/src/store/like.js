const ANSWER_LIKE = 'answers/like'

const likeAnswer = (likes) => {
    return {
        type: ANSWER_LIKE,
        likes
    }
}

export const likeOneAnswer = (answerId) => async dispatch => {
    const response = await fetch(`/api/likes/${answerId}`)

    if (response.ok) {
        const answerLike = await response.json()
        dispatch(likeAnswer(answerLike))
    }
}
