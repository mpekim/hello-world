/************************
 * Author: Mike Morley
 * Date: July 18th, 2022
 * 
 * Time Spent: About 30 minutes.
 * 
 * Credited Sources of Help:
 * - Sololearn.com (Website)
 * 
 * Program Purpose:
 * - JS section of a makeshift JavaScript IDE,
 * made using HTML, CSS and JS files.
 * 
 * Note: As seen in the HTML output, the 
 * "traditional" console can be accessed on
 * the browser by pressing F12 (this will
 * open up Development tools.)
 * 
 ************************/

class Dog{
    constructor(legs, name, isHappy){
        // Default constructor.
        // Make sure that the "this" keyword is used when assigning values.
        this.legs = legs;
        this.name = name;
        this.isHappy = isHappy;
    }

    // Is creating a default constructor possible in JS?
    // Research to find out, then create a default (no argument)
    // Constructor if possible.

    getLegs(){
        return this.legs;
    }

    getName(){
        return this.name;
    }

    getHappy(){
        return this.isHappy;
    }

    setLegs(legs){
        this.legs = legs;
    }

    setName(name){
        this.name = name;
    }

    setHappy(isHappy){
        this.isHappy = isHappy;
    }
    
    // Pre-Condition: This method accepts no arguments.
    // Post-Condition: The Dog object will be presented on-screen.
    present(){
        document.write("Name: " + this.name);
        document.write("Leg count: " + this.legs);
        document.write("Are they happy: " + this.isHappy);
        // Inserting comment for vacation purposes.
        console.log("Name: " + this.name);
        console.log("Leg count: " + this.legs);
        console.log("Are they happy: " + this.isHappy);
    }
}
// Dog class.

class Animal{
    constructor(name, legs, isHappy){
        this.name = name;
        this.legs = legs;
        this.isHappy = isHappy;
    }
    makeSound(){
        console.log("Default animal sound.");
    }
    // Work on creating Animal as the "Basic/Super" class,
    // and having Dog extend/inherit on the Animal class.
    getName(){
        return this.legs;
    }

    getLegs(){
        return this.name;
    }

    getIsHappy(){
        return this.isHappy;
    }

    setName(newName){
        this.name = newName;
    }

    setLegs(newLegs){
        this.legs = newLegs;
    }
    
    setIsHappy(newIsHappy){
        this.isHappy = newIsHappy;
    }
}
// Animal class.

// Function acting as the setup for the IDE.
function helloWorld()
{
    /*
    alert("Hello World.");
    alert("Due to the console not running as intended, this is how the IDE will present output.");

    var dog = {
        legs: 4,
        name: "Sparky",
        isHappy: true
    }

    var cat = {
        legs: 4,
        name: "Lilly",
        isHappy: false
    }

    alert("Dog name: " + dog.name);

    dog.name = "Fido";

    alert("New Dog name: " + dog.name);


    //console.log("Testing...");
    //console.log("Good. Glad to see that the console can be found using F12.");

    console.log(dog);
    document.write("Let's see if this shows up on-screen.");
    document.write(dog);
    */

    // This is all well and good, but let's work on the class practice.

    var fido = new Dog(4, "Fido", true);

    alert("Fido's leg count: " + fido.getLegs());
    fido.setLegs(16);
    alert("new leg count: " + fido.getLegs());
    fido.present();

    var defaultDog = new Dog();
    defaultDog.present(defaultDog);

    var message = "hello";
    console.log("Message before shift: " + message);
    message = changeString(message, 1);
    console.log("Message after shift: " + message);

    console.log(factorial(3));
    
}
// Functions below are meant to be implemented as Object methods
// at some point.
//-----------------------------------------------------------------------------

// Pre-Condition: This function accepts a "dog" parameter.
// Post-Condition: The legs value of the "dog" object
// will be returned.
function getLegs(dog)
{
    return dog.legs;
}

// Pre-Condition: This function accepts a "dog" parameter.
// Post-Condition: The name value of the "dog" object
// will be returned.
function getName(dog)
{
    return dog.name;
}

function getHappy(dog)
{
    return dog.isHappy;
}

// Pre-Condition: This function accepts a "newLegs" parameter.
// Post-Condition: The legs value of the "dog" object
// will be set to the input value.
function setLegs(newLegs)
{
    dog.legs = newLegs;
}

// Pre-Condition: This function accepts a "newName" parameter.
// Post-Condition: The name value of the "dog" object will
// be set to the input value.
function setName(newName)
{
    dog.name = newName;
}

// Pre-Condition: This function accepts a "newHappy" parameter.
// Post-Condition: The isHappy value of the "dog" object
// will be set to the input value.
function setHappy(newHappy)
{
    dog.isHappy = newHappy;
}
// End of the functions for the Dog object.

//--------------------------------------------------------------------------------------
// Pre-Condition: This function accepts an argument, "input", for the limit
// of the "for" loop.
// Post-Condition: The numbers up to the input limit will be printed.
function forLoopInput(input)
{
    for (var i = 0; i < input; i++)
    {
        console.log(i);
    }
}

//--------------------------------------------------------------------------------------
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

function isPalindrome(message)
{
    for (var i = 0; i < message.length; i++)
    {
        if (message[i] != message[message.length - i])
        {
            console.log("Message is not a plaindrome.");
            return;
        }
    }
    console.log("Message is a palindrome.");
    return;
}

// Pre-Condition: This function accepts two arguments, a message
// and an amount to shift the message by.
// Post-Condition: The message string is modified by the shift value.
function changeString(message, shift)
{
    for (var i = 0; i < message.length; i++)
    {
        message[i] = message[i] + shift;
    }
    // As of right now, this code does not work as intended.
    // Check to see if there is any way to type-cast the data to
    // a number/int value.

    return message;
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