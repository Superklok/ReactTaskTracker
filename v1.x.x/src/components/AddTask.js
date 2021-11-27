import {useState} from 'react';

const AddTask = ({onAdd}) => {
	const [text, setText]         = useState(''),
		  [date, setDate]         = useState(''),
		  [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!text) {
			alert('Please enter a new task before saving.');
			return;
		}
		onAdd({text, date, reminder});
		setText('');
		setDate('');
		setReminder(false);
	}

	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control digital'>
				<label><h3>Task</h3></label>
				<input 
					type='text' 
					placeholder='Enter Task'
					value={text} 
					onChange={(e) => setText(e.target.value)} 
				/>
			</div>
			<div className='form-control digital'>
				<label><h3>Date & Time</h3></label>
				<input 
					type='text' 
					placeholder='Add Date & Time'
					value={date} 
					onChange={(e) => setDate(e.target.value)} 
				/>
			</div>
			<div className='form-control form-control-check'>
				<label><h3>Set Reminder</h3></label>
				<input 
					type='checkbox'
					checked={reminder} 
					value={reminder} 
					onChange={(e) => setReminder(e.currentTarget.checked)} 
				/>
			</div>
			<input type='submit' value='Save Task' 
			className='btn btn-block' />
		</form>
	);
}

export default AddTask;
