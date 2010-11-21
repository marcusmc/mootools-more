/*
---

script: DynamicTips.js

name: DynamicTips

description: Class for creating nice tips that follow the mouse cursor when hovering an element for which you can set title and text as you need.

license: MIT-style license

authors:
  - Valerio Proietti
  - Christoph Pojer
  - Marcus McLaughlin

requires:
  - More/Tips

provides: [DynamicTips]

...
*/

DynamicTips = new Class({

	Extends: Tips,
        
        elementEnter: function(event, element){
                this.container.empty();
                
                ['title', 'text'].each(function(value){
                        var content = element.retrieve('tip:' + value);
                        this['_' + value + 'Elem'] = new Element('div', {'class': 'tip-' + value}).inject(this.container);
                        if (content) this.fill(this['_' + value + 'Elem'], content);
                }, this);
                
                $clear(this.timer);
                this.timer = (function(){
                        this.show(element);
                        this.position((this.options.fixed) ? {page: element.getPosition()} : event);
                }).delay(this.options.showDelay, this);
        },

        setTitle: function(title) {
                titleElem = this._titleElem;
                if (titleElem) {
                       titleElem.empty();
                       this.fill(titleElem, title);
                }
        },

        setText: function(text) {
                textElem = this._textElem;
                if (textElem) {
                        textElem.empty();
                        this.fill(textElem, text);
                }
        }


});
