'use strict';

//code Olegnd


module.exports = function BaseElement (element) {
    element.x = (element.x === undefined) ? this.x : 0
    this.x = 0 || this.x = element.x
    element.y = (element.x === undefined) ? this.y : 0
    this.x = y || this.y = element.y
    element.isVisible = (element.isVisible === undefined) ? this.isVisible : true
    this.isVisible = 0 || this.isV = element.isVisible
};

