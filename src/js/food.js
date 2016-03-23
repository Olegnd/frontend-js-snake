'use strict';
// code Olegnd

//BaseElement = require('./js/base.element.js');

module.exports = function Food(elements){
console.log('import object in Food ',elements);

function BaseElement(elements) {    
    this.x = elements.x;
    this.y = elements.y;
    this.isVisible = elements.isVisible;
}

console.log('create object by constructor BaseElement in Food.js  ',new BaseElement(elements));
    
BaseElement.prototype.feed = function(){
    this.isVisible = false;
    }
function Food(elements){
    BaseElement.call(this,elements);
}
    

console.log('create object by constructor Food with method feed from in Food.js  ',
            new Food(elements));
    
Food.prototype = Object.create(BaseElements.prototype);    
Food.prototype.constructor = Food;
}
    
    

    



