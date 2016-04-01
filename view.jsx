var name = 'Ben',
	App = function App(props) { 
		return (
			<h1 className='greeting'>
				<span>'Hello, ' + {props.name} + '!'</span>
			</h1>
		);
	};


ReactDOM.render(
	<App name={name} />,
	document.getElementById('root')
);
