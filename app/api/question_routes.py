from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import User, Question, db
from .auth_routes import validation_errors_to_error_messages
from app.forms import QuestionForm

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
