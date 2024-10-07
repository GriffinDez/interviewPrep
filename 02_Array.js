//. Explain Traversal in Array
//> Array, where we can store the multiple values under one name.
//> classname of array, 'Array'
let A_arr = [1, 2, 3]
let A_arr1 = ['Hi', true, 456]
console.log(A_arr);
console.log(A_arr1[0]);
console.log(A_arr.length);
console.log(A_arr[A_arr.length - 1]);

let A_arr2 = [
    { pCode: 1, pName: 'Apple' },
    { pCode: 2, pName: 'Banana' },
    { pCode: 3, pName: 'C' }
]
console.log(A_arr2[1].pName);   // need to pick the property from which index of an array.

let arr = ['ES5', 'ES6', 'ES7'];
for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    console.log('forLoop---');
    console.log(ele);
}

//?> ================================================================================

//. Ways to loop through an array
//= for-of
//> returns the Value of an ele from an array
for (const ele of arr) {
    console.log('forOf---');
    console.log(ele);
}

//= for-in
//> returns the indexValue / KeyValue of an ele from an array
for (const ele in arr) {
    console.log('forIn---');
    console.log(ele);
}
//= forEach
arr.forEach((ele, index) => {
    console.log('ForEach---');
    console.log(ele);
});

//?> ================================================================================

//. Add, Remove, Insert, Replace elements in Array
let arrAdd = ['1', '2', '3', '4']

//= Add, 
//> using push(), unshift()
console.log(arrAdd.push('Asd'));   // 5, returns newLength
console.log(arrAdd);    //[ '1', '2', '3', '4', 'Asd' ]

console.log(arrAdd.unshift('zxc')); // 6, returns newLength
console.log(arrAdd);    //[ 'zxc', '1', '2', '3', '4', 'Asd' ]

//=> Remove, using pop(), shift()
let arrR1 = ['A', 'B', 'C', 'D']
let arrR2 = ['A', 'B', 'C', 'D']
let arrSplice = ['A', 'B', 'C', 'D']
console.log(arrR1.pop());    // D
console.log(arrR1);  // [ 'A', 'B', 'C' ]

console.log(arrR2.shift());  // A
console.log(arrR2); // [ 'B', 'C', 'D' ]

console.log(arrSplice.splice(2));   // deletes all the ele from Index 2. returns the ele of the deleted array.
console.log(arrSplice.splice(0));   // deletes all the ele from Index 0. returns the ele of the deleted array.


//?> ================================================================================

//-> Search Operation in Array
//> 

//?> ================================================================================


//. use of map() method..?

//?> ================================================================================


//. How to flaten 2D array

//?> ================================================================================


//. how to sort an Array

//?> ================================================================================


//. Array Destructuring
