'use strict';

var BaseElement = require('./js/base.element.js');
var Food = require('./js/food.js');
var SnakePart = require('./js/snake.part.js');
var Snake = require('./js/snake.js');
//console.log(new BaseElement());
//console.log(new Food());
//console.log(new SnakePart());
//console.log(new Snake());

//___________________test constructor BaseElement___________________________________________________________________________
var element1 = {x: undefined, y: 2, isVisible: true};
var baseElement1;
baseElement1 = new BaseElement(element1);
console.log('specified elements1                  : ',element1);
console.log('by constr BaseElement from elements1 : ',baseElement1);
console.log('______________________________________________________________________________________________________________________');
//___________________test constructor Food__________________________________________________________________________________
var element2 = {x: undefined, y: 2};
var foodElement2 = new Food(element2);
var foodMethod = new Food();
foodMethod.feed();


console.log('specified element2                   : ',element2);
console.log('by constr Food from element2         : ',foodElement2);
console.log('______________________________________________________________________________________________________________________');
//___________________test constructor SnakePart_____________________________________________________________________________
var snakePart3_1, snakePart3_2, snakePart3_3, snakePart3_4;
var element3_1 = {x: 10, y: 5,isVisible: true,direction: 'right'},
    element3_2 = {x: 10, y: undefined,isVisible: undefined,direction: 'left'},
    element3_3 = {x: undefined, y: 5,isVisible: false,direction: 'down'},
    element3_4 = {x: undefined, y: undefined,isVisible: undefined,direction: 'up'};
var snakeMethod   = new Snake(element3_1);
snakeMethod.eat();

snakePart3_1 = new SnakePart(element3_1);
snakePart3_2 = new SnakePart(element3_2);
snakePart3_3 = new SnakePart(element3_3);
snakePart3_4 = new SnakePart(element3_4);

console.log('specified element3_1                 : ',element3_1);
console.log('by constr SnakePart from element3_1  : ',snakePart3_1);
console.log('specified element3_2                 : ',element3_2);
console.log('by constr SnakePart from element3_2  : ',snakePart3_2);
console.log('specified element3_3                 : ',element3_3);
console.log('by constr SnakePart from element3_3  : ',snakePart3_3);
console.log('specified element3_4                 : ',element3_4);
console.log('by constr SnakePart from element3_4  : ',snakePart3_4);
console.log('______________________________________________________________________________________________________________________');

//___________________test constructor Snake_________________________________________________________________________________

var snake1,
    snake2,
    element4 = {direction: undefined, length: 2},
    element5 = {x: 10, y: 5,isVisible: true,direction: 'up', length: 5};
snake1 = new Snake(element4);
snake2 = new Snake(element5);

console.log('specified element4            : ',element4);
console.log('by constr Snake from element4 : ',snake1);
console.log('specified element5            : ',element5);
console.log('by constr Snake from element5 : ',snake2);

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