import React from 'react';

const ToDo = ({ text, id, setToDos, toDos, todo }) => {
	// delete item
	const deleteItem = () => {
		setToDos(toDos.filter((item) => item.id !== todo.id));
	};

	// completed item
	const completedItem = () => {
		setToDos(
			toDos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !item.completed };
				} else {
					return item;
				}
			})
		);
	};

	return (
		<div className='todo'>
			<li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
				{text}
			</li>
			<div className='buttons'>
				<button onClick={completedItem}>
					<i className='fas fa-check'></i>
				</button>
				<button onClick={deleteItem}>
					<i className='fas fa-trash'></i>
				</button>
			</div>
		</div>
	);
};

export default ToDo;
