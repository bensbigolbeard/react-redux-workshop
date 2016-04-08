var Todo = function Todo(props) {
		var isCompleted = props.todo.isCompleted ? 'completed' : '',
			todoId = props.todo.id;
		return (
			<li>
				<label htmlFor={todoId}>
					<input type="checkbox"
						id={todoId}
						name="completed"
						onChange={props.completeTodo}
						checked={props.todo.isCompleted ? "checked" : ""} />
					<span className={isCompleted}>{props.todo.content}</span>
				</label>
			</li>
		);
	},
	TodoList = function TodoList(props) {
		return (
			<ul>
				{ props.todos.map(function (todo, idx) {
					return <Todo todo={todo} completeTodo={props.completeTodo} key={'todo-' + idx } />;
				}) }
			</ul>
		);
	},
	TodoForm = function TodoForm(props) {
		return (
			<form onSubmit={ props.addTodo }>
				<label htmlFor="name">Change name to:</label>
				<input id="name" type="text" />
				<input type="submit" defaultValue="Add Todo" />
			</form>
		);
	},
	TodoComponent = React.createClass({
		getInitialState: function () {
			return {
				todos: store.getState()
			}
		},
		addTodo: function (event) {
			var nameInput = event.currentTarget.name;

			event.preventDefault();

			store.dispatch({
				type: 'ADD_TODO',
				title: nameInput.value
			});

			this.setState({
				todos: store.getState()
			});

			nameInput.value = '';
		},
		completeTodo: function (event) {
			var todoId = event.target.id,
				isChecked = event.target.checked;

			todoId = todoId && parseInt(todoId, 10);

			store.dispatch({
				type: 'COMPLETE_TODO',
				id: todoId,
				isCompleted: isChecked
			});

			this.setState({
				todos: store.getState()
			});
		},
		render: function render() {
			return (
				<div>
					<TodoForm inputValue={ this.state.inputValue } addTodo={ this.addTodo } />
					<TodoList todos={ this.state.todos } completeTodo={this.completeTodo} />
				</div>
			);
		}
	}),
	App = function App() {
		return (
			<TodoComponent />
		);
	};


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
