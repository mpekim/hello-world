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
    }
}

// Dog class.

// Function acting as the setup for the IDE.
function helloWorld()
{
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

    // This is all well and good, but let's work on the class practice.

    var fido = new Dog(4, "Fido", true);

    alert("Fido's leg count: " + fido.getLegs());
    fido.setLegs(16);
    alert("new leg count: " + fido.getLegs());
    fido.present();

    var defaultDog = new Dog();
    defaultDog.present(defaultDog);
    
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