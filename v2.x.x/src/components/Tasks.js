import Task from './Task';

const Tasks = ({tasks, onDestroy, onToggle}) => {
	return (
		<>
			{tasks.map((task) => (
				<Task 
					key={task.id} 
					task={task} 
					onDestroy={onDestroy} 
					onToggle={onToggle} 
				/>
			))}
		</>
	);
}

export default Tasks;