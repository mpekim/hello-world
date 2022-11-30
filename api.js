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

    present(){
        console.log("Item name: " + this.name);
        console.log("Item ID: " + this.id);
    }
    
}

function getItem()
{
    // Function is meant to emulate the
    // "GET" endpoint of an API.
    console.log("Accessing GET...");
}

function postItem(data)
{
    // Function is meant to emulate the
    // "POST" endpoint of an API.
    console.log("Accessing POST...");
    console.log("New data posted: " + data);
}

function deleteItem()
{
    // Function is meant to emulate the
    // "DELETE" endpoint of an API.
    console.log("Accessing DELETE...");
}

function putItem()
{
    // Function is meant to emulate the
    // "PUT" endpoint of an API.
    console.log("Accessing PUT...");
}

function updateItem(data)
{
    // Function is meant to emulate the
    // "UPDATE" endpoint of an API.
    console.log("Accessing UPDATE...");
    console.log("Data updated to: " + data);
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

    console.log("Value of item1 and item2 IDs added together: " + (item1.id + item2.id));
    // Check to see if the addition results in the id values being summed or stringed together.
    console.log("Value of item1 and item2 IDs concatenated: " + item1.id + item2.id);
    // For comparison, here is what the addition looks like without parentheses.
}