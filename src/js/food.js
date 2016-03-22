'use strict';
// code Olegnd

//BaseElement = require('./js/base.element.js');

BaseElement.prototype.feed = function(){
    this.isVisible = false;
}

function Food(){
  BaseElement.call(this,x,y,isVisible);
}
Food.prototype = Object.create(BaseElement.prototype); 
Food.prototype.constructor = Food;
module.exports = Food;


/*
//Наследование в конструкторах

function Vehicle(color) {
 this.color = color; 
 this.speed = 0;
 }   

Vehicle.prototype.drive = function() { 
 this.speed = 40; 
}

function Car(brand, color) { 
 Vehicle.call(this, color); 
 this.brand = brand; 
 this.wheels = 4; 
}   

Car.prototype = Object.create(Vehicle.prototype); 
Car.prototype.constructor = Car;
*/


/*
// ________________________________________

var vehicle = {
  color: 'white',
  engine: true
}

var car1 = Object.create(vehicle);
var car2 = Object.create(vehicle);
var superCar = Object.create(car1);

car1.speed = 60;
car1.seats = 4;
car2.speed = 100;

car2.seats = 2;
car2.color = 'green';

console.log(superCar.speed)
console.log(car2.color)



console.dir()
*/

