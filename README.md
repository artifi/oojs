Basic experimental Class implementation
===

This implementation is compatibile [Mootools](http://mootools.net/) Class definition style. 
No supportfor Mutators and other stuff.

Mostly it should be considered as an experiment.
If you realy want to write fastest posible OOP Javascript - then consider using native prototype programming (Object.create etc.). 


### Example usage:

    Animal = function(){
        this.className = 'Animal';
        this.sound = "..."
        this.initialize = function(){
            //Constructor body
        };
        this.makeSound = function(){
            return this.sound;
        }
    };
    //Create Class
    Animal = new Class( Animal );

    Cat = function(){
        //Inherit Method, Prop, Type
        this.Extends = Animal;

        this.className = 'Cat';
        this.sound = "Meew Meew"
        //overriding method
        this.initialize = function(){
            //Call super method
            this.parent();
        };
    };
    Cat = new Class( Cat );
