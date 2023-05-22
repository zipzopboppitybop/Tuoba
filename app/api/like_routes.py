from flask import Blueprint
from app.models import User, db, Answer
from flask_login import current_user, login_required

like_routes = Blueprint('likes', __name__)

@like_routes.route("/<id>")
@login_required
def like_unlike_post(id):
    answer = Answer.query.get(id)
    if not answer:
        return {"errors": "Answer does not exist!"}
    liker = User.query.get(current_user.id)
    liked_answers = [answer.id for answer in current_user.answer_likes]


    if liker.id == answer.userId:
        return {"errors": "You cannot like your own answer"}

    if answer.id in liked_answers:
        answer.user_likes.remove(liker)
        db.session.commit()
        return {"message": f"Answer {answer.id} was unliked by {liker.username}"}


    answer.user_likes.append(liker)
    db.session.commit()
    return {"message": f"Answer {answer.id} was liked by {liker.username}"}
