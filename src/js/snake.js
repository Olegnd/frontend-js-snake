'use strict';
// code Olegnd
//var BaseElement = require('./base.element.js');
//var Food      = require('./food.js');
var SnakePart = require('./snake.part.js');

var Snake,
    eat;
Snake = function(element){

var parts = [],
    head,
    steps,
    indexLength = 0,
    indexSnakeLenght = 0,
    indexSteps  = 0;
    parts.length = element.length;
if (element.length > 0) {
                while(indexLength < parts.length) {
                    head = new SnakePart(this,element);
                    switch(head.direction) { 
                        case 'right':
                            head.x = head.x + indexLength;
                            head.move(steps);
                        break;
                        case 'left' :
                            head.x = head.x - indexLength;
                            head.move(steps);
                        break;
                        case 'down' :
                            head.y = head.y + indexLength;
                            head.move(steps);
                        break;
                        case 'up'   :
                            head.y = head.y - indexLength; 
                            head.move(steps);
                        break;
                    }
                    parts[indexLength] = head;
                    indexLength        = indexLength + 1;
                }
                this.snake     = parts;
                this.length    = parts.length;
                this.direction = head.direction;
}
else {
    this.snake     = parts;
    this.length    = element.length;
    this.direction = element.direction;
}    
}

Snake.prototype.eat = function() {
                                parts.shift();
}

module.exports = Snake;
