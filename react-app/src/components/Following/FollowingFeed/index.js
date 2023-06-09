import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import FollowingItem from "../FollowingItem";
import { getAllFollows } from "../../../store/follow";


const FollowingPage = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const currentUser = useSelector(state => state?.session?.user);
    const following = useSelector(state => state?.follow)
    useEffect(() => {
        dispatch(getAllFollows(currentUser.id))
    }, [dispatch,])


    if (!currentUser) history.push("/")


    return (
        <div>
            <h1>This page is under Construction!</h1>

        </div>
    )
}

export default FollowingPage
