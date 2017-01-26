var hasProp = {}.hasOwnProperty;

/*
 *	We are extending a childs properties to match the parents. 
 *	- 
 */
function Extend(child, parent) {

	// Interate our keys/properties on our parent
	for (var key in parent) {
		if (hasProp.call(parent, key)) {
			child[key] = parent[key];
		}
	}

	// CTOR - Constructor Function
	function ctor() {
		this.constructor = child;
	}

	// Assign our new `ctor` object prototype to the parents
	ctor.prototype = parent.prototype;
	// Assign our `child`s prototype object to our new `ctor` object
	child.prototype = new ctor();
	// Assign access to our `child` objects parents properties through new prop called .__super__
	child.__super__ = parent.prototype;

	return child;
}

export default Extend;