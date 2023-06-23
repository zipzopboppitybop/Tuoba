import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { getAUser } from "../../store/user";

const Profile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector(state => state?.users?.user);
    const currentUser = useSelector(state => state?.session?.user);
    useEffect(() => {
        dispatch(getAUser(id))
    }, [dispatch, id])

    return (
        <div>
            <div className="user-profile">
                <button className="user-container user-profile-button lol">
                    <div className="user-circle bruh">{user?.username[0]}</div>
                </button>
                <span className="profile-header">{user?.username}</span>
                <br />
            </div>
        </div>
    )
}

export default Profile
