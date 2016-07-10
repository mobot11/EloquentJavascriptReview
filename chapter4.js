// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
//
// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

//step is always a positive value

function myRange (start,stop,step) {
    var myArr = [];
    var accending = 1;
    var increasing = 1;
    if (start > step) {
        accending = -1;
    }
    if (step < 0) {
        increasing = -1;
    }
    for (var i = start; accending*i <= stop; i+=(step*(accending))) {
        myArr.push(i);

}
    return myArr;
}

// function sum(array) {
//   return array.reduce(function(a,b) {
//     return a + b;
//   });
// }

console.log(myRange(1,10,2));
console.log(myRange(100, -5,2));
