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
		changeName: function () {
			var self = this,
				names = ['Kevin', 'Satish', 'Justin', 'Ben'],
				index = 0;
			setInterval(function () {
				var currentName;
				if (typeof names[index] !== 'undefined') {
					currentName = names[index];
					index++;
				} else {
					index = 0;
					currentName = names[0];
					index++;
				}
				self.setState({ name: currentName });
			}, 1000);
		},
		componentDidMount: function () {
			this.changeName();
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
