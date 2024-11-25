import React from 'react';

const styles = {
  taskInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    flex: 1,
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },
};

const TaskInput = ({ task, setTask, addTask, isEditing, updateTask }) => {
  return (
    <div style={styles.taskInput}>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
      />
      {isEditing ? (
        <button style={styles.button} onClick={updateTask}>Update</button>
      ) : (
        <button style={styles.button} onClick={addTask}>Add</button>
      )}
    </div>
  );
};

export default TaskInput;