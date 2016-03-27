'use strict';

// code Olegnd 
/*

//___________________________________version 2______________________________________________________________________________

var BaseElement,
    feed; 
BaseElement = function(elements) {
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
}
BaseElement.prototype.feed = function(){
                                this.isVisible = false;
                             }
module.exports = BaseElement;*/

//___________________________________version 1______________________________________________________________________________

var BaseElement = function(element) {
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
}
BaseElement.prototype.constructor = BaseElement;
module.exports = BaseElement;