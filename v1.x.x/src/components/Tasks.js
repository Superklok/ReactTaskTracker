import Task from './Task';

const Tasks = ({tasks, onDestroy}) => {
	return (
		<>
			{tasks.map((task) => (
				<Task key={task.id} task={task} 
				onDestroy={onDestroy} />
			))}
		</>
	);
}

export default Tasks;