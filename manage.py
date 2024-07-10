import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect
from extensions import db
from flask_dotenv import DotEnv
import click

from models import BlogPost, Projects, Comments


app = Flask(__name__)
migrate = Migrate(app, db)

# Load environment variables
env = DotEnv()
env.init_app(app, verbose_mode=True)

# Set secret key from environment variable
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# Set database URI
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize CSRF protection
csrf = CSRFProtect(app)

# Initialize SQLAlchemy
db.init_app(app)


if __name__ == '__main__':
    app.run(debug=True)
