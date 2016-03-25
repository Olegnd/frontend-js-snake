'use strict';
// code Olegnd
var BaseElement = require('./base.element.js');
function Food(element){
    BaseElement.call(this,element);
//    BaseElement.prototype.feed.call(this,element);
}
Food.prototype = Object.create(BaseElement.prototype);
Food.prototype.constructor = Food;

module.exports = Food;
