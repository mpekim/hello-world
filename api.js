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
    }
    
}
// Item Class.

function getItem()
{
    // Function is meant to emulate the
    // "GET" endpoint of an API.
    console.log("Accessing GET...");
    console.log("Item successfully retrieved.");
}

// Pre-Condition: This function accepts one argument: a data source.
// Post-Condition: The item of the included data will be posted.
function postItem(data)
{
    // Function is meant to emulate the
    // "POST" endpoint of an API.
    console.log("Accessing POST...");
    console.log("New data posted: " + data);
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
        //Item was successfully found.
    }
    else
    {
        console.log("Error: unable to find item for deletion.");
    }
}

function putItem()
{
    // Function is meant to emulate the
    // "PUT" endpoint of an API.
    console.log("Accessing PUT...");
    console.log("Item successfully PUT into list.");
}

function updateItem(data)
{

    // "UPDATE" endpoint of an API.
    console.log("Accessing UPDATE...");
    console.log("Data updated to: " + data);

    // Check to see if data is correct. Otherwise,
    // return an error.
    if (data === 1234)
    {

    }
    else
    {
        console.log("Error: data does not match.");
    }
}

function errorMessage(value){
    switch(value){
        case 200:
            console.log("No Errors!");
            break;
        case 404:
            console.log("Error: Item not found or does not exist.");
            break;
        case 500:
            console.log("Server Error.");
            break;
    }
}

// Pre-Condition: This function accepts no arguments.
// Post-Condition: The code in the driver will be
// tested.
function testDriver()
{
    const item1 = new Item("Can", 24);
    item1.present();

    const item2 = new Item("Lettuce", 48);
    item2.present();

    item2.setName("Milk");
    console.log("Item2 has been updated to: " + item2.getName());

    item1.setId(28);
    console.log("Item1 has had its ID updated to: " + item1.getId());

    console.log("Testing addition vs. concatenation.");

    console.log("Value of item1 and item2 IDs added together: " + (item1.id + item2.id));
    // Check to see if the addition results in the id values being summed or stringed together.
    console.log("Value of item1 and item2 IDs concatenated: " + item1.id + item2.id);
    // For comparison, here is what the addition looks like without parentheses.

    // End of testDriver() function.
}