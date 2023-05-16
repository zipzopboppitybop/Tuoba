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
    return {'questions': [question.to_dict() for question in questions]}
