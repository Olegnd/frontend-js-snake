'use strict';
// code Olegnd

var SnakePart = require('./snake.part.js');
var Food      = require('./food.js');
module.exports = function Snake(element){
var head = [],
    parts = [],
    directionHead;
    
    this.x              = element.x;
    this.y              = element.y;
    this.isVisible      = element.isVisible;
    this.direction      = element.direction;
    this.lengt          = element.length;
    this.snake          = element.snake;
    
    head      = [this.x, this.y];
    parts[0]   = head;
    this.snake = parts;
    this.directionHead = this.direction;
console.log('snake in snake.js                    : ',this.snake);
console.log('now directionHead in snake.js        : ',this.directionHead);
}
