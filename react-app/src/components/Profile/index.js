import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";

const Profile = () => {
    const { id } = useParams();
    const currentUser = useSelector(state => state?.session?.user);

    return (
        <div>
            <div className="user-profile">
                <button className="user-container user-profile-button lol">
                    <div className="user-circle bruh">{currentUser.username[0]}</div>
                </button>
                <span className="profile-header">{currentUser.username}</span>
                <br />
            </div>
        </div>
    )
}

export default Profile
