import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Finish coding React Task Tracker.',
			date: 'November 26th at 22:00',
			reminder: true,
		},
		{
			id: 2,
			text: 'Code React Candy Crush in the morning.',
			date: 'November 27th at 6:30',
			reminder: true,
		},
		{
			id: 3,
			text: 'Code React Crypto Stats all evening.',
			date: 'November 27th at 15:45',
			reminder: false,
		},
	]);
	
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
			<Header />
			<AddTask onAdd={addTask} />
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