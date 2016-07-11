

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
//
// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

//step is always a positive value

// function myRange(start, stop, step) {
//     var myArr = [];
//     var accending = 1;
//     var increasing = 1;
//     if (start > step) {
//         accending = -1;
//     }
//     if (step < 0) {
//         increasing = -1;
//     }
//     for (var i = start; accending * i <= stop; i += (step * (accending))) {
//         myArr.push(i);
//
//     }
//     return myArr;
// }
//
// function sum(array) {
//     return array.reduce(function(a, b) {
//         return a + b;
//     });
// }


// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as an argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
//
// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

// function reverseArray(array) {
//     var newArray = [];
//     array.map(function(element) {
//         newArray.unshift(element);
//     });
//     return newArray;
// }
//
// function reverseArrayInPlace(array) {
//     for (var i = 0; i < Math.floor(array.length / 2); i++) {
//         var old = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = old;
//     }
//     return array;
// }

// A List
// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
//

// The resulting objects form a chain, like this:

// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.
//
// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as an argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
//
// If you haven’t already, also write a recursive version of nth.



// function arrayToList(array) {
//     if()
//
// }


function objConstructor(array, obj={}, objArray = []) {
    if (array.length === 0) {
        return objArray[0];
    }
    if (array.length === 1) {
        obj.value = array.shift();
        obj.rest = null;
        objArray.push(obj);
        return objConstructor(array, obj, objArray);

    }
    if (!obj.hasOwnProperty('value')) {
        obj.value = array.shift();
        obj.rest = {};
        objArray.push(obj);
        return objConstructor(array, obj.rest, objArray);
    }
}

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

function arrayConstructor(obj) {
    var array = [];
    while (obj) {
        array.push(obj.value);
        obj = obj.next;
    }
    return array;
}
(function(){

function prepend(obj, val) {
    var newObj = {
        value: val,
        next: obj
    };

    return newObj;
}

function nth(obj,val) {
    while(obj) {
        if (obj.value === val)
            return obj;
    obj = obj.next;
}
    return undefined;
}

console.log(nth(list,10));

})();
