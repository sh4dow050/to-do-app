import React from 'react';
import ToDo from './ToDo';
import CToDo from './CToDo';

const ToDoList = ({ toDos, setToDos, filteredToDos }) => {
	return (
		<div className='todos-container'>
			<ul className='todo-list'>
				{filteredToDos.map((todo) => (
					<ToDo
						text={todo.text}
						key={todo.id}
						toDos={toDos}
						todo={todo}
						setToDos={setToDos}
					/>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;
