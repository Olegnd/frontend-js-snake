'use strict';

var BaseElement = require('./js/base.element.js');
var Food = require('./js/food.js');
var SnakePart = require('./js/snake.part.js');
var Snake = require('./js/snake.js');
//console.log(new BaseElement());
//console.log(new Food());
//console.log(new SnakePart());
//console.log(new Snake());

//___________________test parameters________________________________________________________________________________________

var element1 = {x: 1, y: 0, isVisible: true};
var baseElement1;

var element2 = {x: 1, y: 0};
var food2;

var snakePart2_1, snakePart2_2, snakePart2_3, snakePart2_4;
var directionRight = {direction: 'right'};
var directionLeft  = {direction: 'left'};
var directionUp    = {direction: 'up'};
var directionDown  = {direction: 'down'};
var step           = {steps: 0};
//___________________test constructor BaseElement___________________________________________________________________________
baseElement1 = new BaseElement(element1);
console.log('specified elements1                       : ',element1);
console.log('by constr BaseElement from elements1      : ',baseElement1);
console.log('______________________________________________________________________________________________________________________');
//___________________test constructor Food__________________________________________________________________________________
food2 = new Food(element2);
//Food.feed();
//food2 = new food.Food(element2);
//food.FoodFeed();
console.log('specified element2                        : ',element2);
console.log('by constr Food from element2              : ',food2);
console.log('______________________________________________________________________________________________________________________');
//___________________test constructor SnakePart_____________________________________________________________________________
snakePart2_1 = new SnakePart(element2,directionRight,step);
snakePart2_2 = new SnakePart(element2,directionLeft,step);
snakePart2_3 = new SnakePart(element2,directionUp,step);
snakePart2_4 = new SnakePart(element2,directionDown,step);
console.log('specified element2                        : ',element2);
console.log('specified directionRight                  : ',directionRight);
console.log('specified directionRight                  : ',directionLeft);
console.log('specified directionRight                  : ',directionUp);
console.log('specified directionRight                  : ',directionDown);
console.log('step                                      : ',step);
console.log('by constr SnakePart from element2         : ',snakePart2_1);
//console.log('by constr SnakePart from element2         : ',snakePart2_2);
//console.log('by constr SnakePart from element2         : ',snakePart2_3);
//console.log('by constr SnakePart from element2         : ',snakePart2_4);
console.log('______________________________________________________________________________________________________________________');

//___________________test constructor Snake_________________________________________________________________________________

var parametrsSnake1 = {lengthSnake: 1, directionSnake: 'right'};
var snake1 = new Snake(parametrsSnake1);
console.log('specified parametrsSnake1                 : ',parametrsSnake1);
console.log('Snake from parametrsSnake1                : ',snake1);


/*
//__________________________constructor BaseElement_________________________________________________________________________
function BaseElement(element) {
if (element === undefined) { 
    this.x = 0;
    this.y = 0;  
    this.isVisible = true;
}
else {
    if (element === {}) { 
        this.x = 0;
        this.y = 0;  
        this.isVisible = true;
    }
    else {
        if (element.x === undefined) {
            this.x = 0;
        }
        else {
            this.x = element.x;
        }
        if (element.y === undefined) {
            this.y = 0;
        }
        else {
            this.y = element.y;
        }
        if (element.isVisible === undefined) {
            this.isVisible = true;
        }
        else { 
              this.isVisible = element.isVisible;
        }
    }
}
};
BaseElement.prototype.constructor = BaseElement;

//__________________________constructor Food______________________________________________________________
function Food(element){
    BaseElement.call(this,element);
//    this.x = element.x;
//    this.y = element.y;
//    Food.prototype.feed.call(this,element);
}
Food.prototype.feed = function(){
                                this.isVisible = false;
                      } 
Food.prototype = Object.create(BaseElement.prototype);
Food.prototype.constructor = Food;

//__________________________constructor SnakePart_________________________________________________________
function SnakePart(element,direction,steps) {
    BaseElement.call(this,element);
//    this.x = element.x;
//    this.y = element.y;
    if(direction.direction === undefined) {
       this.direction = 'right'; 
    }
    else {
    this.direction = direction.direction;
    }
    this.steps = steps.steps;
//    SnakePart.prototype.move.call(this,element,direction,steps);
}
SnakePart.prototype.move = function(){
    if(this.steps > 0) {
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
        if(this.direction === 'right'){   
           this.x = this.x + 1;
           this.y = this.y;
        }
    }
}
SnakePart.prototype = Object.create(BaseElement.prototype);
SnakePart.prototype.constructor = SnakePart;

*/