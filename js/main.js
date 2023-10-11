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

    presentAnimal(){
        console.log("Animal name: " + this.name);
        console.log("Animal Legs: " + this.legs);
        console.log("Is the Animal happy? " + this.isHappy);
    }
}
// Animal class.

class Dog extends Animal{
    constructor(name, legs, isHappy, breed){
        // Research Extended/Inherited constructors.
        super(name, legs, isHappy);
        this.breed = breed;
    }

    // Is creating a default constructor possible in JS?
    // Research to find out, then create a default (no argument)
    // Constructor if possible.
    
    presentDog(){
        // Stub for extended version of present function.
        console.log(this.presentAnimal());
    }
}
// Dog class.

class Cat extends Animal{
    constructor(name, legs, isHappy, sound){
        super(legs, isHappy);
        this.sound = sound;
    }
}

// Function acting as the setup for the IDE.
function helloWorld()
{
    alert("Hello World.");

    const dog = {
        legs: 4,
        name: "Sparky",
        isHappy: true
    }

    const cat = {
        legs: 4,
        name: "Willwy",
        isHappy: false
    }

    console.log("Before JSON: ");
    console.log(dog)

    const dog_json = convertToJson(dog);

    console.log("After JSON: ");
    console.log(dog_json);

    console.log("Before JSON: ");
    console.log(cat);

    const cat_json = convertToJson(cat);

    console.log("After JSON: ");
    console.log(cat_json);

    console.log("Arrow function test: " + mutliply(3, 4));

    message("glip glop");
    // Testing out ES6 Function.

    isPalindrome("racecar");
    isPalindrome("glip glop");

    d1 = new Dog("Fido", 4, true, "Labrador");
    d1.presentDog();
    // Code works, but the result is the same.
    // Also, I don't understand why concat doesn't work.
    /*

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

    /*var fido = new Dog(4, "Fido", true);

    alert("Fido's leg count: " + fido.getLegs());
    fido.setLegs(16);
    alert("new leg count: " + fido.getLegs());
    fido.present();

    var defaultDog = new Dog();
    defaultDog.present(defaultDog);*/
    // Commenting out code due to changes in Dog class.

    /*var message = "hello";
    console.log("Message before shift: " + message);
    message = changeString(message, 1);
    console.log("Message after shift: " + message);*/
    // Comenting out code until messageShift() function works.

    // All test code will be "commented out" and "put back in" as needed.

    //console.log(factorial(3));
    
}
// Functions below are meant to be implemented as Object methods
// at some point.
//-----------------------------------------------------------------------------
/*
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
}*/ // Code commented out due to removal of Dog class.
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


// Pre-Condition: This function accepts one argument: a message.
// Post-Condition: The message (string) will be checked to see
// if it is a palindrome.
function isPalindrome(message)
{
    for (var i = 0; i < (message.length / 2); i++)
    {
        //console.log(message[i] + " : " + message[message.length - (i + 1)]);
        if (message[i] != message[message.length - (i + 1)])
        {
            console.log(message + " is not a palindrome.");
            return;
        }
    }
    console.log(message + " is a palindrome.");
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
        // Succesful letter shift. Same rule applies for encryption.
    }
    // As of right now, this code does not work as intended.
    // Check to see if there is any way to type-cast the data to
    // a number/int value.

    return message;
}

function convertToJson(obj){
    JSON.stringify(obj);
    return obj;
}

function convertToJSobject(obj){
    JSON.parse(obj);
    return obj;
}

let message = (input) => console.log("Hello " + input);
// ES6 Arrow functions. Basic practice.