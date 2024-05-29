import os
from datetime import datetime
from flask import Flask, render_template, url_for, request, flash, session, redirect
from sqlalchemy.sql.expression import func
import markdown
from forms import LoginForm, MessagesForm, BlogsForm, ProjectsForm, CommentsForm
from models import Messages, Projects, BlogPost, Comments
from flask_migrate import Migrate
from extensions import db
from functools import wraps
from manage import app


# Load admin credentials from .env file
ADMIN_LOGIN_USERNAME = os.getenv('ADMIN_LOGIN_USERNAME')
ADMIN_LOGIN_PASSWORD = os.getenv('ADMIN_LOGIN_PASSWORD')

FIRST_REQUEST = True


@app.before_request
def create_tables():
    global FIRST_REQUEST
    if FIRST_REQUEST:
        db.create_all()
        FIRST_REQUEST = False


@app.errorhandler(403)
@app.errorhandler(404)
@app.errorhandler(405)
@app.errorhandler(500)
def error_handler(error):
    # Render the same template for all errors
    return render_template('error.html', error=error), error.code


# Function to format the time difference
def format_time_difference(td):
    days = td.days
    years = days // 365
    weeks = days // 7
    seconds = td.seconds
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60

    if years > 0:
        return f"{years}y"
    elif weeks > 0:
        return f"{weeks}w"
    elif days > 0:
        return f"{days}d"
    elif hours > 0:
        return f"{hours}h"
    elif minutes > 0:
        return f"{minutes}min"
    else:
        return f"{seconds}s"


@app.route('/')
def home():
    return render_template('index.html')


months = {
    '01': "January",
    '02': "February",
    '03': "March",
    '04': "April",
    '05': "May",
    '06': "June",
    '07': "July",
    '08': "August",
    '09': "September",
    '10': "October",
    '11': "November",
    '12': "December"
}


@app.route('/projects')
def projects():
    projects = Projects.query.all()
    for project in projects:

        # Format date_posted
        date_posted = str(project.date_posted)
        month_name = months[date_posted[5:7]]

        # Set time Posted
        project.date_posted = f'{month_name} {date_posted[8:10]}, {date_posted[0:4]}'

    return render_template('projects.html', projects=projects)


@app.route('/blog')
def blog():
    blogs = BlogPost.query.all()
    for blog in blogs:
        blog.date_posted = format_time_difference(
            datetime.now() - blog.date_posted)

        # Convert markdown to html
        blog.content = markdown.markdown(blog.content)

    return render_template('blog.html', blogs=blogs)


@app.route('/blog_page/<int:blog_id>', methods=['GET', 'POST'])
def blog_page(blog_id):
    blog = BlogPost.query.get(blog_id)

    # Fetch 3 random blog posts excluding the specified blog post ID
    random_blogs = BlogPost.query.filter(
        BlogPost.id != blog_id).order_by(func.random()).limit(4).all()

    # Format date_posted
    date_posted = str(blog.date_posted)
    month_name = months[date_posted[5:7]]
    time_difference = format_time_difference(
        datetime.now() - blog.date_posted)

    # Set time Posted
    blog_date_posted = f'{month_name} {date_posted[8:10]}, {date_posted[0:4]},  {time_difference}'

    # Convert markdown to html
    blog.content = markdown.markdown(blog.content)

    form = CommentsForm(blog_id=blog_id)
    if form.validate_on_submit():
        name = form.name.data if form.name.data else 'Anonymous User'
        new_comment = Comments(name=name,
                               comment=form.comment.data, blog_id=blog_id)
        db.session.add(new_comment)
        db.session.commit()
        return redirect(url_for('blog_page', blog_id=blog_id))

    comments = Comments.query.filter_by(blog_id=blog_id)

    return render_template('blog_page.html', blog=blog, date_posted=blog_date_posted, random_blogs=random_blogs, form=form, comments=comments)


@ app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = MessagesForm()
    if form.validate_on_submit():
        name = form.name.data
        email = form.email.data
        subject = form.subject.data
        content = form.content.data

        message = Messages(name=name, email=email,
                           subject=subject, content=content)
        db.session.add(message)
        db.session.commit()
        flash('Income added successfully!', 'success')
        return redirect(url_for('contact'))
    return render_template('contact.html', form=form)


