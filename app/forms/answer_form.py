from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class AnswerForm(FlaskForm):
    content = StringField('content', validators=[DataRequired(), Length(min=10, max=500, message='Answer must be between 1 to 500 characters')])
    userId = IntegerField('owner')
    questionId = IntegerField('question')
