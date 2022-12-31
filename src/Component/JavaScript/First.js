console.log("Hello sunil")

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById("demo").innerHTML = fruits.toString();

//JavaScript Array Methods

console.log(fruits.toString()) // toString() converts an array to a string of (comma separated) array values.
console.log(fruits.join(" * ")) // join() method also joins all array elements into a string
console.log(fruits.pop()); // pop() method removes the last element from an array:
console.log(fruits);  // after pop()
let length= fruits.push("Kiwi"); //push() method adds a new element to an array (at the end):
console.log("Fruit names - "+fruits+" ---- and Length of fruits - "+length);

////Sorting an Array
console.log("------Sorting an Array--------- ")
console.log(fruits.sort());

console.log(fruits.reverse())
//Numeric Sort
console.log("===========Numeric Sort=========")
const points = [40, 100, 1, 5, 25, 10]; 

console.log("Asc order --- "+points.sort(function(a, b){return a - b}))
console.log("Desc Order ---- "+points.sort(function(a, b){return b - a}))

function sum(a,b)  
{  
return a+b;  
}  
console .log(sum(2,3))