def login_required(f):
    @ wraps(f)
    def decorated_function(*args, **kwargs):
        if 'logged_in' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function


@ app.route('/admin', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        if username == ADMIN_LOGIN_USERNAME and password == ADMIN_LOGIN_PASSWORD:
            session['logged_in'] = True
            flash('Login successful!', 'success')
            return redirect(url_for('admin_dashboard'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template('admin_login.html', form=form)


@ app.route('/admin/dashboard')
@ login_required
def admin_dashboard():
    projects = Projects.query.all()
    blogs = BlogPost.query.all()
    messages = Messages.query.all()
    comments = Comments.query.all()
    return render_template('admin_dashboard.html', projects=projects, blogs=blogs, messages=messages, comments=comments)


@ app.route('/admin/add_project', methods=['GET', 'POST'])
@ login_required
def add_project():
    form = ProjectsForm()
    if form.validate_on_submit():
        title = form.title.data
        img_url = form.img_url.data
        description = form.description.data
        project_url = form.project_url.data

        project = Projects(title=title, img_url=img_url,
                           description=description, project_url=project_url)
        db.session.add(project)
        db.session.commit()
        return redirect(url_for('admin_dashboard'))
    return render_template('dashboard_form.html', title='Add New Project', form=form)


@ app.route('/admin/edit_project/<int:project_id>', methods=['GET', 'POST'])
@ login_required
def edit_project(project_id):
    project = Projects.query.get(project_id)
    form = ProjectsForm()

    if request.method == 'GET':
        form.title.data = project.title
        form.img_url.data = project.img_url
        form.description.data = project.description
        form.project_url.data = project.project_url

    if form.validate_on_submit():
        project.title = form.title.data
        project.img_url = form.img_url.data
        project.description = form.description.data
        project.project_url = form.project_url.data

        db.session.commit()
        return redirect(url_for('admin_dashboard'))
    return render_template('dashboard_form.html', title='Edit Project', form=form)


@ app.route('/admin/delete_project/<int:project_id>')
@ login_required
def delete_project(project_id):
    project = Projects.query.get(project_id)
    db.session.delete(project)
    db.session.commit()
    return redirect(url_for('admin_dashboard'))


@ app.route('/admin/add_blog', methods=['GET', 'POST'])
@ login_required
def add_blog():
    form = BlogsForm()
    if form.validate_on_submit():
        title = form.title.data
        img_url = form.img_url.data
        content = form.content.data

        blog = BlogPost(title=title, img_url=img_url, content=content)
        db.session.add(blog)
        db.session.commit()
        return redirect(url_for('admin_dashboard'))
    return render_template('dashboard_form.html', title='Add New Blog', form=form)


@ app.route('/admin/edit_blog/<int:blog_id>', methods=['GET', 'POST'])
@ login_required
def edit_blog(blog_id):
    blog = BlogPost.query.get(blog_id)
    form = BlogsForm()

    if request.method == 'GET':
        form.title.data = blog.title
        form.img_url.data = blog.img_url
        form.content.data = blog.content

    if form.validate_on_submit():
        blog.title = form.title.data
        blog.img_url = form.img_url.data
        blog.content = form.content.data

        db.session.commit()
        return redirect(url_for('admin_dashboard'))
    return render_template('dashboard_form.html', title='Edit Blog', form=form)


@ app.route('/admin/delete_blog/<int:blog_id>')
@ login_required
def delete_blog(blog_id):
    blog = BlogPost.query.get(blog_id)
    db.session.delete(blog)
    db.session.commit()
    return redirect(url_for('admin_dashboard'))


@ app.route('/admin/delete_message/<int:message_id>')
@ login_required
def delete_message(message_id):
    message = Messages.query.get(message_id)
    db.session.delete(message)
    db.session.commit()
    return redirect(url_for('admin_dashboard'))


@ app.route('/admin/delete_comment/<int:comment_id>')
@ login_required
def delete_comment(comment_id):
    comment = Comments.query.get(comment_id)
    db.session.delete(comment)
    db.session.commit()
    return redirect(url_for('admin_dashboard'))


@ app.route('/logout')
def logout():
    session.pop('logged_in', None)
    flash('You have been logged out.', 'success')
    return redirect(url_for('login'))


if __name__ == '__main__':
    app.run(debug=True)
