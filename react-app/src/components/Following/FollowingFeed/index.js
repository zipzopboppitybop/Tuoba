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

    console.log(following)

    return (
        <div>
            <ul>
                {Object?.values(following.following)?.map(follow => (
                    <li key={follow.id}>
                        <FollowingItem follow={follow} />
                    </li>

                )

                )}

            </ul>

        </div>
    )
}

export default FollowingPage
