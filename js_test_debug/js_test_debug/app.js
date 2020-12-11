'use strict';

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    if (arr.length == 1) return arr[0];
    for (var i = 0; i < arr.length; i++)
        product *= multiplyAll(arr[i]);
    // Only change code above this line
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
