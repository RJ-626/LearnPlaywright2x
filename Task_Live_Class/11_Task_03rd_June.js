
/*String Reverse | Palindrome Program

Given a string , Reverse it and print true if they are same.

Madam is palindrome, pramod is not*/

//using string methods to reverse a string and check for palindrome
let str = "madam";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
console.log(str === reversedStr);

//using for loop to reverse a string and check for palindrome
let str2 = "pramod";
let reversedStr2 = "";
for (let i = str2.length - 1; i >= 0; i--) {
    reversedStr2 += str2[i];//reversedStr2 = reversedStr2 + str2[i]- it means we are adding each character of str2 in reverse order to reversedStr2
}
console.log(reversedStr2);
console.log(str2 === reversedStr2);

//using recursion to reverse a string and check for palindrome
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1)); //we are taking the last character of the string and adding it to the result of the recursive call with the rest of the string (excluding the last character)
    }
}
let str3 = "madam";
let reversedStr3 = reverseString(str3);
console.log(reversedStr3);
console.log(str3 === reversedStr3);

//using built-in method to reverse a string and check for palindrome
let str4 = "pramod";
let reversedStr4 = [...str4].reverse().join('');//we are using the spread operator to convert the string into an array of characters, then we are reversing the array and joining it back into a string
console.log(reversedStr4);
console.log(str4 === reversedStr4);


//Java Anagrams- Two strings are anagrams if they contain the same characters in a different order. For example, "listen" and "silent" are anagrams.

//using function to check if two strings are anagrams
function areAnagrams(str1, str2) {
    let sortedStr1 = str1.split('').sort().join(''); //we are splitting the string into an array of characters, sorting the array, and then joining it back into a string. This will give us a sorted version of the string, which we can compare with the sorted version of the other string to check if they are anagrams.
    let sortedStr2 = str2.split('').sort().join(''); //we are doing the same thing for the second string to get its sorted version.
    return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false


