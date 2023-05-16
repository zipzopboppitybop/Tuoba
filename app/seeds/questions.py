from app.models import db, Question, environment, SCHEMA
from sqlalchemy.sql import text


def seed_questions():
    question1 = Question(
        content="What is a piccolo?",
        userId=1
    )
    question2 = Question(
        content="How do you tune a trumpet?",
        userId=2
    )
    question3 = Question(
        content="Why are smaller instruments louder than bigger ones?",
        userId=3
    )

    db.session.add(question1)
    db.session.add(question2)
    db.session.add(question3)
    db.session.commit()


def undo_questions():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.questions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM questions"))

    db.session.commit()
