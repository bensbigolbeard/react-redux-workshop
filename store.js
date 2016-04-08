function todoReducer(state, action) {
	var state = state || [];
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat({ content: action.title, isCompleted: false, id: state.length });
			break;
		case 'COMPLETE_TODO':
			return [].concat(
					state.slice(0, action.id),
					{ content: state[action.id].content, isCompleted: action.isCompleted, id: action.id },
					state.slice(action.id + 1)
				);
			break;
		default:
			return state;
	}
}

window.store = Redux.createStore(todoReducer, [{ content: "Learn React/Redux", isCompleted: false, id: 0 }]);
store.subscribe(function () {
	console.log('****store.getState()', store.getState());
});
