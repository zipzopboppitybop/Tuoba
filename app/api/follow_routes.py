from flask import Blueprint
from flask_login import current_user, login_required
from app.models import User, db

follow_routes = Blueprint('follow', __name__)

@follow_routes.route('/<int:user_id>')
@login_required
def follow_unfollow_a_user(user_id):
    """
    Query for following/unfollowing a user
    """
    followed = User.query.get(user_id) # user 2
    if not followed:
        return {"errors": "User does not exist"}

    follower = User.query.get(current_user.id) # user 1
    followed_followers = [user.id for user in followed.followers]

    if current_user.id == user_id:
        return {"errors": "You cannot follow yourself"}

    if follower.id in followed_followers:
        follower.following.remove(followed)
        db.session.commit()
        return {"Message": "Unfollowing"}


    followed.followers.append(follower)
    db.session.commit()
    return {"Message": "Following"}

@follow_routes.route('/<int:user_id>/following')
@login_required
def users_following(user_id):
    """
    Query for users following list
    """
    this_user = User.query.get(user_id)
    following = [user.to_dict() for user in this_user.following]
    return following
