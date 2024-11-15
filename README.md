# Task Manager Application

## Overview
This project is a simple and interactive task management application built with React and styled using Tailwind CSS. The application allows users to manage tasks effectively by adding, deleting, marking tasks as completed, and setting priorities (High, Medium, Low). Tasks are persisted in local storage so that they remain available across page reloads.

### Features
- **Task Input**: Add tasks with a title and set a priority.
- **Task Deletion**: Remove tasks from the list.
- **Task Completion**: Mark tasks as completed/uncompleted.
- **Task Sorting**: Tasks are automatically sorted based on priority (High > Medium > Low).
- **Task Search**: Find tasks using a search bar.
- **UI Animations**: Smooth animations for adding and removing tasks.

---
# The setup and Launch process
### Prerequisites
- Node.js and npm installed on your machine.

### setup
npm create vite@latest
select React 
select Javascript 
Then setup tailwind css 

-------

# Assumptions Made During Development
- **Priority Levels**: Only three priority levels are supported (High, Medium, and Low). Tasks are sorted in descending order of priority by default.
- **Task Persistence**: Tasks are persisted using local storage, so they are available even after the page is refreshed.
- **User Interface**: The design is focused on simplicity, with minimalistic styling using Tailwind CSS and basic animations for a smooth user experience.
- **Animations**: Transitions are applied using the react-transition-group library to enhance the user experience when adding and removing tasks.

---------------

## screenshots 

  ![add task](https://github.com/user-attachments/assets/6a3a1b76-8637-4b63-81da-c597365054f7)

  ![completed task](https://github.com/user-attachments/assets/887073ec-79cb-4f6f-b293-e63c9862eea4)

  ![main view](https://github.com/user-attachments/assets/6d2272f2-e544-4585-ba12-18e734d94ec5) 

  ![search](https://github.com/user-attachments/assets/e20c624e-f81b-43b9-bfdc-27cc10dacbb9)

  






