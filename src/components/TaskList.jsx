import React from 'react';
import TaskItem from './TaskItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './taskAnimations.css'; // Import custom CSS file for animations

const TaskList = ({ tasks, deleteTask, toggleCompletion }) => {
  // Sorting tasks by priority (High > Medium > Low)
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  const sortedTasks = [...tasks].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks available.</p>;
  }

  return (
    <TransitionGroup className="space-y-2">
      {sortedTasks.map((task) => (
        <CSSTransition key={task.id} timeout={300} classNames="fade">
          <TaskItem
            task={task}
            deleteTask={deleteTask}
            toggleCompletion={toggleCompletion}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TaskList;
