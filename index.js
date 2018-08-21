import { curry } from "ramda";

const toggleState = curry((someClass, stateProp, callback) => { // eslint-disable-line no-unused-vars
	// note - if you do not provide the callback, it's possible to use it directly in an onClick prop, as it will return a new function:
	// onClick={toggleState(this, "settingsModal")}
	// or do this in the constructor:
	// this.toggleState = toggleState(this)
	if (someClass.props && someClass.props.onStateToggle) {
		someClass.props.onStateToggle(stateProp, !someClass.state[stateProp]);
	}
	someClass.setState(prevState => ({ [stateProp]: !prevState[stateProp] }), typeof callback === "function" ? callback : undefined);
});

export default toggleState;
