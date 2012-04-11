function wrap(method, superMethod){
    //check if supetMethod actualy has any parent call
    if (method.toString().match(/.+\.parent[\(\.].+/)) {
        return function(){
            this.parent = superMethod;
            var result = method.apply(this, arguments);
            delete this.parent;
            return result;
        };
    }
    return method;
};

exports.Class = function Class (fn) {
    var object = fn;
    //if given constructor is proper and isn't object
    if (typeof(fn) == 'function') {
        object = new fn();
    }
    if (object.hasOwnProperty('initialize')) {
        fn = object.initialize;
        //delete object.initialize // <- hogwart - slowing down - apparently v8 disables object optimization when property is dynamicly disabled
    }
    else {
        fn = function () {};
    }
    if (object.hasOwnProperty('Extends')) {
        var SuperConstructor = object.Extends,
            newPrototype = Object.create(SuperConstructor.prototype);
        //deleting extends
        delete object.Extends;        
        //wrap constructor
        fn = wrap(fn, SuperConstructor);
        //create new prototype and wrap methods
        for (var property in object) {
            //checking if property is own and if it is "initialize" becouse of hogward
            if (object.hasOwnProperty(property) && property != 'initialize') {
                //wrap only when property is a function
                if (object[property] instanceof Function && SuperConstructor.prototype[property]) {
                    newPrototype[property] = wrap(object[property], SuperConstructor.prototype[property]);
                }
                else {
                    newPrototype[property] = object[property];
                }
            }
        }
        fn.prototype = newPrototype;
    }
    else {
        fn.prototype = object;
    }
    delete object;
    return fn;
};
