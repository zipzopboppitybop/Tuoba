const GET_FOLLOWERS = 'follow/getFollowers'
const GET_USER_FOLLOWING = 'follow/GET_USER_FOLLOWING';

const getFollowers = (follow) => {
    return {
        type: GET_FOLLOWERS,
        follow
    }
}

const getFollowing = (following) => {
    return {
        type: GET_USER_FOLLOWING,
        following
    }
}

export const getFollowsForUser = (userId) => async dispatch => {
    const response = await fetch(`/api/follow/${userId}`)
    if (response.ok) {
        const userFollows = await response.json()
        dispatch(getFollowers(userFollows))
    }
}

export const getUserFollowing = (userId) => async dispatch => {
    const response = await fetch(`/api/follow/${userId}/following`)
    if (response.ok) {
        const userFollowing = await response.json()
        dispatch(getFollowing(userFollowing))
    }
}

export default function followingReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_USER_FOLLOWING:
            newState = {}
            action.following.forEach((follow) => newState[follow.id] = follow)
            return newState

        default:
            return state;
    }
}
