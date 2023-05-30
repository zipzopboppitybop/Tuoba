from app.models import db, Question, environment, SCHEMA
from sqlalchemy.sql import text
import datetime
import random

def random_date(start, end):
    return start + datetime.timedelta(
        seconds=random.randint(0, int((end - start).total_seconds()))
        )

start_date = datetime.datetime(2022, 1, 1, 0, 0, 0)
end_date = datetime.datetime(2023, 5, 12)


def seed_questions():
    question1 = Question(
        content="What is a piccolo?",
        userId=1
    )
    question2 = Question(
        content="How much does a tuba weigh?",
        userId=2
    )
    question3 = Question(
        content="Why are smaller instruments louder than bigger ones?",
        userId=3
    )
    question4 = Question(
        content="What was the first instrument?",
        userId=6
    )
    question5 = Question(
        content="How did they make the first trumpet?",
        userId=5,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question6 = Question(
        content="How long does it take to learn an instrument?",
        userId=13,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question7 = Question(
        content="Is the piano a hard instrument to learn?",
        userId=4,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question8 = Question(
        content="How many instruments could a person learn?",
        userId=7,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question9 = Question(
        content="When was hip hop invented?",
        userId=4,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question10 = Question(
        content="Why was rock hated before?",
        userId=11,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question11 = Question(
        content="Why does rock sound different than it did 60 years ago?",
        userId=12,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question12 = Question(
        content="Who is the greatest musician or band ever?",
        userId=1,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question13 = Question(
        content="How did Frank Sinatra lose his voice?",
        userId=13,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question14 = Question(
        content="Can Barack Obama sing?",
        userId=10,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question15 = Question(
        content="Can Bill Clinton play the saxophone?",
        userId=8,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question16 = Question(
        content="How many U.S. presidents were musicians?",
        userId=3,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question17 = Question(
        content="Was Johann Sebastian Bach deaf?",
        userId=9,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question18 = Question(
        content="How did Beethoven make music if he was deaf?",
        userId=6,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question19 = Question(
        content="How is the trombone unique?",
        userId=12,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question20 = Question(
        content="How many different instruments are there?",
        userId=11,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question21 = Question(
        content="How many different instruments are in a full orchestra?",
        userId=9,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question22 = Question(
        content="What is the difference between orchestra and symphony?",
        userId=5,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question23 = Question(
        content="What are instrument families?",
        userId=2,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question24 = Question(
        content="What song is number one in the world?",
        userId=7,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question25 = Question(
        content="Who owns the rights to classical music?",
        userId=8,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))
    question26 = Question(
        content="Who is the greatest composer of all time?",
        userId=10,
        createdAt=random_date(start_date, end_date), updatedAt=random_date(start_date, end_date))



    db.session.add(question1)
    db.session.add(question2)
    db.session.add(question3)
    db.session.add(question4)
    db.session.add(question5)
    db.session.add(question6)
    db.session.add(question7)
    db.session.add(question8)
    db.session.add(question9)
    db.session.add(question10)
    db.session.add(question11)
    db.session.add(question12)
    db.session.add(question13)
    db.session.add(question14)
    db.session.add(question15)
    db.session.add(question16)
    db.session.add(question17)
    db.session.add(question18)
    db.session.add(question19)
    db.session.add(question20)
    db.session.add(question21)
    db.session.add(question22)
    db.session.add(question23)
    db.session.add(question24)
    db.session.add(question25)
    db.session.add(question26)
    db.session.commit()


def undo_questions():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.questions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM questions"))

    db.session.commit()
