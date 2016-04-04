'use strict';
// code Olegnd
var BaseElement = require('./base.element.js');
var Food,
    feed;
Food = function (element){
    BaseElement.call(this,element);
}
Food.prototype = Object.create(BaseElement.prototype);

Food.prototype.feed = function(){
                                this.isVisible = false;
                      }
Food.prototype.constructor = Food;
module.exports = Food
