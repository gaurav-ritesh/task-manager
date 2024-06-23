# Task Manager App

A simple Task Manager web application built with HTML, CSS, and JavaScript.

# Demo
You can view a live demo of the project [here](https://gaurav-ritesh.github.io/task-manager/).

## Features

- Add new tasks to the list.
- Mark tasks as completed.
- Remove tasks from the list.

## Technologies Used

- HTML
- CSS
- JavaScript

## Implementation

### HTML Structure (`index.html`)

The HTML file defines the structure of the Task Manager app, including input fields for adding tasks and an unordered list to display tasks.

### CSS Styling (`styles.css`)

The CSS file provides styles to make the app visually appealing and user-friendly. It includes styles for the container, input fields, buttons, task list items, and their interactions (e.g., hover effects).

### JavaScript Functionality (`script.js`)

The `script.js` file adds interactivity to the app through several key functions:

#### 1. `addTask(taskText)`

This function is responsible for adding a new task to the list. It creates a new `<li>` element containing a checkbox, task text (`<span>`), and a remove button. Event listeners are attached to the checkbox for marking tasks as completed and to the remove button for deleting tasks from the list.

#### 2. Event Listeners

Event listeners are set up to handle user interactions:

- **Adding a Task**: Listens for clicks on the "Add" button or Enter key press in the input field to call the `addTask` function.

#### 3. Initialization (`DOMContentLoaded`)

Ensures the DOM is fully loaded before executing JavaScript code. It initializes variables (`taskInput`, `addTaskButton`, `taskList`) and sets up event listeners.

### How to Use

- Enter a task in the input field and click "Add" or press Enter.
- Click on the checkbox to mark a task as completed.
- Click on the "Remove" button to delete a task from the list.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository.
2. Open `index.html` in your web browser.

## Acknowledgments

- This project was created as part of learning HTML, CSS, and JavaScript.