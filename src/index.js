'use strict';

var BaseElement = require('./js/base.element.js');
var Food = require('./js/food.js');
var SnakePart = require('./js/snake.part.js');
var Snake = require('./js/snake.js');
//console.log(new BaseElement());
//console.log(new Food());
//console.log(new SnakePart());
//console.log(new Snake());
/*
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

foodElement2.feed();


console.log('specified element2                   : ',element2);
console.log('by constr Food from element2         : ',foodElement2);
console.log('______________________________________________________________________________________________________________________');

//___________________test constructor SnakePart_____________________________________________________________________________
var snakePart3_1, snakePart3_2, snakePart3_3, snakePart3_4, snakePart3_5;
var element3_1 = {x: 10, y: 5, isVisible: true, direction: 'right'},
    element3_2 = {x: 10, y: undefined, isVisible: undefined,direction: 'left'},
    element3_3 = {x: undefined, y: 5, isVisible: false, direction: 'down'},
    element3_4 = {x: undefined, y: undefined, isVisible: undefined, direction: 'up'},
    element3_5 = {};
var steps = 5;

snakePart3_1 = new SnakePart(element3_1);
snakePart3_1.move(steps);
snakePart3_2 = new SnakePart(element3_2);
snakePart3_2.move(steps);
snakePart3_3 = new SnakePart(element3_3);
snakePart3_3.move(steps);
snakePart3_4 = new SnakePart(element3_4);
snakePart3_4.move(steps);
snakePart3_5 = new SnakePart(element3_5);
snakePart3_5.move(steps);

console.log('specified element3_1                 : ',element3_1);
console.log('by constr SnakePart from element3_1  : ',snakePart3_1);
console.log('specified element3_2                 : ',element3_2);
console.log('by constr SnakePart from element3_2  : ',snakePart3_2);
console.log('specified element3_3                 : ',element3_3);
console.log('by constr SnakePart from element3_3  : ',snakePart3_3);
console.log('specified element3_4                 : ',element3_4);
console.log('by constr SnakePart from element3_4  : ',snakePart3_4);
console.log('specified element3_5                 : ',element3_5);
console.log('by constr SnakePart from element3_5  : ',snakePart3_5);
console.log('______________________________________________________________________________________________________________________');
*/

//
//___________________test constructor Snake_________________________________________________________________________________

var snake1,
    snake2,
    element4_1 = {length: 2, direction: 'up'},
    element4_2 = {length: 5, direction: 'right'};
//var steps = 5;

snake1 = new Snake(element4_1);
snake2 = new Snake(element4_2);
//snake2.eat();
console.log('specified element4_1                 : ',element4_1);
console.log('by constr Snake from element4_1      : ',snake1);
console.log('head1                                : ',snake1.head);
console.log('specified element4_2                 : ',element4_2);
console.log('by constr Snake from element4_2      : ',snake2);
console.log('head2                                : ',snake2.head);

