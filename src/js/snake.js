'use strict';
// code Olegnd
//var BaseElement = require('./base.element.js');
var SnakePart = require('./snake.part.js');
//var Food      = require('./food.js');
var Snake,
    eat;

Snake = function(element){
var head  = [],
    parts = [],
    directionHead,
    indexLength = 0,
    indexSteps  = 0;
SnakePart.call(this,element);
this.length    = element.length;

}
Snake.prototype = Object.create(SnakePart.prototype);

eat = function() {
    
}

Snake.prototype.constructor = Snake;
module.exports = Snake;


/*    
if (element.steps > 0 && element.length > 0) { 
   
    while(indexSteps <= element.steps) {
       switch(element.direction) {
            case 'right':
               this.direction = element.direction;
               directionHead  = this.direction;
               while(indexLength < element.length) {
                   this.x = this.x + indexLength + element.steps;
                   this.y = this.y;
                   parts[indexLength] = [this.x, this.y];
                   head               = [this.x, this.y];
                   this.snake         = parts;
                   indexLength        = indexLength + 1;
               }
               
            break;
            case 'left':
               this.direction = element.direction;
               directionHead  = this.direction;
               while(indexLength < element.length) {
                   this.x = this.x - (indexLength + indexSteps) + element.length;
                   this.y = this.y;
                   parts[indexLength] = [this.x, this.y];
                   head               = [this.x, this.y];
                   this.snake         = parts;
                   indexLength        = indexLength + 1;
               }
            break;

                    case 'down':
                        this.isVisible = true;
                        while(indexLength < element.length - 1) {
                            this.x = indexLength;
                            this.y = indexSteps;
                            parts[indexLength] = [this.x, this.y];
                            indexLength = indexLength + 1;
                        } 
                        this.y = this.y + indexSteps;
                        head          = [this.x, this.y];
                        parts[element.length] = head;
                        this.snake    = parts;
                        directionHead = element.direction;
                    break;
                    case 'up':
                        this.isVisible = true;
                        while(indexLength < element.length - 1) {
                            this.x = indexLength;
                            this.y = 0;
                            parts[indexLength] = [this.x, this.y];
                            indexLength = indexLength + 1;
                        } 
                        this.y = this.y - 1;
                        head          = [this.x, this.y];
                        parts[element.length] = head;
                        this.snake    = parts;
                        directionHead = element.direction;
                    break;
                    
                }
            indexSteps = indexSteps + 1;
        }
}

else { 
    if (element.steps === 0 && element.length > 0) {
    this.isVisible = true;
    this.direction = element.direction;
    directionHead  = this.direction;
    this.steps     = element.steps;
    while(indexLength < element.length) {
        this.x = 1 + indexLength + element.steps;
        this.y = 0;
        parts[indexLength] = [this.x, this.y];
        head = [this.x, this.y]
        this.snake = parts;
        indexLength = indexLength + 1;
    }
    }
    
    else {
        this.direction = undefined;
        head           = [];
        parts          = head;
        this.snake     = parts;
        directionHead  = this.direction;
    }
}
console.log('snake in snake.js                    : ',this.snake);
console.log('now directionHead in snake.js        : ',directionHead);
*/