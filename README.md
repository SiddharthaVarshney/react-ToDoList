## Todo List Application

This is a basic Todo List application built using ReactJS for the frontend and FastAPI for the backend. The application allows users to create, update, and delete tasks in a simple and intuitive user interface.

To get started with the application, follow the instructions below:

### Prerequisites

Make sure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- Python 3

### Backend Setup

1. Open a terminal and navigate to the project's backend directory.
2. Install the required Python packages by running the following command:
   ```
   pip install fastapi[all]
   ```
3. Start the FastAPI server using the following command:
   ```
   uvicorn main:app --reload
   ```
   This will start the backend server at `http://localhost:8000`.

### Frontend Setup

1. Open another terminal and navigate to the project's frontend directory.

2. Start the frontend development server by running the following command:
   ```
   npm start
   ```
   This will start the React development server and open the application in your default browser at `http://localhost:3000`.

### Using the Todo List Application

1. Once the frontend server is up and running, you will see the Todo List application in your browser.
2. To add a new task, enter the task description in the input field at the top and press the Enter key or click the "Add Task" button.
3. The task will be added to the list below.
4. To mark a task as complete, click the button next to the task.
5. The application automatically saves your tasks, so you can close the browser and return to them later.

That's it! You now have a basic Todo List application up and running. You can expand upon this application by adding additional features or styling as per your requirements. Happy coding!
