import './styles/styles.scss';
// importing components
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const App = () => {
	// use state
	const [inputText, setInputText] = useState('');
	const [priority, setPriority] = useState('');
	const [toDos, setToDos] = useState([]);
	const [sorting, setSorting] = useState('all');
	const [filteredToDos, setFilteredToDos] = useState([]);

	// filtering the todo
	const filtering = () => {
		if (sorting == 'completed') {
			setFilteredToDos(toDos.filter((todo) => todo.completed === true));
		} else if (sorting == 'remaining') {
			setFilteredToDos(toDos.filter((todo) => todo.completed === false));
		} else if (sorting == 'high') {
			setFilteredToDos(toDos.filter((todo) => todo.priority === 'high'));
		} else if (sorting == 'low') {
			setFilteredToDos(toDos.filter((todo) => todo.priority === 'low'));
		} else {
			setFilteredToDos(toDos);
		}
	};

	// actual dom updating
	useEffect(() => {
		filtering();
	}, [toDos, sorting]);

	return (
		<div className='App'>
			{/* Nav Bar */}
			<div className='nav-bar'>
				<div className='logo'>To Do App</div>
			</div>

			<Form
				inputText={inputText}
				setInputText={setInputText}
				setToDos={setToDos}
				toDos={toDos}
				priority={priority}
				setPriority={setPriority}
				setSorting={setSorting}
			/>

			<ToDoList
				toDos={toDos}
				setToDos={setToDos}
				filteredToDos={filteredToDos}
			/>
		</div>
	);
};

export default App;
