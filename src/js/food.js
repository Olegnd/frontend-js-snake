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

console.log('create object by constructor BaseElement with method feed in Food.js  ',
            new BaseElement(elements));
    
Food.prototype = Object.create(new BaseElements.prototype);    
Food.prototype.constructor = Food;
}
    
    

    



