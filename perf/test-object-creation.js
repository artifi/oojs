var Class = require('../lib/Class.js').Class;

var Animal, Dog, Cat, BullDog, thing, kitty, doggy, brutus;

Animal = function(){
    this.className = 'Animal';
    this.sound = "..."
    this.calledconstructor = "not called";
    this.initialize = function(){
        this.calledconstructor = 'Animal';
    };
};
Animal = new Class( Animal );

Cat = function(){
    this.Extends = Animal;
    this.className = 'Cat';
    this.sound = "Meew Meew"
    this.initialize = function(){
        this.calledconstructor = 'Cat';
    };
};
Cat = new Class( Cat );

Dog = function(){
    this.Extends = Animal;
    this.className = 'Dog';
    this.sound = "Waf Waf"
};
Dog = new Class( Dog );

BullDog = function(){
    this.Extends = Dog;
    this.className = 'BullDog';
    this.sound = "Rrrrr"
    this.initialize = function(){
        this.calledconstructor = 'Bulldog';
    };
};
BullDog = new Class( BullDog );

var animal = null, cli = 0;
console.log("Test started.");
for(var i = 0; i < 20000000; i++){
    cli = i % 4;
    if(cli == 0){
        animal = new Dog(i);
    }
    else if(cli == 1 ){
        animal = new Cat(i);
    }
    else if(cli == 2 ){
        animal = new Animal(i);
    }
    else if(cli == 3 ){
        animal = new BullDog(i);
    }
}
console.log("Test ended.");
