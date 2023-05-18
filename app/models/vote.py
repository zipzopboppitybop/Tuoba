from .db import db, environment, SCHEMA, add_prefix_for_prod


class Vote(db.Model):
    __tablename__ = "votes"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    answerId = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('answers.id')), nullable=False)
    upvote = db.Column(db.Boolean, nullable = False)
    createdAt = db.Column(db.DateTime, default=db.func.now())

    user = db.relationship('User', back_populates='votes')
    answer = db.relationship('Answer', back_populates='votes')

    def __repr__(self):
        if self.upvote == True:
            vote = 'Up'
        else:
            vote = 'Down'
        return '<Vote - {}, from {} for {}>'.format(vote, self.user.username, self.answer.id)
