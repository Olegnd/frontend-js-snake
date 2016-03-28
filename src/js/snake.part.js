'use strict';
// code Olegnd

var SnakePart,
    move;
SnakePart = function(element) {
    this.x         = element.x;
    this.y         = element.y;
    this.isVisible = element.isVisible;
    if(element.direction === undefined) {
       this.direction = 'right'; 
    }
    else {
    this.direction = element.direction;
    }
    SnakePart.prototype.move.call(this,element);
}

SnakePart.prototype.move = function(steps){
    if(steps > 0) {
       if(this.direction === 'right'){   
          this.x = this.x + 1;
          this.y = this.y;
       }
       if(this.direction === 'left') {
          this.x = this.x - 1;
          this.y = this.y;
       }
       if(this.direction === 'up') {
          this.x = this.x;
          this.y = this.y - 1;
       }
       if(this.direction === 'down') {
          this.x = this.x;
          this.y = this.y + 1;
       } 
    }
}

module.exports = SnakePart;

