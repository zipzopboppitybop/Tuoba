from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class QuestionForm(FlaskForm):
    content = StringField('content', validators=[DataRequired(), Length(min=10, max=130, message='Question must be between 10 to 130 characters')])
    userId = IntegerField('owner')
