{
	tests: [
		{
			title: "Conveyor",
			description: "Allows you to cycle endlessly in either direction",
			verify: "Were you able to go forward and back?",
			before: function(){
				var cv = new Conveyor($$('ul li'), {
					onComplete: function(order) {
						dbug.log('complete: ', order);
					}
				});
				$('back').addEvent('click', function(){ cv.back(); });
				$('forward').addEvent('click', function(){ cv.forward(); });
				$('jump').addEvent('keydown', function(e){
					if (e.key == "enter") cv.to(this.get('value').toInt());
				});
			}
		}
	],
	otherScripts: ['Selectors', 'Element.Event']
}