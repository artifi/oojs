describe("Class Test", function() {
  var Class = null, Animal, Dog, Cat, BullDog, thing, kitty, doggy, brutus;
  
  it("prerequizites", function() {
    Class = require('../lib/Class.js').Class;
    expect(Class).not.toBeNull();
  });
  it("class creation", function(){
    Animal = function(){
        this.className = 'Animal';
        this.sound = "..."
        this.calledconstructor = "not called";
        this.initialize = function(){
            this.calledconstructor = 'Animal';
        };
        this.makeSound = function(){
            return this.sound;
        }
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
        this.makeSound = function(){
            return "Wrr ";
        }
    };
    Dog = new Class( Dog );
    
    BullDog = function(){
        this.Extends = Dog;
        this.className = 'BullDog';
        this.sound = "Rrrrr"
        this.initialize = function(){
            this.calledconstructor = 'Bulldog';
        };
        this.makeSound = function(){
            return "G" + this.parent();
        }
        
    };
    BullDog = new Class( BullDog );
    
    expect(Animal).not.toBeNull();
    expect(Cat).not.toBeNull();
    expect(Dog).not.toBeNull();
    expect(BullDog).not.toBeNull();
    
  });

  it("create instances/calling custom constructor: \"initialize\"", function(){
    expect(function(){  
        thing = new Animal();
        kitty = new Cat();
        doggy = new Dog();
        brutus = new BullDog();
    }).not.toThrow();
    
    
    expect(thing.calledconstructor).toEqual('Animal');
    expect(kitty.calledconstructor).toEqual('Cat');
    expect(doggy.calledconstructor).toEqual('Animal');
    expect(brutus.calledconstructor).toEqual('Bulldog');
    
  });
  
  
  
  it("inheritance", function(){
    expect((thing instanceof Animal)).toBeTruthy();
    
    expect((kitty instanceof Animal)).toBeTruthy();
    expect((kitty instanceof Cat)).toBeTruthy();
    expect((kitty instanceof Dog)).toBeFalsy();
    
    expect((doggy instanceof Animal)).toBeTruthy();
    expect((doggy instanceof Cat)).toBeFalsy();
    expect((doggy instanceof Dog)).toBeTruthy();
    
    expect((brutus instanceof Animal)).toBeTruthy();
    expect((brutus instanceof Cat)).toBeFalsy();
    expect((brutus instanceof Dog)).toBeTruthy();
    expect((brutus instanceof BullDog)).toBeTruthy();
  });
  
  it("parent", function(){
    expect(thing.makeSound()).toEqual('...');
    expect(kitty.makeSound()).toEqual("Meew Meew");
    expect(doggy.makeSound()).toEqual("Wrr ");
    expect(brutus.makeSound()).toEqual("GWrr ");
  });
  
  
});
