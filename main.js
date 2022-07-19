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
 ************************/

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
}
// Functions below are meant to be implemented as Object methods
// at some point.

function getLegs(dog)
{
    return dog.legs;
}

function getName(dog)
{
    return dog.name;
}

function getHappy(dog)
{
    return dog.isHappy;
}