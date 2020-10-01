let contacts = ["Mary", "Joel", "Danny"];

// assigning contacts reference to personalFriends
// now both references to same object
// let personalFriends = contacts;

let personalFriends = [...contacts]; // making a new copy and assigned to personalFriends

console.log(personalFriends);

contacts.push("Zoey");

console.log(`Contacts: ${contacts} and Personal Friends: ${personalFriends}`);


// For objects

let person = {    
    name: "Cassidy Williams",
    age: 35,
    city: "New York"
};

console.log(person);
console.table(person);

let employee = {
    ...person,
    salary: 900000,
    position: "Web Developer"
};

console.log(employee);
console.table(employee);

// Challenge

// Now that you are inside of the shop, you have a basket with all the products
// from your list, but you want to add a few more

// Create a new array called shoppingBasket, that will be a copy of the shoppingList
// array, and add some products into it

const shoppingList = ["eggs", "milk", "butter"];

let shoppingBasket = [...shoppingList, "apples", "cookies"];

console.log(shoppingList);
console.log(shoppingBasket);