var Todo = function Todo(props) {
		return (
			<li key={props.key}>{props.todo}</li>
		);
	},
	TodoList = function TodoList(props) {
		return (
			<ul>
				{ props.todos.map(function (todo, idx) { return <Todo todo={todo} key={'todo-' + idx } />; }) }
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
				todos: this.state.todos.concat([nameInput.value])
			});
			
			nameInput.value = '';
		},
		render: function render() {
			return (
				<div>
					<TodoForm inputValue={ this.state.inputValue } addTodo={ this.addTodo } />
					<TodoList todos={ this.state.todos } />
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
