//slicing and combining arrays
let a = [1, 2, 3, 4, 5];
let sliced = a.slice(1, 4); //slice(start, end) => (start index,end -1 index) -> start is the index at which to begin extraction, and end is the index at which to end extraction (not included). If end is not provided, slice() will extract through the end of the array.
console.log(sliced); //Output: [2, 3, 4] //The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

let s = a.slice(1, 3); //slice(start, end) => 
console.log(s); //Output: [2, 3] //The original array will not be modified.

let p = a.slice(2); //start from index 2 to the end of the array
console.log(p); //Output: [3, 4, 5] //The original array will not be modified.

console.log(a.slice(-2)); //Output: [4, 5] //Negative indices count back from the end of the array.

console.log(a.slice(0)); //Output: [1, 2, 3, 4, 5] //The original array will not be modified.


let r = [10, 20, 30, 35, 40];
let m = r.splice(2, 1); //splice(start, deleteCount) => (start index, number of elements to delete) -> start is the index at which to start changing the array, and deleteCount is the number of elements to remove from the array. If deleteCount is not provided, all elements from start to the end of the array will be removed.
console.log(m); //Output: [30] //The splice() method returns an array containing the deleted elements. If no elements are removed, an empty array is returned.
console.log(r); //Output: [10, 20, 35, 40] //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.


/*Quick Comparison between slice and splice :

Feature	: slice(start, end)	                splice(start, deleteCount, ...items)
Mutates : original?	❌ No	               ✅ Yes
Returns	: New copied array	                 Array of removed items
Second parameter :	End index (exclusive)	Number of items to delete
Extra arguments	 : Ignored	                 Items to insert
Negative indices : 	✅ Supported (from end)	✅ Supported (from end)

Memory Trick:
- slice → like a slice of pizza (you get a piece, the whole pizza is still there)
- splice → like splicing film tape (you cut and join, changing the original)*/