import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";

const FollowingItem = ({ follow }) => {

    return (
        <div>
            <h1> {follow.id}</h1>
        </div>
    )
}

export default FollowingItem
