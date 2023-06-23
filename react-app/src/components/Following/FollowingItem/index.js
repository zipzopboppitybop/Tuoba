import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getUserFollowing, getFollowsForUser } from "../../../store/follow";

const FollowingItem = ({ follow }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user);
    const follower = follow.followers?.find(id => id === currentUser?.id)
    const initials = follow.username[0]

    const onSubmitFollow = async (e) => {
        e.preventDefault()

        dispatch(getFollowsForUser(follow.id))
        dispatch(getUserFollowing(currentUser.id))
    }

    useEffect(() => {
        dispatch(getUserFollowing(currentUser.id))
    }, [dispatch, currentUser.id])
    return (
        <div className="username-unfollow-follow following-item">
            <div className="circle">{initials}</div>
            <span className="username">{follow.username}</span>

            {currentUser && follower ? <button className="button-unfollow" onClick={onSubmitFollow}>unfollow</button> : currentUser && !follower ? <button className="button-follow" onClick={onSubmitFollow}>Follow</button> : <></>}
        </div>
    )
}

export default FollowingItem
