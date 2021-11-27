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

	// Add new task
	const addTask = (task) => {
		const id      = Math.floor(Math.random() * 10000) +1,
			  newTask = {id, ...task};
			  
		setTasks([...tasks, newTask]);
	}

	// Task destruction
	const destroyTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	}

	// Toggle reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) => task.id === id 
			? {...task, reminder: !task.reminder} : task));
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