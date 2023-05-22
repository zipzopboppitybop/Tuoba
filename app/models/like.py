from .db import db, environment, SCHEMA, add_prefix_for_prod

likes = db.Table(
    "likes",
    db.Column(
        "userId",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
        primary_key=True
    ),
    db.Column(
        "answerId",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("answers.id")),
        primary_key=True
    )
)

if environment == "production":
    likes.schema = SCHEMA
