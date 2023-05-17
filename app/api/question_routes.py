from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import User, Question, db
from .auth_routes import validation_errors_to_error_messages
from app.forms import QuestionForm
from datetime import date

question_routes = Blueprint('questions', __name__)


@question_routes.route('/')
# @login_required
def questions():
    """
    Query for all questions and returns them in a list of questions dictionaries
    """
    questions = Question.query.all()
    return_list = []
    for question in questions:
        question_dict = question.to_dict()
        return_list.append(question_dict)
    return return_list



@question_routes.route('/create', methods=['POST'])
@login_required
def create_a_question():
    """
    Query for creating a question and returning it in a dictionary
    """
    form = QuestionForm()
    current_user_dict = current_user.to_dict()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_question = Question(
            content=form.data['content'],
            userId=current_user_dict['id']
        )
        db.session.add(new_question)
        db.session.commit()
        return {"Successfully Created Question": new_question.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@question_routes.route('/edit/<id>', methods=['PUT'])
@login_required
def edit_a_question(id):
    """
    Query for editing an existing question the current user has created
    """
    form = QuestionForm()
    current_user_dict = current_user.to_dict()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        question_to_edit = Question.query.get(id)

        if not question_to_edit:
            return {'Message': 'Question does not exist'}

        question_to_edit_dict = question_to_edit.to_dict()

        if question_to_edit_dict['userId'] == current_user_dict['id']:
            question_to_edit.content = form.data['content']
            question_to_edit.userId = current_user_dict['id']
            question_to_edit.updatedAt = date.today()
            db.session.commit()
            returning_value = question_to_edit.to_dict()
            return returning_value
        return {'Message': 'Unauthorized'}
    return {'errors': validation_errors_to_error_messages(form.errors)},401



@question_routes.route('/delete/<id>', methods=['DELETE'])
@login_required
def delete_a_question(id):
    """
    Query for question user has created and delete it
    """
    current_user_dict = current_user.to_dict()
    to_delete = Question.query.get(id)

    if not to_delete:
        return {"Message": "Question does not exist!"}

    to_delete_dict = to_delete.to_dict()

    if current_user_dict['id'] == to_delete_dict['userId']:
        db.session.delete(to_delete)
        db.session.commit()
        return {"Message": "Question Deleted Successfully"}
    return {"Message": "Unauthorized"}
