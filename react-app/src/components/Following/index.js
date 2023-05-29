import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory } from "react-router-dom";


const FollowingPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const currentUser = useSelector(state => state?.session?.user);

    if (!currentUser) history.push("/")

    return (
        <div>
            {currentUser ? <ul>

                {Object.values(currentUser.following).map((follow) => (
                    <li key={follow}>
                        {follow}
                    </li>
                ))}
            </ul> : (
                <></>
            )}

        </div>
    )
}

export default FollowingPage
