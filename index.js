/**What is an object?
 * an object is a collection of properties, a property is an association between a key and value
 */
const firstPlayer = {
    /*a property is in two ways we have the key/name and the value */
    name : "Timothy",
    /*e.g name is the key/name and Timothy is the value for that key */
    marker : "X",
    "Can play again" : "no"
}
/*Different ways of accessing properties present in  a object are
1. the dot notation method.
2. the bracket method. This method however works on object keys which are strings and include spaces between them.
*/
function player(firstPlayer)
{
    // console.log(firstPlayer.name);
    // console.log(firstPlayer.marker);
    // console.log(firstPlayer["Can play again"]);
}
player(firstPlayer);


/**The above is a good way to create object but we have a lot of limitations using that kind of approach
 * The main problem is that whenever we need to create a new object we have to write a full object again.
 * 
 * we can solve that by using object contructor
 * what is an object contructor you may ask? an object contructor is a function used to create new objects.
 * Below let us see how to work with contructors
 */

///////////////////////


function gamePlayers(name,marker){
    this.name = name;
    this.marker = marker;
    this.call_name = (name) => {
        console.log("My name is " + this.name);
    }
}

const newPlayer = new gamePlayers("rensy","O");
const secPlayer = new gamePlayers("Timo","X");
gamePlayers.prototype.sayname = function (){
    console.log("Hello there " + this.name);
}
console.log(Object.getPrototypeOf(secPlayer) === gamePlayers.prototype);
newPlayer.sayname();
secPlayer.sayname();
// console.log(newPlayer.name);
// console.log(newPlayer.marker);
// console.log(secPlayer.name);
// console.log(secPlayer.marker);
// newPlayer.call_name();
// secPlayer.call_name();