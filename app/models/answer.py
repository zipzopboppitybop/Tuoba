from .db import db, environment, SCHEMA, add_prefix_for_prod
from .like import likes


class Answer(db.Model):
    __tablename__ = "answers"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(500), nullable=True)
    userId = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    questionId = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('questions.id')), nullable=False)
    createdAt = db.Column(db.DateTime, default=db.func.now())
    updatedAt = db.Column(db.DateTime, default=db.func.now())

    answer_owner = db.relationship('User', back_populates='answers')
    answer_question = db.relationship('Question', back_populates='answers')

    #likes relationship
    user_likes = db.relationship(
        "User",
        secondary=likes,
        back_populates="answer_likes"
    )


    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'userId': self.userId,
            'questionId': self.questionId,
            'createdAt': self.createdAt,
            'owner': self.answer_owner.to_dict(),
            'updatedAt': self.updatedAt,
            'likes': [user.id for user in self.user_likes],
        }
