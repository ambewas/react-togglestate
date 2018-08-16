import { curry } from "ramda";

const toggleState = curry((someClass, stateProp, e) => {
	// note - the event is usually not used, but adding the extra param allows this to be used directly instead of in an arrow:
	// onClick={toggleState("settingsModal", this)}
	if (someClass.props && someClass.props.onStateToggle) {
		someClass.props.onStateToggle(stateProp, !someClass.state[stateProp]);
	}
	someClass.setState(prevState => ({ [stateProp]: !prevState[stateProp] }));
});


export default toggleState;
