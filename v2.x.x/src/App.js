import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false),
		  [tasks, setTasks]             = useState([
		{
			id: 1,
			text: 'Swap vehicles on Swingcars.',
			date: 'December 6th at 8:30am',
			reminder: true,
		},
		{
			id: 2,
			text: 'Publish an article on The Current Courant.',
			date: 'December 6th at 1:00pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Take a look at Jet Wheel Reel.',
			date: 'December 6th at 6:15pm',
			reminder: true,
		},
		{
			id: 4,
			text: 'Browse some concepts at TrevMorin.com',
			date: 'December 7th at 9:45am',
			reminder: false,
		},
		{
			id: 5,
			text: 'Pick out something to eat at Slider Piler.',
			date: 'December 7th at 12:00pm',
			reminder: true,
		},
		{
			id: 6,
			text: 'Analyze the market on React Crypto Stats.',
			date: 'December 8th at 2:30pm',
			reminder: false,
		},
		{
			id: 7,
			text: 'Check out the services at Superklok Labs.',
			date: 'December 9th at 10:00am',
			reminder: true,
		},
		{
			id: 8,
			text: 'Play React Candy Crush for a little while.',
			date: 'December 9th at 1:20pm',
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
			<Footer />
		</div>
	);
}

export default App;