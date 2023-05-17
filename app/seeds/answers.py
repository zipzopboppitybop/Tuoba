from app.models import db, Answer, environment, SCHEMA
from sqlalchemy.sql import text


def seed_answers():
    answer1 = Answer(
        content="A piccolo is a small flute and member of the woodwind family. The sound it produces is an octave higher than a standard flute. It's sometimes called the 'baby flute'.",
        userId=3,
        questionId=1
    )
    answer2 = Answer(
        content="A typical tuba is about 3 1/2 -feet high, has about 18 feet of tubing and weighs about 20 pounds.",
        userId=1,
        questionId=2
    )
    answer3 = Answer(
        content="Lower pitch sounds have longer wavelengths. Musical instruments are designed to resonate with the pitches they produce, meaning that music from an instrument has wavelengths that match the length of the instrument. This is why larger instruments have lower sounds.",
        userId=2,
        questionId=3
    )

    db.session.add(answer1)
    db.session.add(answer2)
    db.session.add(answer3)
    db.session.commit()


def undo_answers():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.answers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM answers"))

    db.session.commit()
