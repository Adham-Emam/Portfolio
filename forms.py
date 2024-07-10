from flask_wtf import FlaskForm
from wtforms import StringField, EmailField, PasswordField, SubmitField, TextAreaField, URLField, HiddenField
from wtforms.validators import DataRequired, Length


class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()], render_kw={
        "placeholder": "Username"})
    password = PasswordField('Password', validators=[DataRequired()], render_kw={
        "placeholder": "Password"})
    submit = SubmitField('Login')


class MessagesForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()], render_kw={
        'placeholder': 'Name'
    })
    email = EmailField('Email', validators=[DataRequired()], render_kw={
        'placeholder': 'Email'
    })
    subject = StringField('Subject', render_kw={
        'placeholder': 'Subject'
    })
    content = TextAreaField('Message', validators=[DataRequired()], render_kw={
        'placeholder': 'Message'
    })


class ProjectsForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()], render_kw={
        'placeholder': 'Project Title'
    })
    img_url = URLField('Project Image', render_kw={
        'placeholder': 'Project Image'
    })
    description = StringField('Description', render_kw={
        'placeholder': 'Description'
    })
    project_url = URLField('Project_URL', validators=[DataRequired()], render_kw={
        'placeholder': 'Project URL'
    })
    submit = SubmitField('Add Project')


class BlogsForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()], render_kw={
        'placeholder': 'Blog Title'
    })
    img_url = URLField('IMG_URL', render_kw={
        'placeholder': 'Image URL'
    })
    content = TextAreaField('Content', validators=[DataRequired()], render_kw={
        'placeholder': 'Content'
    })
    submit = SubmitField('Add Blog')


class CommentsForm(FlaskForm):
    name = StringField('Name', validators=[Length(max=50)], render_kw={
        'placeholder': 'Username'
    })
    comment = TextAreaField('Comment', validators=[
                            DataRequired(), Length(max=500)], render_kw={'placeholder': 'Your Comment'})
    blog_post_id = HiddenField('Blog Post ID')
    project_id = HiddenField('Project ID')
    submit = SubmitField('Submit Comment')
