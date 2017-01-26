/*
	booleans
 */

export default {

	hasPushState: function() {
		return window.history && history.pushState; 
	}
	
}