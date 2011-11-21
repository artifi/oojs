Basic Class implementation
===

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
