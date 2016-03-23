'use strict';
// code Olegnd
function BaseElement(elements) {
    this.x = elements.x;
    this.y = elements.y;
    this.isVisible = elements.isVisible; 
}
BaseElement.prototype.feed = function(elements){
                                this.isVisible = false;
                             }


function Food(elements){
    BaseElement.call(this,elements);
    this.x = elements.x;
    this.y = elements.y;
}
Food.prototype = Object.create(BaseElement.prototype);
Food.prototype.constructor = Food;

module.exports = Food;