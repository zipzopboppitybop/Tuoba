import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";


const FollowingPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const currentUser = useSelector(state => state?.session?.user);

    console.log(currentUser)

    return (
        <div>
            <ul>
                {Object.values(currentUser.following).map((follow) => (
                    <li key={follow}>
                        {follow}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FollowingPage
