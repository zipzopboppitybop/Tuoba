import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import DeleteQuestion from "../DeleteQuestion"
import OpenModalButton from "../../OpenModalButton"

const QuestionItem = ({ question }) => {
    const currentUser = useSelector(state => state?.session?.user)

    return (
        <div>
            {question?.owner?.username}
            {question?.content}
            {currentUser?.id === question?.userId ? (
                <div>
                    <OpenModalButton
                        buttonText={<><i className="fas fa-trash-alt"></i></>}
                        modalComponent={<DeleteQuestion questionId={question?.id} />}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default QuestionItem
