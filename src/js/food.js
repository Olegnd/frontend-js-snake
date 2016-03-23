'use strict';
// code Olegnd

//BaseElement = require('./js/base.element.js');

module.exports = function Food(elements){
//console.log('import object in Food ',elements);
/*
function BaseElement(elements) {    
    this.x = elements.x;
    this.y = elements.y;
    this.isVisible = elements.isVisible;
}*/

//console.log('create object by constructor BaseElement in Food.js  ',new BaseElement(elements));
    

function food(elements){
    console.log(food.call(this,elements));
    
}
food.prototype.feed = function(){
    this.isVisible = false;
    }
    

console.log('create object by constructor Food with method feed from in Food.js  ',
            new food(elements));
    
Food.prototype = Object.create(BaseElements.prototype);    
food.prototype.constructor = Food;
}
    
    

    



