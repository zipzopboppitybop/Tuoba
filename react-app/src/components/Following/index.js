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
            <h1 className="following-page">
                This Page is under construction. We appreciate your patience!
            </h1>
        </div>
    )
}

export default FollowingPage
