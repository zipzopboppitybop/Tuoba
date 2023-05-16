const QuestionItem = ({ question }) => {
    return (
        <div>
            {question.owner.username}
            {question.content}
        </div>
    )
}

export default QuestionItem
