import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, priority) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false, priority }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Sort and filter tasks
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Define priority order
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          filter: 'blur(8px)',
          zIndex: -1,
        }}
      ></div>

      {/* Task Manager Content */}
      <div className="relative max-w-xl mx-auto bg-white p-4 shadow-md rounded backdrop-blur-none bg-opacity-80 pt-8">
        <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
        <SearchBar setSearchTerm={setSearchTerm} />
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
        />
      </div>
    </div>
  );
};

export default App;
