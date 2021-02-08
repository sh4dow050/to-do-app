import React, { useState, useRef } from 'react';

const Form = ({
	inputText,
	setInputText,
	setToDos,
	toDos,
	setPriority,
	priority,
	setSorting,
}) => {
	// ref
	const priorityRef = useRef(null);

	const changedText = (e) => {
		setInputText(e.target.value);
	};

	const checkPriority = (e) => {
		console.log(e.target.value);
		setPriority(e.target.value);
	};

	const changed = (e) => {
		console.log(e.target.datatype);
	};

	const submit = (e) => {
		e.preventDefault();
		setToDos([
			...toDos,
			{
				text: inputText,
				completed: false,
				id: Math.random() * 5000,
				priority: priority,
			},
		]);
		setInputText('');
	};

	// for sorting
	const sorting = (e) => {
		setSorting(e.target.value);
	};

	return (
		<form className='form' onSubmit={submit}>
			<div className='input'>
				<input type='text' onChange={changedText} value={inputText} required />
				<select name='priority' className='filter-todo' onClick={checkPriority}>
					<option value='none'>Select Priority</option>
					<option value='high'>High</option>
					<option value='low'>Low</option>
				</select>
				<button type='submit'>Add</button>
			</div>

			<div className='sorting'>
				<label htmlFor='sort'>Sort By:</label>
				<select name='sort' className='filter-todo' onChange={sorting}>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='remaining'>Remaining</option>
					<option value='high'>High Priority</option>
					<option value='low'>Low Priority</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
