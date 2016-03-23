'use strict';
// code Olegnd

//BaseElement = require('./js/base.element.js');

module.exports = function Food(elements){
console.log('import object in Food ',elements);

Food.prototype.feed = function(){
    this.isVisible = false;
    }
//Food.call(this,elements);
//Food.prototype = Object.create(elements.prototype);    
Food.prototype.constructor = Food;
}

/*
function BaseElement(elements) {    
    this.x = elements.x;
    this.y = elements.y;
    this.isVisible = elements.isVisible;
}*/

//console.log('create object by constructor BaseElement in Food.js  ',new BaseElement(elements));
    

/*console.log('create object by constructor Food with method feed from in Food.js  ',
              new food(elements));*/

    
    
    

    



