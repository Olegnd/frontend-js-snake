'use strict';

var BaseElement = require('./js/base.element.js');
var Food = require('./js/food.js');
var SnakePart = require('./js/snake.part.js');
//var Snake = require('./js/snake.js');
//console.log(new BaseElement());
//console.log(new Food());
//console.log(new SnakePart());
//console.log(new Snake());
//________________________________________________________________________________________________________

var element1 = {x : 5,y : 5,isVisible : true};
var baseElement1;

var element2 = {x : 10,y : 10};
var food2;

var snakePart2_1, snakePart2_2, snakePart2_3, snakePart2_4;
var directionRight = {direction : 'right'};
var directionLeft  = {direction : 'left'};
var directionUp    = {direction : 'up'};
var directionDown  = {direction : 'down'};
var step = {steps : 10};



baseElement1 = new BaseElement(element1);
console.log('specified elements1 in index.js                  : ',element1);
console.log('by constr BaseElement from elements1 in index.js : ',baseElement1);
console.log('______________________________________________________________________________________________________________________');

food2 = new Food(element2);
//food2 = new food.Food(element2);
//food.FoodFeed();
console.log('specified element2 in index.js                   : ',element2);
console.log('by constr Food from element2 in index.js         : ',food2);
console.log('______________________________________________________________________________________________________________________');

snakePart2_1 = new SnakePart(element2,directionRight,step);
snakePart2_2 = new SnakePart(element2,directionLeft,step);
snakePart2_3 = new SnakePart(element2,directionUp,step);
snakePart2_4 = new SnakePart(element2,directionDown,step);
console.log('specified element2 in index.js                   : ',element2);
console.log('specified directionRight in index.js             : ',directionRight);
console.log('specified directionRight in index.js             : ',directionLeft);
console.log('specified directionRight in index.js             : ',directionUp);
console.log('specified directionRight in index.js             : ',directionDown);
console.log('step                                             : ',step);
console.log('by constr SnakePart from element2 in index.js    : ',snakePart2_1);
console.log('by constr SnakePart from element2 in index.js    : ',snakePart2_2);
console.log('by constr SnakePart from element2 in index.js    : ',snakePart2_3);
console.log('by constr SnakePart from element2 in index.js    : ',snakePart2_4);





