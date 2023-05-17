from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class AnswerForm(FlaskForm):
    content = StringField('content', validators=[DataRequired(), Length(min=1, max=500, message='Content must be between 1 to 500 characters')])
    userId = IntegerField('owner')
    questionId = IntegerField('question')
