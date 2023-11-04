/**
 * OBJECTS
 * an object is simply a collection of properties
 * A constructor object is used to create other objects
 * There are different ways of accessing values present in a object
 * 1. The dot notation
 * 2. Bracket notation
*/
let person = {
    name: "rensy",
    age : 20,
    "nationalism" : "Kenyan"
}
/**Below is a good example of accessing value present in an object using dot notation */
// console.log(person.name);
// console.log(person.age);
/**Below is a good example of accessing value present in an object using bracket notation */
// console.log(person["nationalism"]);

/**
 * Above is quite a good approach when working with objects but we have limitations with this method
 * 1.Every time we need an object with the same parameters we need to create a new object
 * 2.DRY (don't repeat yourself is not practiced).
 * 
 * To avoid that we can have this approach on objects.
 * 
 * THE OBJECT CONSTRUCTOR WAY
 * Basically an object constructor is a function that when called creates a new object
 * Below is a constructor object that has three properties as object names.
 */

function newObj(name, age, nationalism){
this.name = name;
this.age = age;
this.nationalism = nationalism;
this.details = function() {
    return `My name is ${name}, am ${age} years of age and i am from ${nationalism}`;
}
}

const newPerson = new newObj("Timothy", 20, "Kenyan");
// console.log(newPerson);
// console.log(newPerson.details());

/**
 * OBJECTS PROTOTYPES
 * A good example of a prototype is this "const newPerson = new newObj("Timothy", 20, "Kenyan");" inherits from newObj
 * A prototype is basically an oject that the original object inherits from.
 * let's see what that means using the objectnewObj
 * 
 * The code below logs to the console true because "newPerson" object inherits from the original object "newOBJ"
 * If an object does not inherit from the same object one will get false at the console
 */
console.log(Object.getPrototypeOf(newPerson) === newObj.prototype);
//Using prototypes one can also assign new properties to the original object and can be accessed by objects which have inherited
//Here is a good example
newObj.prototype.sayName = function () {
    console.log(`Hi my name is ${this.name}`);
}
//The code above shows how one can use a prototype to add new properties tho the object.
//Lets see what the output will be.
newPerson.sayName();
//What we get to the console is "Hi my name is Timothy" which is what the new property contains.

//Prototype 
//a prototype is an object that inherits from an orignal object.
function newObj(name, colour){
    this.name = name;
    this.colour = colour;
}
function newObj2(name, colour){
    this.name = name;
    this.colour = colour;
}
let rand2 = new newObj2("Timo", "blue");
let randObj = new newObj("rensy", "red");
console.log(randObj.name);
console.log(Object.getPrototypeOf(rand2) === newObj.prototype);