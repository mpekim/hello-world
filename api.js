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