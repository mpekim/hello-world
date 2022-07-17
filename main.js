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
}