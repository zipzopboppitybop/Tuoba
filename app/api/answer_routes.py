from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import User, Question, db, Answer
from .auth_routes import validation_errors_to_error_messages
from app.forms import AnswerForm
from datetime import date

answer_routes = Blueprint('answers', __name__)

@answer_routes.route('/delete/<id>', methods=['DELETE'])
@login_required
def delete_an_answer(id):
    """
    Query for an answer user has created and delete it
    """
    current_user_dict = current_user.to_dict()
    to_delete = Answer.query.get(id)

    if not to_delete:
        return {"Message": "Answer does not exist!"}

    to_delete_dict = to_delete.to_dict()

    if current_user_dict['id'] == to_delete_dict['userId']:
        db.session.delete(to_delete)
        db.session.commit()
        return {"Message": "Answer Deleted Successfully"}
    return {"Message": "Unauthorized"}
