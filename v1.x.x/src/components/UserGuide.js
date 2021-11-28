const UserGuide = () => {
	return (
		<div>
			<h2 className='guideTitle'>User Guide</h2>
			<h4 className='version'>Version 1.19.0</h4>
			<ul>
				<li>
					<p>Press the "Add" button to open the task input area.</p>
				</li>
				<li>
					<p>Once your task information has been entered, press the "Save Task" button.</p>
				</li>
				<li>
					<p>After you've finished adding your tasks, press the "Hide" button to close the task input area.</p>
				</li>
				<li>
					<p>Double-click on each saved task on the list to toggle the reminder indicator.</p>
				</li>
			</ul>
		</div>
	);
}

export default UserGuide;