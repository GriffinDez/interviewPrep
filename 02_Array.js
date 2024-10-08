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
console.log(arrR1.pop());    // D, Removes the last ele of an Array and returns it.
console.log(arrR1);  // [ 'A', 'B', 'C' ]

console.log(arrR2.shift());  // A, Removes the 1st ele of an Array and returns it.
console.log(arrR2); // [ 'B', 'C', 'D' ]

console.log(arrSplice.splice(2));   // deletes all the ele from Index 2. returns the ele of the deleted array.
console.log(arrSplice.splice(0));   // deletes all the ele from Index 0. returns the ele of the deleted array.


//?> ================================================================================

//-> Search Operation in Array
let searchArr = ['A','B', 'C','A','D','A']
//= indexOf()
//> arrName.indexOf(searchEle,[startIndex])
//> startIndex. default = 0
//> Returns the indexNo.of the ele where the item is found. 
//> If noSearchEle in array, returns -1.
//> if more than one match, returns the index of the 1st item found.
console.log(searchArr.indexOf('A'));    // 0, returns the index of the 1st occurance of the ele.
console.log(searchArr.indexOf('A', 2)); // 3, starts the searching from index 2.
console.log(searchArr.indexOf('a'));    // -1, indexOf() is caseSenstive.


//= lastIndexOf()
//> returns the last index of the ele found. If nothing found returns -1.
//> byDefault, startIndex = array.length - 1
console.log(searchArr.lastIndexOf('A'));    //5, lastIndexOf() starts searching from (array.length -1). i.e from the end.
console.log(searchArr.lastIndexOf('A',2));    //0, starts the search from backwards. i.e. the end of array.

//= includes()
//> returns boolean value, 
console.log(searchArr.includes('B',1));   // searches from index1 & returns true/False 

//. Conditional Search
let conSearchArr = [1000, 2000, 3000, 4000, 5000, 2500]
//= find()
//> takes a callback function, which is called for each ele.
//> have 4arguments, such as element, index, array OnWhich the opertion is performed, thisArg.
//> Returns the value of the 1st element in the array OR "undefined" if nothing found.
//> finds only 1val at a time.. Drawback
console.log(conSearchArr.find((ele, index, arr, thisArg)=>{return ele>2000}));  //3000, returns the 1st val which satisfies the condition.

//= findIndex()
//> returns the 1st index of the ele which satisfies the condition.
//> returns "undefined", if noValue found.
//> finds only 1value at a time.. Drawback
console.log(conSearchArr.findIndex((ele, index, arr, thisArg)=>{return ele>2000})); // 2, works same as find(), but returns the index instead of value.

//= filter()
//> returns the new Array of elements which satisfies the condition.
//> if nothing found, returns an empty Array. [].
console.log(conSearchArr.filter((ele, index, arr, thisArg)=>{return ele>2000})); // returns the new Array of ele which satisfies the condition rather than the single value.

//?> ================================================================================


//. use of map() method..?

//?> ================================================================================


//. How to flaten 2D array

//?> ================================================================================


//. how to sort an Array

//?> ================================================================================


//. Array Destructuring
