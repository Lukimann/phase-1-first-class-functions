function rootFunction() {

}
function functionA() {
    
}

function functionB() {

}
 
function receivesAFunction(spy) {
    spy() 
}
    
function returnsANamedFunction() {
    return function namedFunction() {

    };
    //return() => namedFunction(" to not deeply equal ");
}
    
function returnsAnAnonymousFunction() {
    return function() {

    };
   // return() => returnsAnAnonymousFunction;
}