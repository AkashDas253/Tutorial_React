import React from 'react';

const styles = {
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  taskValue: {
    flex: 1,
  },
  button: {
    marginLeft: '10px',
  },
};

const TaskItem = ({ task, removeTask, startEditTask }) => {
  return (
    <div style={styles.taskItem}>
      <span style={styles.taskValue}>{task.value}</span>
      <button style={styles.button} onClick={() => startEditTask(task)}>Edit</button>
      <button style={styles.button} onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;