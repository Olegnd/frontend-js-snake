'use strict';
// code Olegnd
var BaseElement = require('./base.element.js');
var Food,
    feed;
    
Food = function (element){
    BaseElement.call(this,element);
//    this.x = element.x;
//    this.y = element.y;
//    Food.prototype.feed.call(this,element);
}
Food.prototype.feed = function(){
                                this.isVisible = false;
                      } 
Food.prototype = Object.create(BaseElement.prototype);
Food.prototype.constructor = Food;

module.exports = Food

//module.exports.Food = Food;
//module.exports.feed = feed;