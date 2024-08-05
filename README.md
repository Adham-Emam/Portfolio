# Adham's Portfolio

Welcome to my portfolio project! This project showcases my skills and expertise in web development. It includes a blog application with features such as posting articles, commenting, and more. The project is built using modern web technologies and is designed to demonstrate my proficiency in both frontend and backend development.

## Core Technologies Used

### Backend

- **Django**: A high-level Python web framework that enables rapid development of secure and maintainable websites. It is used for creating the backend of this project, including the API endpoints and administrative panel.
- **Django REST Framework**: A powerful and flexible toolkit for building Web APIs. It is used to create the RESTful API endpoints for the blog and comments functionality.
- **SQLite**: A lightweight database engine used for development and testing. It stores the blog posts and comments data.

### Frontend

- **React**: A JavaScript library for building user interfaces. It is used to create the dynamic and interactive frontend of the portfolio project.
- **Vite**: A modern build tool that provides a fast development experience for React projects. It is used as the build tool for this project.
- **CSS**: Used for styling the components and pages of the project, including custom styles and responsive design elements.
- **Font Awesome**: An icon toolkit used to add icons to the user interface, such as social media icons and buttons.

## Features

- **Blog Posts**: Users can view, read, and interact with blog posts.
- **Comments**: Users can leave comments on blog posts and view existing comments.
- **Admin Panel**: An admin interface powered by Django to manage blog posts and comments.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Adham-Emam/Portfolio.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Portfolio
   ```

3. **Set Up the Backend**:

   - **Create a Virtual Environment**:

     ```bash
     python -m venv .venv
     ```

   - **Activate the Virtual Environment**:

     On Windows:

     ```bash
     .venv\Scripts\activate
     ```

     On macOS/Linux:

     ```bash
     source .venv/bin/activate
     ```

   - **Install Requirements**:

     ```bash
     pip install -r requirements.txt
     ```

   - **Run Migrations**:

     ```bash
     python manage.py migrate
     ```

   - **Start the Django Development Server**:

     ```bash
     python manage.py runserver
     ```

4. **Set Up the Frontend**:

   - **Navigate to the Frontend Directory**:

     ```bash
     cd frontend
     ```

   - **Install Dependencies**:

     ```bash
     npm install
     ```

   - **Start the Development Server**:

     ```bash
     npm run dev
     ```

## Deployment

For deployment on platforms like PythonAnywhere or any other hosting service, follow the specific deployment instructions provided by the hosting service. Ensure that you configure the environment variables and other deployment settings as needed.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your proposed changes.

## Contact

For any questions or feedback, please reach out to [adhamh372002@gmail.com](mailto:adhamh372002@gmail.com).
