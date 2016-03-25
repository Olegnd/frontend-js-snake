'use strict';
// code Olegnd

var BaseElement = require('./base.element.js');
var SnakePart,
    move;

SnakePart = function(element,direction,steps) {
    BaseElement.call(this,element);
    if(direction.direction === undefined) {
       this.direction = 'right'; 
    }
    else {
    this.direction = direction.direction;
    }
//    this.steps = steps.steps;
//    SnakePart.prototype.move.call(this,element,direction,steps);
}

SnakePart.prototype.move = function(){
    if(steps.steps > 0) {
        if(direction.direction === 'left') {
           this.x = this.x - 1;
           this.y = this.y;
        }
        if(direction.direction === 'up') {
           this.x = this.x;
           this.y = this.y - 1;
        }
        if(direction.direction === 'down') {
           this.x = this.x;
           this.y = this.y + 1;
    } 
        else {
           this.x = this.x + 1;
           this.y = this.y;
        
        }
    } 
} 

SnakePart.prototype = Object.create(BaseElement.prototype);
SnakePart.prototype.constructor = SnakePart;

module.exports = SnakePart;
