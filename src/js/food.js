'use strict';
// code Olegnd
var BaseElement = require('../../src/js/base.element.js');
function Food(elements){
    BaseElement.call(this,elements);
    BaseElement.prototype.feed.call(this,elements);
}
Food.prototype = Object.create(BaseElement.prototype);
Food.prototype.constructor = Food;

module.exports = Food;
