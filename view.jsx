var Greeting = function Greeting(props) {
		return (
			<div>
				<label htmlFor="name">Change name to:</label>
				<input id="name" type="text" onChange={ props.changeName } defaultValue={ props.name } />
				<h1 className='greeting'>
					<span>Hello, { props.name }!</span>
				</h1>
				<button onClick={ props.cycleNames }>Change to Next Name</button>
			</div>
		);
	},
	App = React.createClass({
		getInitialState: function () {
			return {
				currentName: 'Ben',
				names: ['Kevin', 'Satish', 'Justin', 'Ben'],
				index: 0
			}
		},
		cycleNames: function () {
			var names = this.state.names,
				index = this.state.index;

			// loop back through the list if we are at the end
			index = index < names.length ? index : 0;

			// update the state with the new name
			// increment the index to the next value
			this.setState({
				currentName: names[index],
				index: index + 1
			});

		},
		changeName: function changeName(event) {
			this.setState({ currentName: event.target.value });
		},
		render: function render() {
			return (
				<Greeting cycleNames={ this.cycleNames } changeName={ this.changeName } name={ this.state.currentName } />
			);
		}
	});


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
