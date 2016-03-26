'use strict';
// code Olegnd

var BaseElement = require('./base.element.js');
var SnakePart,
    move;

SnakePart = function(element,direction,steps) {
    BaseElement.call(this,element);
//    this.x = element.x;
//    this.y = element.y;
    if(direction.direction === undefined) {
       this.direction = 'right'; 
    }
    else {
    this.direction = direction.direction;
    }
    this.steps = steps.steps;
//    SnakePart.prototype.move.call(this,element,direction,steps);
}
SnakePart.prototype.move = function(){
    if(this.steps > 0) {
        if(this.direction === 'left') {
           this.x = this.x - 1;
           this.y = this.y;
        }
        if(this.direction === 'up') {
           this.x = this.x;
           this.y = this.y - 1;
        }
        if(this.direction === 'down') {
           this.x = this.x;
           this.y = this.y + 1;
        } 
        if(this.direction === 'right'){   
           this.x = this.x + 1;
           this.y = this.y;
        }
    }
}
SnakePart.prototype = Object.create(BaseElement.prototype);
SnakePart.prototype.constructor = SnakePart;
module.exports = SnakePart;


