'use strict';
// code Olegnd
//var BaseElement = require('./base.element.js');
//var Food      = require('./food.js');
var SnakePart = require('./snake.part.js');
// 
var Snake,
    eat;
Snake = function(config){
var partSnake = [],
    partDir = {},
    head,
    x = 0,
    y = 0,
    indexLength = 0,
    indexSnakeLenght = 0;
    config = config || {};
    if(config.direction === undefined) {
        config.direction = 'right';     
    }
    if(config.length === undefined) {
        config.length = 0;
    }
        
    this.direction = config.direction;

if (config.length > 0) {
    while(indexLength < config.length) {
        head = new SnakePart(this);
        switch(head.direction) { 
            case 'right':
                head.x = head.x + indexLength;
            break;
            case 'left' :
                head.x = head.x - indexLength;
            break;
            case 'down' :
                head.y = head.y + indexLength;
            break;
            case 'up'   :
                head.y = head.y - indexLength; 
            break;
        }
        partSnake[indexLength] = head;
        this.head = head;
        indexLength = indexLength + 1;
    }
    this.parts     = partSnake;
    this.length    = partSnake.length;
    this.direction = head.direction;
}
else {
    this.parts     = partSnake;
    this.length    = config.length;
    this.direction = config.direction;
}    
}

Snake.prototype.eat = function() {
                    var indexLength = 1;
    if(indexLength >= 0) {
                        this.parts.unshift(this.parts[0]);
                        while(indexLength < this.parts.length) {
                            this.parts[indexLength].x = this.parts[indexLength - 1].x + 1;
                            this.head = this.parts[indexLength];
                            indexLength = indexLength + 1;
                            
                        }
    }
}

Snake.prototype.move = function() {
                                
}

module.exports = Snake;
