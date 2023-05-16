from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Question

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
