'use strict';

//code Olegnd


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

