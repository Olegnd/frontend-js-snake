'use strict';

var BaseElement = require('./js/base.element.js');
var Food = require('./js/food.js');
//var SnakePart = require('./js/snake.part.js');
//var Snake = require('./js/snake.js');

var elements = {x : 10,y : 20,isVisible : true};
console.log(new BaseElement(elements));
console.log(new Food(new BaseElement(elements)));
//console.log(new SnakePart());
//console.log(new Snake());
//