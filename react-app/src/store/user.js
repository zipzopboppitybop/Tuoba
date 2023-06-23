const GET_USER = "user/GET_USER";

const getUser = (user) => ({
    type: GET_USER,
    payload: user
})

export const getAUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`);
    if (response.ok) {
        const user = await response.json()
        dispatch(getUser(user))
    }
}

export default function usersReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_USER:
            newState = {}
            // console.log(action.payload)
            newState.user = action.payload
            return newState
        default:
            return state;
    }
}
