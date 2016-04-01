var Greeting = function Greeting(props) {
		return (
			<h1 className='greeting'>
				<span>Hello, { props.name }!</span>
			</h1>
		);
	},
	App = React.createClass({
		getInitialState: function () {
			return {
				name: 'Ben'
			}
		},
		render: function render() {
			return (
				<Greeting name={ this.state.name } />
			);
		}
	});


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
