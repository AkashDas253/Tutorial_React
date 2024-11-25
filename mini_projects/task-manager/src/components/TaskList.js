import React from 'react';
import TaskItem from './TaskItem';

const styles = {
  taskList: {
    marginTop: '20px',
  },
};

const TaskList = ({ tasks, removeTask, startEditTask }) => {
  return (
    <div style={styles.taskList}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          startEditTask={startEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;