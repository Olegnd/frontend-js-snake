'use strict';
// code Olegnd
//
var BaseElement = require('./base.element.js');
var SnakePart,
    move;
SnakePart = function(element) {
    element = element || {};
    BaseElement.call(this,element);
    if(typeof element.direction === 'string') {
       this.direction = element.direction;
    }
    else {
    this.direction = 'right';
    }
}
SnakePart.prototype = Object.create(BaseElement.prototype);
/*
SnakePart.prototype.partDirection = function() {
        this.direction = this.direction;
}*/
SnakePart.prototype.move = function(steps){
        if(steps > 0) {
            if(this.direction === 'right'){   
               this.x = this.x + steps;
               this.y = this.y;
            }
            if(this.direction === 'left') {
               this.x = this.x - steps;
               this.y = this.y;
            }
            if(this.direction === 'up') {
               this.x = this.x;
               this.y = this.y - steps;
            }
            if(this.direction === 'down') {
               this.x = this.x;
               this.y = this.y + steps;
            }
            
        }
}

SnakePart.prototype.constructor = SnakePart;
module.exports = SnakePart;












