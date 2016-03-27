'use strict';
// code Olegnd

var SnakePart = require('./snake.part.js');
var Food      = require('./food.js');
module.exports = function Snake(parametrs){

var snakePart        = {},
    element          = {},
    direction        = {},
    steps            = {},
    part             = [],
    head             = [],
    indexlengthSnake = 0;
if(parametrs.lengthSnake === 1) {
    element.x = 1;
    element.y = 0;
    direction.direction = 'rigt';
    steps.steps = 0;
    snakePart = new SnakePart(element,direction,steps);
    this.x              = snakePart.x;
    this.y              = snakePart.y;
    this.isVisible      = snakePart.isVisible;
    this.direction      = snakePart.direction;
    this.steps          = snakePart.steps;
    this.lengthSnake    = parametrs.lengthSnake;
    this.directionSnake = parametrs.directionSnake;
    
    head = [this.x, this.y];
    part[0] = head;
    this.snake = part;
//console.log('snakePart = ',snakePart);
//console.log('part = ',part);    
}
}