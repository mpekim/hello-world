// API JS file.
class Item{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    setName(name){
        this.name = name;
    }

    setId(id){
        this.id = id;
    }
    // Accessor and Mutator functions.

    present(){
        console.log("Item name: " + this.name);
        console.log("Item ID: " + this.id);
        // Present the object on-screen.
    }

    encryptIDup(value){
        // Use Caesar Cipher to incrypt ID.
        this.id = this.id + value % 100;
        // Make sure that the ID is a number string, and
        // not an integer. (may involve const variable).
        // As of right now, string may concatenate.
    }

    ecryptIDdown(value){
        // Stub for encyption function.
        // Find out more sophisticated ways to
        // encrypt soon.
        this.id = this.id - value % 100;
    }
    
}
// Item Class.

function getItem()
{
    let item = 1;
    // Function is meant to emulate the
    // "GET" endpoint of an API.
    console.log("Accessing GET...");
    console.log("Item successfully retrieved.");
    console.log(errorMessage(200));

    return item;

    // Note: errors are not possible with GET (No ID).
    // At best, we can return an empty list.
}

// Pre-Condition: This function accepts one argument: a data source.
// Post-Condition: The item of the included data will be posted.
function postItem(data)
{
    // Function is meant to emulate the
    // "POST" endpoint of an API.
    console.log("Accessing POST...");
    console.log("New data posted: " + data);
    errorMessage(200);
}

// Pre-Condition: This function accepts one argument: an id
// for the item to be deleted.
// Post-Condition: The item will be deleted.
function deleteItem(id)
{
    // Function is meant to emulate the
    // "DELETE" endpoint of an API.
    console.log("Accessing DELETE...");
    
    // Search for the ID value among the objects in
    // the database. If it does not exist, return 404 error.
    console.log("Item successfully DELETED.");

    if (id === 1234)
    {
        // Item was successfully found.
        // make sure that conditional works for ALL cases.
        errorMessage(200);
    }
    else
    {
        console.log("Error: unable to find item for deletion.");
        console.log(errorMessage(404));
        // Is this now redundant due to console.log?
    }
}

function putItem()
{
    // Function is meant to emulate the
    // "PUT" endpoint of an API.
    console.log("Accessing PUT...");
    console.log("Item successfully PUT into list.");
    errorMessage(200);
}

// Pre-Condition: This function accepts a data argument.
// Post-Condition: The data will be updated.
function updateItem(data)
{

    // "UPDATE" endpoint of an API.
    console.log("Accessing UPDATE...");
    console.log("Data updated to: " + data);

    // Check to see if data is correct. Otherwise,
    // return an error.
    if (data === 1234)
    {
        console.log(errorMessage(200));
    }
    else
    {
        console.log("Error: data does not match.");
        errorMessage(404);
        // Set up switch case for various errors.
    }
}

function errorMessage(value){
    switch(value){
        case 200:
            return("No errors!");
        case 401:
            return("Unknown error.");
        case 404:
            return("Error: Item not found or does not exist.");
        case 500:
            return("Server Error.");
            // Use as example for error handling.
    }
}

// Pre-Condition: This function accepts no arguments.
// Post-Condition: The code in the driver will be
// tested.
function testDriver()
{
    // Research exactly what "const" does.
    // It's apparently used often for JS objects.
    const item1 = new Item("Can", 24);
    item1.present();

    const item2 = new Item("Lettuce", 48);
    item2.present();
    // Create the items and present them onscreen. (Find a way to do this with AppendChild)

    //document.write("<p>Item 1: </p>" +  item1.name + "\n" + "<p>Item 2: </p>" + item2.name + 
    //"</br><button class=codeButtonGreen onclick=returnToIndex()>Return</button>");
    // Decide on if this code should be removed.
    
    const majorList = document.querySelector("#major");
    const minorList = document.querySelector("#minor");
    const warnList = document.querySelector("#warning");
    const output = document.querySelector("#output");

    majorList.appendChild(createMajorError(errorMessage(404)));
    minorList.appendChild(createMinorError(errorMessage(401)));
    warnList.appendChild(createWarning(errorMessage(200)));
    
    output.appendChild(createOutput(item2.name));
    // Implement this code for CS-383 project.
    // Specifically, we want to generate the text for Docker
    // containers on-screen.

    //majorList.appendChild("Final Exam for CS-141 tomorrow!");
    //minorList.appendChild("Good luck, and congratulations!");
    // Notes for CS-141 Final Exam.

    item2.setName("Milk");
    output.appendChild(createOutput("Item2 has been updated to: " + item2.getName()));

    item1.setId(24);
    output.appendChild(createOutput("Item1 has had its ID updated to: " + item1.getId()));

    output.appendChild(createOutput("Testing addition vs. concatenation."));

    console.log("Value of item1 and item2 IDs added together: " + (item1.id + item2.id));
    // Check to see if the addition results in the id values being summed or stringed together.
    
    console.log("Value of item1 and item2 IDs concatenated: " + item1.id + item2.id);
    // For comparison, here is what the addition looks like without parentheses.

    item1.encryptIDup(2);
    console.log("New ID for item1: " + item1.id);
    //const dontUpdate = 1;
    //dontUpdate = 2;

    //console.log(dontUpdate);
    // Updating const should provide error.

    // End of testDriver() function.
    // Ver. 0.0.0; still not technically functional.
}

function returnToIndex(){
    var url = "index.html"
    window.location.href = url;
    // Object.Object.property = value.
}

function createMajorError(error){
    let item = document.createElement('p');
    item.textContent = error;
    return item;
    // Use this code for dynamic web pages in CS-383 Project.
}

function createMinorError(error){
    let item = document.createElement('p');
    item.textContent = error;
    return item;
}

function createWarning(error){
    let item = document.createElement('p');
    item.textContent = error;
    return item;
}

function createOutput(output){
    let item = document.createElement('p');
    item.textContent = output;
    return item;
}