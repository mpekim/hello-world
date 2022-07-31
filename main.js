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
    constructor(){
        // Default constructor.
    }
}

function helloWorld()
{
    alert("Hello World.");
    alert("Due to the console not running as intended, this is how the IDE will present output.");

    var dog = {
        legs: 4,
        name: "Sparky",
        ishappy: true
    }

    alert("Dog name: " + dog.name);

    dog.name = "Fido";

    alert("New Dog name: " + dog.name);

    console.log("Testing...");
    console.log("Good. Glad to see that the console can be found using F12.");

    console.log(dog);
    document.write("Let's see if this shows up on-screen.");
    document.write(dog);
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