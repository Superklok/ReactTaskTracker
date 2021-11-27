import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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
	
	// Task destruction
	const destroyTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	}

	return (
		<div className="container">
			<Header />
			{tasks.length > 0 ? <Tasks tasks={tasks}
			onDestroy={destroyTask} /> : 
			<h3>Your schedule's clear! What's next on the agenda?</h3>}
		</div>
	);
}

export default App;