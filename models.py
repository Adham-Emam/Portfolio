from datetime import datetime
from extensions import db


class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    img_url = db.Column(db.String())
    date_posted = db.Column(db.DateTime, nullable=False,
                            default=datetime.now)
    comments = db.relationship('Comments', backref='blogPost', lazy=True)


class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    img_url = db.Column(db.String())
    description = db.Column(db.String(500))
    project_url = db.Column(db.String(), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False,
                            default=datetime.now)


class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    comment = db.Column(db.String(500), nullable=False)
    blog_id = db.Column(
        db.Integer, db.ForeignKey('blog_post.id'), nullable=True)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.now)
