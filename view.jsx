var Greeting = function Greeting(props) {
		return (
			<div>
				<h1 className='greeting'>
					<span>Hello, { props.name }!</span>
				</h1>
				<button onClick={ props.changeName }>Change to Justin</button>
			</div>
		);
	},
	App = React.createClass({
		getInitialState: function () {
			return {
				name: 'Ben'
			}
		},
		cycleNames: function () {
			var self = this,
				names = ['Kevin', 'Satish', 'Justin', 'Ben'],
				index = 0;
			setInterval(function () {
				// loop back through the list if we are at the end
				index = index < names.length ? index : 0;

				// update the state with the new name
				self.setState({ name: names[index] });

				// increment the index to the next value
				index++;
			}, 1000);
		},
		changeName: function changeName() {
			this.setState({ name: 'Justin' });
		},
		componentDidMount: function () {
			// this.cycleNames();
		},
		render: function render() {
			return (
				<Greeting changeName={ this.changeName } name={ this.state.name } />
			);
		}
	});


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
