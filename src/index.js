'use strict';

var BaseElement = require('./js/base.element.js');
var Food = require('./js/food.js');
//var SnakePart = require('./js/snake.part.js');
//var Snake = require('./js/snake.js');

var elements = {x : undefined,y : undefined,isVisible : undefined};
console.log('specified in idex.js x = '+elements.x+',y = '+elements.y+',isVisible = '+elements.isVisible);

//new BaseElement(elements);
//console.log('create object by constructor Base.Eletment in index.js ',new BaseElement(elements));

new Food(new BaseElement(elements));
console.log('create object by constructor Food in index.js ',new Food(new BaseElement(elements)));

//console.log(new SnakePart());
//console.log(new Snake());
//