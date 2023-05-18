from app.models import db, Vote, environment, SCHEMA
from sqlalchemy.sql import text


def seed_votes():
    vote1 = Vote(
        userId=1,
        answerId=1,
        upvote=1

    )
    vote2 = Vote(
        userId=2,
        answerId=2,
        upvote=1
    )
    vote3 = Vote(
        userId=3,
        answerId=3,
        upvote=1
    )
    vote4 = Vote(
        userId=1,
        answerId=3,
        upvote=0
    )

    db.session.add(vote1)
    db.session.add(vote2)
    db.session.add(vote3)
    db.session.add(vote4)
    db.session.commit()


def undo_votes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.votes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM votes"))

    db.session.commit()
