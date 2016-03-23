'use strict';

// code Olegnd 
// version 2

module.exports = function BaseElement(elements) {
if (elements === undefined) {
    this.x = 0; this.y = 0; this.isVisible = true;
}
else {
    if (elements === {}) {
        this.x = 0; this.y = 0; this.isVisible = true;
    }
    else {    
        elements.x === undefined ? this.x = 0 : this.x = elements.x; 
        elements.y === undefined ? this.y = 0 : this.y = elements.y;
        elements.isVisible === undefined ? this.isVisible = true : this.isVisible = elements.isVisible;
    }
}
console.log('in constructor BaseElement.js x = '+this.x+',y = '+this.y+',isVisible = '+this.isVisible);
};


//console.log(this.isVisible + '  invisible');
/*
// version 1

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


