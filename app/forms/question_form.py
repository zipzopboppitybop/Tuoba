from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class QuestionForm(FlaskForm):
    content = StringField('content', validators=[DataRequired(), Length(min=1, max=130, message='Content must be between 1 to 130 characters')])
    userId = IntegerField('owner')
