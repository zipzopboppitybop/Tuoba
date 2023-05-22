from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import  db, Answer
from .auth_routes import validation_errors_to_error_messages
from app.forms import AnswerForm
from datetime import date

answer_routes = Blueprint('answers', __name__)



@answer_routes.route('/edit/<id>', methods=['PUT'])
@login_required
def edit_a_question(id):
    """
    Query for editing an existing answer the current user has created
    """
    form = AnswerForm()
    current_user_dict = current_user.to_dict()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        answer_to_edit = Answer.query.get(id)

        if not answer_to_edit:
            return {'Message': 'Answer does not exist'}

        answer_to_edit_dict = answer_to_edit.to_dict()

        if answer_to_edit_dict['userId'] == current_user_dict['id']:
            answer_to_edit.content = form.data['content']
            answer_to_edit.updatedAt = date.today()
            db.session.commit()
            returning_value = answer_to_edit.to_dict()
            return returning_value
        return {'Message': 'Unauthorized'}
    return {'errors': validation_errors_to_error_messages(form.errors)},401



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
