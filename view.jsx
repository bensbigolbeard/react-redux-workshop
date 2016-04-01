var name = 'Ben',
	App = React.createClass({
		render: function render() {
			return (
				<h1 className='greeting'>
					<span>Hello, {this.props.name}!</span>
				</h1>
			);
		}
	});


ReactDOM.render(
	<App name={name} />,
	document.getElementById('root')
);
