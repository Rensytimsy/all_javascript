// THE CLOSURE
//The closure is a combination of functions and the state at which the function was declared.

//fisrt create one function that takes two parameters and then sum them up or i can create two differnt functions and 
    //give them valus on the console.
function add_nums(first_number){
    let num_one = first_number;
    return function resulting(second_number){
        let num_two = second_number;
        return num_one + num_two
    }
}

let result = add_nums(5);
// console.log(result(5));

//THE FACTORY FUNCTION
//unlike constructor functions factory functions levy the use o closures.
//disadvantage : when a constructor function every time you skip the new keyword you will end up getting an error.
function user(name){
    this.name = name;
    this.discordName = "@ " + name;
}

// console.log(user("Rensy"));

function another_user(name){
    const discordName = "@ " + name;
    //The return statements takes care of the object to be returned.
    return {name, discordName}
}
console.log(another_user("Rensy"));

