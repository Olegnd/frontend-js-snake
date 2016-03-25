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

var element1 = {x : 10,y : 5,isVisible : true};
console.log('specified elements1 in index.js                  : ',element1);
var baseElement1 = new BaseElement(element1)
// BaseElement.feed();
console.log('by constr BaseElement from elements1 in index.js : ',baseElement1);
console.log('______________________________________________________________________________________________________________________');
var element2 = {x : 5,y : 15};
var food2 = new Food(element2);
console.log('specified element2 in index.js                   : ',element2);
console.log('by constr Food from element2 in index.js         : ',food2);

console.log('______________________________________________________________________________________________________________________');

var directionRight = {direction : 'right'};
var step = {steps : 10};
console.log('specified element2 in index.js                   : ',element2);
console.log('specified directionRight in index.js             : ',directionRight);
console.log('step                                             : ',step);
var snakePart2 = new SnakePart(element2,directionRight,step);
//SnakePart.move(steps);
console.log('by constr SnakePart from element2 in index.js    : ',snakePart2);






