var Todo = function Todo(props) {
		var isCompleted = props.todo.isCompleted ? 'completed' : '',
			todoId = props.todo.id;
		return (
			<li>
				<label htmlFor={todoId}>
					<input type="checkbox" id={todoId} name="completed" onChange={props.completeTodo}/>
					<span className={isCompleted}>{props.todo.content}</span>
				</label>
			</li>
		);
	},
	TodoList = function TodoList(props) {
		return (
			<ul>
				{ props.todos.map(function (todo, idx) { return <Todo todo={todo} completeTodo={props.completeTodo} key={'todo-' + idx } />; }) }
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
				todos: []
			}
		},
		addTodo: function (event) {
			var nameInput = event.currentTarget.name;

			event.preventDefault();

			this.setState({
				todos: this.state.todos.concat([{ content: nameInput.value, isCompleted: false, id: this.state.todos.length }])
			});

			nameInput.value = '';
		},
		completeTodo: function (event) {
			var todoId = event.target.id,
				checked = event.target.checked,
				todos = this.state.todos;

			todoId = todoId && parseInt(todoId, 10);
			todos[todoId].isCompleted = checked;

			this.setState({
				todos: todos
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
