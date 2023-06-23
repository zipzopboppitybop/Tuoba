import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import FollowingItem from "../FollowingItem";
import { getUserFollowing } from "../../../store/follow";
import "./FollowingFeed.css";

const FollowingPage = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const currentUser = useSelector(state => state?.session?.user);
    const following = useSelector(state => state?.follows)
    useEffect(() => {
        dispatch(getUserFollowing(currentUser.id))
    }, [dispatch, currentUser.id])

    if (!currentUser) history.push("/")

    return (
        <div className="following-list">
            <ul className="stuff">
                {Object.values(following).map(follow => (
                    <li className="following-item" key={follow.id}>
                        <FollowingItem follow={follow} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FollowingPage
