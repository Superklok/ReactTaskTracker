import Task from './Task';

const Tasks = ({tasks, onDestroy, onToggle}) => {
	return (
		<>
			{tasks.map((task, index) => (
				<Task 
					key={index} 
					task={task} 
					onDestroy={onDestroy} 
					onToggle={onToggle} 
				/>
			))}
		</>
	);
}

export default Tasks;