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

    }

    setId(){
        
    }
    // Stub for Item class.
}

function getItem()
{
    // Function is meant to emulate the
    // "GET" endpoint of an API.
    console.log("Accessing GET...");
}

function postItem()
{
    // Function is meant to emulate the
    // "POST" endpoint of an API.
    console.log("Accessing POST...");
}

function deleteItem()
{
    // Function is meant to emulate the
    // "DELETE" endpoint of an API.
    console.log("Accessing DELETE...");
}

function putItem()
{
    console.log("Accessing PUT...");
}

function updateItem()
{
    console.log("Accessing UPDATE...");
}