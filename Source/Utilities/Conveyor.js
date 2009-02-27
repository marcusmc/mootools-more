/*
Script: Conveyor.js
	A cyclic iterator for DOM elements. Allows you to cycle infinitely in either direction with a finite number of elements.

	License:
		MIT-style license.

	Authors:
		Aaron Newton
*/

var Conveyor = new Class({

	Implements: [Options, Events, Chain],

	options: {/*
		onForward: $empty,
		onBack: $empty,
		onComplete: $empty*/
		start: 0
	},

	initialize: function(){
		var args = Array.link(arguments, {options: Object.type, elements: Array.type});
		this.setOptions(args.options);
		if (args.elements) {
			args.elements.each(function(el){
				this.initial.include(el);
				this.current.include(el)
			}, this);
		}
		this.to(this.options.start);
	},

	now: 0,

	initial: [],

	current: [],

	to: function(i) {
		var to = this.getIndex(i);
		var stop, 
			offset = 0,
			newOrder = $A(this.current),
			useNewOrder;
		this.current.each(function(el, loc) {
			if (loc == to && loc != 0) stop = true;
			if (loc == 0 && to == 0) {
				var last = this.current.getLast().inject(el, 'before');
				this.current.erase(last).unshift(last);
				stop = true;
			}
			if (!stop) {
				var last = newOrder.getLast();
				el.inject(last, 'after');
				newOrder.erase(el).push(el);
				useNewOrder = true;
			}
		}, this);
		if (useNewOrder) this.current = newOrder;
		this.fireEvent('complete', [this.getOrder()]);
		this.now = i;
	},

	getOrder: function(){
		var map = this.current.map(function(el){
			return this.initial.indexOf(el);
		}, this);
		return map;
	},

	getIndex: function(index) {
		while (index > this.current.length - 1) {
			index = index - this.current.length;
		}
		while (index < 0) {
			index = index + this.current.length;
		}
		return this.current.indexOf(this.initial[index]);
	},
	
	forward: function(howMany){
		howMany = $pick(howMany, 1);
		var to = this.now + howMany;
		if (to > this.current.length) to = to - this.current.length;
		this.to(to);
		this.fireEvent('forward', to);
	},
	
	back: function(howMany) {
		howMany = $pick(howMany, 1);
		var to = this.now - howMany;
		if (to < 0) to = this.current.length + to;
		this.to(to);
		this.fireEvent('back', to);
	}

});