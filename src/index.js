'use strict';

var BaseElement = require('./js/base.element.js');
var Food = require('./js/food.js');
//var SnakePart = require('./js/snake.part.js');
//var Snake = require('./js/snake.js');
//console.log(new BaseElement);
//console.log(new Food);
//console.log(new SnakePart());
//console.log(new Snake());
//________________________________________________________________________________________________________

var elements1 = {x : undefined,y : undefined,isVisible : undefined};
var elements2 = {x : 5,y : 15};
console.log('specified elements1 in index.js                        : ',elements1);
console.log('object created by constructor BaseElement from elements1 in index.js : ',new BaseElement(elements1));
console.log('______________________________________________________________________________________________________________________')
console.log('specified elements2 in index.js                                      : ',elements2);
console.log('object created by constructor Food from elements2 in index.js        : ',new Food(elements2));
