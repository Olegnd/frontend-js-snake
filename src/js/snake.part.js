'use strict';
// code Olegnd
var BaseElement = require('./base.element.js');
var SnakePart,
    move;
SnakePart = function(element) {
    BaseElement.call(this,element);
    if(typeof element.direction === 'string') {
       this.direction = element.direction;
    }
    else {
    this.direction = 'right';
    }
}
SnakePart.prototype = Object.create(BaseElement.prototype);
//_________________version without step_____________________________________________________________________________________

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
/*
//_________________version with step________________________________________________________________________________________

SnakePart.prototype.move = function(steps){
    var indexSteps = 0;
        while(indexSteps <= steps) {
            if(this.direction === 'right'){   
               this.x = this.x + 1;
               this.y = this.y;
            }
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
            indexSteps = indexSteps + 1;
        }
}
*/
SnakePart.prototype.constructor = SnakePart;
module.exports = SnakePart;




