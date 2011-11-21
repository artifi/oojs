function Class( fn ){
    var object = new fn(), nc = fn, superObject;
    if(object.hasOwnProperty('Extends')){
        fn.prototype = new object.Extends();
        
        object = new fn();
        delete object.Extends;

        superObject = Object.getPrototypeOf( Object.getPrototypeOf(object) );
        for(var prop in object){
            if(object[prop] instanceof Function && superObject[prop]){
                object[prop] = wrap(object[prop], superObject[prop]);
            }
        }       
    }
    var initialize = object.initialize;
    if( initialize ){
        nc = function(){
            initialize.apply(this, arguments); 
        };
        nc.prototype = object; 
    }
    return nc;
};

exports.Class = Class;

function wrap(method, superMethod){
    return function(){
        this.parent = superMethod;
        var result = method.apply(this, arguments);
        delete this.parent;
        return result;
    };
};
