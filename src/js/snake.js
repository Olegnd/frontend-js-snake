'use strict';
// code Olegnd

//var SnakePart = require('./snake.part.js');
//var Food      = require('./food.js');
module.exports = function Snake(element){
var head = [],
    parts = [],
    directionHead,
    indexLength = 0,
    indexSteps  = 0; 
console.log('element  = ',element);
if (element.steps > 0) { 
    while(indexSteps <= element.steps) {
        switch(element.length) {
            case 0:
                this.x         = 0;
                this.y         = 0;
                this.isVisible = true;
                this.direction = undefined;
                head           = [];
                parts          = head;
                this.snake     = parts;
                directionHead  = element.direction;
            break;

            default:
                switch(element.direction) {
                    case 'right':
                        this.isVisible = true;
                        this.direction = element.direction;
                        while(indexLength < element.length) {
                            this.x = indexLength + element.steps;
                            this.y = 0;
                            parts[indexLength] = [this.x, this.y];
                            indexLength = indexLength + 1;
                        } 
                        head          = [this.x, this.y];
                        this.snake    = parts;
                        directionHead = element.direction;
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
                    case 'left':
                        this.isVisible = true;
                        this.direction = element.direction;
                        while(indexLength < element.length) {
                            this.x = indexLength - 1 - element.steps;
                            this.y = 0;
                            parts[indexLength] = [this.x, this.y];
                            indexLength = indexLength + 1;
                        } 
                        head          = [this.x, this.y];
                        this.snake    = parts;
                        directionHead = element.direction;
                    break;
                }
        }
    console.log('snake in snake.js                    : ',this.snake);
    console.log('now directionHead in snake.js        : ',directionHead);

        indexSteps = indexSteps + 1;
    }
}
else {
    this.isVisible = true;
    this.direction = element.direction;
    while(indexLength < element.length) {
        this.x = indexLength + element.steps;
        this.y = 0;
        parts[indexLength] = [this.x, this.y];
        indexLength = indexLength + 1;
    } 
    head          = [this.x, this.y];
    this.snake    = parts;
    directionHead = element.direction;
    
}
}
