/*
Script: Class.Binds.js
	Automagically binds specified methods in a class to the instance of the class.

	License:
		MIT-style license.

	Authors:
		Aaron Newton
*/

Class.events = new Events();

Class.Mutators.initialize = function(initialize){
	return function(){
		Class.events.fireEvent('initialize', this);
		var inited = initialize.apply(this, arguments);
		Class.events.fireEvent('afterInitialize', this);
		return inited;
	}
};

Class.events.addEvent('initialize', function(instance){
	$splat(instance.Binds).each(function(name){
		var original = instance[name];
		if (original) instance[name] = original.bind(instance);
	});
	delete instance.Binds;
});