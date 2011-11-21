
var Class = require('./lib/Class.js').Class;

var Animal = function(){
    console.log("---- Class constructor", "Animal");
    this.sound = "....";
    this.className = "Animal";
    this.initialize = function(){
        //console.log("Constructor: Animal", this.sound);
    };
    this.makeSound = function(){
        console.log(this.className, 'makes ...', this.sound);
        return this.sound;
    };
};
Animal = new Class( Animal );

var Dog = function(){
    console.log("---- Class constructor", "Dog");
    this.className = "Dog";
    this.sound = "Waf Waf";
    this.a = "Lessy";
    this.Extends = Animal;
    this.initialize = function(name){
        //console.log("Constructor: Dog", this.sound);
        this.a = name;
    };
};
Dog = new Class( Dog );

var Cat = function(){
    console.log("---- Class constructor", "Cat");
    this.className = "Cat";
    this.sound = "Meew Meew";
    this.a = "PussInTheBoots";
    this.Extends = Animal;
    this.initialize = function(name){
        this.sound = "Miau Miau"
        this.a = name;
        //console.log(this.a);
        //console.log("Constructor: Cat", this.sound);
        this.parent();
    };
    this.makeSound = function(){
        return "sound";
    }
};
Cat = new Class( Cat );

var BullDog = function(){
    console.log("---- Class constructor", "Bulldog");
    this.className = "Bulldog";
    this.Extends = Dog;
};
BullDog = new Class( BullDog );


console.log("------------- creating instances ----------------");
var pussy = new Cat("Kot");
console.log("-- Cat crated", pussy);
console.dir(pussy);
var lessy = new Dog("Pies");
console.dir(lessy);
console.log("-- Dog crated", lessy, lessy.a);
var bdog = new BullDog('bull');
console.dir(bdog);

console.log("-- BullDog crated", bdog, bdog.a);


console.log("------------- check types -----------------------");
console.log("pussy instanceof Animal", pussy instanceof Animal);
console.log("pussy instanceof Cat", pussy instanceof Cat);
console.log("pussy instanceof Dog", pussy instanceof Dog);

console.log("lessy instanceof Animal", lessy instanceof Animal);
console.log("lessy instanceof Cat", lessy instanceof Cat);
console.log("lessy instanceof Dog", lessy instanceof Dog);

console.log("bdog instanceof Animal", bdog instanceof Animal);
console.log("bdog instanceof Cat", bdog instanceof Cat);
console.log("bdog instanceof Dog", bdog instanceof Dog);

console.log("------------- making sound -----------------------");
console.log("-- pussy:", pussy.makeSound());
console.log("-- lessy:", lessy.makeSound());
lessy.sound = "Hau Hau";
console.log("-- pussy:", pussy.makeSound());
console.log("-- lessy new sound:", lessy.makeSound());

lessy2 = new Dog();
console.log("-- lessy2:", lessy2.makeSound());
/**/
var animal = null;
for(var i = 0; i < 20000000; i++){
    if(i % 2){
        animal = new Dog(i);
    }
    else{
        animal = new Cat(i);
    }
}


console.log("animal", animal.a);
console.dir(animal);
console.log("animal.__proto__", animal.__proto__.a);
console.dir(animal.__proto__);
/**/


console.log('lessy obj:')
console.dir(lessy);
console.log('lessy obj.__proto__:')
console.dir(lessy.__proto__);

//lessy.initialize();

