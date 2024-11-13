import React from 'react';

const TaskItem = ({ task, deleteTask, toggleCompletion }) => {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded border ${
        task.completed ? 'bg-green-100' : 'bg-white'
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
          className="mr-2"
        />
        <span
          className={`${
            task.completed ? 'line-through text-gray-500' : ''
          } font-medium`}
        >
          {task.title} - <span className="text-xs">{task.priority}</span>
        </span>
      </div>
      <button
  onClick={() => deleteTask(task.id)}
  className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
>
  Delete
</button>

    </div>
  );
};

export default TaskItem;
