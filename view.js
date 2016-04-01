var name = 'Ben',
	Greeting = React.createElement('span', { className: 'greeting' }, 'Hello, ' + name + '!');


ReactDOM.render(
	React.createElement('h1', { className: 'greeting' }, Greeting),
	document.getElementById('root')
);
