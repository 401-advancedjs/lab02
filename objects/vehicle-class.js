'use strict';

class Vehicle {
    constructor(name, wheels){
        this.name = name;
        this.wheels = wheels;
    }

    drive(){
        return 'Moving Forward';
    }

    stop(){
        return 'Stopping';
    }
}

class Motorcycle extends Vehicle{
    wheelie(){
        return 'Wheee!';
    }
}

module.exports = {Vehicle, Motorcycle};