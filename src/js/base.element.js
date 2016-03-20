'use strict';

//code Olegnd 
//version 2

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
//version 1

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

