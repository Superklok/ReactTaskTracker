const AddTask = () => {
	return (
		<form className='add-form'>
			<div className='form-control digital'>
				<label><h3>Task</h3></label>
				<input type='text' placeholder='Enter Task' />
			</div>
			<div className='form-control digital'>
				<label><h3>Date & Time</h3></label>
				<input type='text' placeholder='Add Date & Time' />
			</div>
			<div className='form-control form-control-check'>
				<label><h3>Set Reminder</h3></label>
				<input type='checkbox' />
			</div>
			<input type='submit' value='Save Task' 
			className='btn btn-block' />
		</form>
	);
}

export default AddTask;
