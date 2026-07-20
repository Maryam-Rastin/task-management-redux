# Task Management App

A task management application built with React and Redux Toolkit that helps users organize, track, and manage tasks efficiently. The application allows users to create tasks, update their status, and filter them based on progress, providing a streamlined workflow management experience.

Live demo: https://maryam-rastin.github.io/task-management-redux/

## Overview

Task Management App is a productivity-focused web application designed to help users organize daily tasks and monitor progress. Users can categorize tasks into different stages of completion and quickly filter tasks through a dropdown menu.

The application leverages Redux Toolkit for centralized state management, ensuring predictable state updates and efficient data handling across the application.

This project demonstrates modern React development practices, state management patterns, reusable component architecture, and responsive user interface design.

## Features

* Create new tasks
* Update task status
* Delete tasks
* Track task progress
* Filter tasks by status
* View all tasks in a single dashboard
* Responsive design for desktop and mobile devices
* Centralized state management with Redux Toolkit

## Task Status Categories

Tasks can be organized into the following categories:

* All Tasks
* To Do
* In Progress
* Completed

Users can quickly switch between categories using a dropdown filter to focus on relevant tasks.

## Tech Stack

### Frontend

* React 19
* JavaScript (ES6+)

### State Management

* Redux Toolkit
* React Redux

### Styling

* Tailwind CSS
* PostCSS
* Autoprefixer

### Utilities

* UUID

## Screenshots

> Add screenshots of the application here.

## Installation

Clone the repository:

```bash id="70ewrq"
git clone https://github.com/Maryam-Rastin/task-management-redux.git
```

Navigate to the project directory:

```bash id="k4jy6k"
cd task-management-redux
```

Install dependencies:

```bash id="97g81o"
npm install
```

Start the development server:

```bash id="1yxw7v"
npm start
```

The application will run locally at:

```text id="of9f81"
http://localhost:3000
```

## Build for Production

```bash id="s3sgl5"
npm run build
```

## Project Structure

```text id="i8xj5p"
src/
├── app/
├── features/
├── components/
├── store/
├── utils/
├── App.js
└── index.js
```

## Technical Highlights

### Redux Toolkit State Management

Implemented centralized state management using Redux Toolkit to manage:

* Task creation
* Task updates
* Task deletion
* Task filtering
* Status management

### Dynamic Filtering

Built a dropdown-based filtering system that dynamically updates the displayed task list based on user-selected categories.

### Unique Task Management

Utilized UUID to generate unique identifiers for each task, ensuring reliable task tracking and updates.

### Component-Based Architecture

Created reusable React components to improve maintainability, scalability, and code organization.

## Challenges & Solutions

### Challenge: Managing Shared State Across Components

Task information needed to remain synchronized across multiple UI components.

### Solution

Implemented Redux Toolkit to centralize application state, ensuring consistent updates and reducing unnecessary prop drilling.

### Challenge: Dynamic Task Filtering

Users need a quick way to focus on specific task categories without navigating away from the page.

### Solution

Developed a filtering system that instantly updates displayed tasks based on the selected status, improving usability and productivity.

## Learning Outcomes

This project strengthened my understanding of:

* Redux Toolkit fundamentals
* React state management patterns
* CRUD application development
* Component-driven architecture
* Dynamic filtering logic
* Tailwind CSS styling
* Frontend application structure

## Future Improvements

* Drag-and-drop task management
* Due dates and reminders
* Task priority levels
* User authentication
* Persistent data storage
* Dark mode support
* Search functionality
* Team collaboration features

## What I Learned

Through this project, I gained practical experience building a state-driven React application using Redux Toolkit. I learned how to manage complex application state, implement dynamic filtering systems, structure scalable React projects, and create responsive user interfaces that improve productivity.

## Author

**Maryam Rastin**

GitHub: https://github.com/Maryam-Rastin

## License

This project is available under the MIT License.