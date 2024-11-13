import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title, priority);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        className="border border-gray-300 p-2 flex-grow rounded"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="border border-gray-300 p-2 rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
