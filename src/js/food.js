'use strict';
// code Olegnd



module.exports = function Food(elements){
//console.log('import object in Food ',elements);
    this.x = elements.x;
    this.y = elements.y;
    this.isVisible = elements.isVisible;
Food.prototype = Object.create(elements.prototype);
Food.prototype.constructor = Food;
Food.prototype.feed = function(){
                        this.isVisible = false;
                      }
}






    



