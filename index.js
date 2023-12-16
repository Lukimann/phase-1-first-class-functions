function recievesAFunction(callback) {
    callback()
}
    
function namedFunction() {
    console.log(" to not deeply equal ")
}
    
function returnsANamedFunction() {
    return() => namedFunction(" to not deeply equal ");
}
    
function returnsAnAnonymousFunction() {
    return() => returnsAnAnonymousFunction;
}