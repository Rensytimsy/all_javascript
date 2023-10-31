/**
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
console.log(person.name);
console.log(person.age);
/**Below is a good example of accessing value present in an object using bracket notation */
console.log(person["nationalism"]);

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
console.log(newPerson);
console.log(newPerson.details());