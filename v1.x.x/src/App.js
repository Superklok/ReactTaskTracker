import {useState, useEffect} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false),
		  [tasks, setTasks]             = useState([]);
	
	// Populate tasks
	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();

			setTasks(tasksFromServer);
		}
		getTasks();
	}, []);

	// Fetch tasks from JSON server
	const fetchTasks = async () => {
		const res  = await fetch('http://localhost:6187/tasks'),
			  data = await res.json();
		
		return data;
	}

	// Fetch task
	const fetchTask = async (id) => {
		const res  = await fetch(`http://localhost:6187/tasks/${id}`),
			  data = await res.json();
		
		return data;
	}

	// Add new task
	const addTask = async (task) => {
		const res = await fetch('http://localhost:6187/tasks', {
						method: 'POST',
						headers: {
							'Content-type': 'application/json',
						},
						body: JSON.stringify(task),
					}),
			 data = await res.json();
		
		setTasks([...tasks, data]);
	}

	// Task destruction
	const destroyTask = async (id) => {
		await fetch(`http://localhost:6187/tasks/${id}`, {
			method: 'DELETE'
		});
		setTasks(tasks.filter((task) => task.id !== id));
	}

	// Toggle reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id),
			  updatedTask  = {...taskToToggle, reminder: !taskToToggle.reminder},
			  res          = await fetch (`http://localhost:6187/tasks/${id}`, {
								 method: 'PUT',
								 headers: {
									 'Content-type': 'application/json'
								 },
								 body: JSON.stringify(updatedTask),
							 }),
			 		  data = await res.json();

		setTasks(
			tasks.map((task) => task.id === id 
			? {...task, reminder: data.reminder} : task));
	}

	return (
		<div className="container">
			<Header 
				onAdd={() => setShowAddTask(!showAddTask)} 
				showAdd={showAddTask} 
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? 
			<Tasks 
				tasks={tasks}
				onDestroy={destroyTask} 
				onToggle={toggleReminder} 
			/> : 
			<h3>Your schedule's clear! What's next on the agenda?</h3>}
		</div>
	);
}

export default App;