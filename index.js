// Code your solution here

function findMatching(array, string) {
    return array.filter(function (name) {
        if (name.toLowerCase() === string.toLowerCase()) {
            return name;
        }
    });
}

//This is forcing all names in the array to lowercase, as well as the original string argument to lowercase, and comparing equality to determine if the name is added to the new array.

function fuzzyMatch(array, string) {
    return array.filter(function (name) {
        if (name[0] === string[0]) {
            return name;
        }
    });
}

//You can use bracket notation on a string to identify the specific characters you would like to refer to. Starts with an index of 0 similar to an array.

function matchName(array, string) {
    return array.filter(function(element) {
        return element.name === string;
    })
} 

//return all of the elements in array, where element.name === string is true, into a new array. Here we are passing the elements (objects) of the original array into a callback function that is returning true or false if element.name === string. If the value is true, that element (object) gets added to a new array.