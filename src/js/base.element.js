'use strict';

//code Olegnd 
/* Костя, воспользовался Тернарным оператором, но!,
объясни пожалуйста, почему так не работает:

element === undefined ? this.x = 0; this.y = 0;  this.isVisible = true;

так тоже пробовал:

element === undefined ? this.x = 0 && this.y = 0 && this.isVisible = true;

дает ошибку ReferenceError: Invalid left-hand side in assignment(…) в обоих случаях
я так понимаю не верно то что с лева от ? - 
element === undefined ?,

хотел сделать код в пять строк, как мы обсуждали с тобой в начале, а именно: 

element === undefined ? this.x = 0; this.y = 0;  this.isVisible = true;
element === {}        ? this.x = 0; this.y = 0;  this.isVisible = true;
element.x === undefined ? this.x = 0 : this.x = element.x; 
element.y === undefined ? this.y = 0 : this.y = element.y;
element.isVisible === undefined ? this.isVisible = true : this.isVisible = element.isVisible;

 а смог сделать используя Тернарный оператор только так:
 */

module.exports = function BaseElement (element) {
if (element === undefined) {
    this.x = 0; this.y = 0; this.isVisible = true;
}
else {
    if (element === {}) {
        this.x = 0; this.y = 0; this.isVisible = true;
    }
    else {    
        element.x === undefined ? this.x = 0 : this.x = element.x; 
        element.y === undefined ? this.y = 0 : this.y = element.y;
        element.isVisible === undefined ? this.isVisible = true : this.isVisible = element.isVisible;
    }
}
};






/*
module.exports = function BaseElement (element) {
if (element === undefined) { 
    this.x = 0;
    this.y = 0;  
    this.isVisible = true;
}
else {
    if (element === {}) { 
        this.x = 0;
        this.y = 0;  
        this.isVisible = true;
    }
    else {
        if (element.x === undefined) {
            this.x = 0;
        }
        else {
            this.x = element.x;
        }
        if (element.y === undefined) {
            this.y = 0;
        }
        else {
            this.y = element.y;
        }
        if (element.isVisible === undefined) {
            this.isVisible = true;
        }
        else {
            this.isVisible = element.isVisible;
        }
    }
}
};
*/

