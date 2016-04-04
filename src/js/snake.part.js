'use strict';
// code Olegnd
var BaseElement = require('./base.element.js');
var SnakePart,
    move;
SnakePart = function(element) {
    BaseElement.call(this,element);
    if(element.direction === undefined) {
       this.direction = 'right'; 
    }
    else {
    this.direction = element.direction;
    }
}
SnakePart.prototype = Object.create(BaseElement.prototype);

SnakePart.prototype.move = function(steps){
                                    if(steps > 1) {
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
                                    }
                                    else {
                                        this.x = this.x;
                                        this.y = this.y;
                                    }
                            }

SnakePart.prototype.constructor = SnakePart;
module.exports = SnakePart;



