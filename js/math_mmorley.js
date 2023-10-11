// JS file for math functions.

//--------------------------------------------------------------------------------------
// Pre-Condition: This function accepts an integer "n".
// Post-Condition: The fibonacci sequence up to "n" is displayed.
function fibonacci(n)
{
    if (n === 0)
    {
        // Base case 1.
        return 1;
    }

    if (n === 1)
    {
        // Base case 2.
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

// Pre-Condition: This function accepts two arugments, a coefficient
// and a power of a polynomial value.
// Post-Condition: The power rule is applied to the polynomial value.
function powerRule(coef, power)
{
    console.log("Derivative of " + coef + "x^" + power + " via Power Rule: " + (coef*power) + "x^" + (power - 1));
}

// Pre-Condition: This function accepts an argument "n", for the upper
// bound of the factorial.
// Post-Condition: The factorial (series multiplication) up the
// value is returned.
function factorial(n)
{
    if (n === 0){
        return 1;
    }

    if (n === 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

// Arrow functions.
let mutliply = (a, b) => a * b;
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;