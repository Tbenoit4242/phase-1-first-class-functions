function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback();
    } else {
      console.log("Error: Argument is not a function.");
    }
  }
  

function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function returned by returnsANamedFunction.");
    }
    return namedFunction;
  }
function returnsAnAnonymousFunction() {
  
    return function() {
      console.log("This is an anonymous function returned by returnsAnAnonymousFunction.");
    };
  }