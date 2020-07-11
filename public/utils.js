//refactor a debounce function
const debounce = (func, delay = 1000) => {
	//define timeoutId
	let timeoutId;
	//wrapper, guard how many times func can be evoked
	return (...args) => {
		//check if timeoutId is defined
		if (timeoutId) {
			//if it is, clear the timeout
			clearTimeout(timeoutId);
		} //cue up a new execution of our underlying function
		timeoutId = setTimeout(() => {
			//timeoutId takes the timer that is returned and sends it to let timeoutId
			func.apply(null, args); //apply: call function as normal, take all the args
			//and pass them in a separate arguments to the original function
		}, delay);
	};
};
