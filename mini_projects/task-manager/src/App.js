import React, { useState, useEffect, useCallback } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
};

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const saveTasks = useCallback(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks, saveTasks]);

  const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { id: Date.now(), value: task }]);
      setTask('');
    }
  };

  const startEditTask = (task) => {
    setTask(task.value);
    setIsEditing(true);
    setCurrentTaskId(task.id);
  };

  const updateTask = () => {
    setTasks(tasks.map(t => (t.id === currentTaskId ? { id: t.id, value: task } : t)));
    setTask('');
    setIsEditing(false);
    setCurrentTaskId(null);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Task Manager</h1>
      <TaskInput
        task={task}
        setTask={setTask}
        addTask={addTask}
        isEditing={isEditing}
        updateTask={updateTask}
      />
      <TaskList tasks={tasks} removeTask={removeTask} startEditTask={startEditTask} />
    </div>
  );
}

export default App;