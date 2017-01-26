// Here we will only have one object that holds all our Instances throughout the app.

var Singleton;

Singleton = (function() {

	// Private
	var instance, isInternal;
		instance = [];
		isInternal = [];

	// Static
	Singleton.getInstance = function() {
		var name = this.name;
		//console.log(`The Singleton Name Property : ${this.name}`);
		if (instance[name] != null) {
			return instance[name];
		}
		isInternal[name] = true;
		return new this;
	}

	// Create Singleton Instance
	function Singleton() {
		var name;
		console.log(`The Singleton Name Property : ${this.constructor.name}`);
		name = this.constructor.name;
		if (!isInternal[name]) {
			throw new Error("Can't call new " + name + "(), use " + name + ".getInstance() instead.");
		}
		isInternal[name] = false;
		instance[name] = this;
	}
	return Singleton;

})();

export default Singleton;