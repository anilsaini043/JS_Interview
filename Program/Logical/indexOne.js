// 1): Find the longest word in the given string

/*
let str = "My name is Anil Kumar Saini working as frontend developer"

let words = str.split(" ");
let longWord = "";

for (let word of words) {
  if (word.length > longWord.length) {
    longWord = word
  }
}
console.log(longWord) 
*/


// 2): Write a function to generate a HashTag from given string
// ex: anil kumar saini  ---> AnilKumarSaini

/*
function hashTagGenerator() {
  let name = "anil kumar saini";
  let words = name.split(" ");
  let hashName = "";
  for (let word of words) {
    hashName = hashName + word[0].toUpperCase() + word.slice(1, word.length)
  }
  return hashName;
}

console.log(hashTagGenerator()) 
*/



// 3): Count occurence of character  --> Ex: HELLO  --> L = 2 times

/*
let strr = "Anil kumar saini";
let obj = {};

for(let el of strr.replaceAll(" ", "")) {
  let text = el.toLowerCase()
  obj[text] = obj[text] ? obj[text] + 1 : 1
}

console.log(obj)
*/



// 4): Check triangle types. --> Ex: Equalateral, Isoscale, Scalene

/*
function checkTriangle(side1, side2, side3){
	if((side1 === side2) && (side1 === side3)){
  	return "Equalateral Triangle"
  }else if( (side1 === side2) || (side2 === side3) || (side1 === side3)){
  	return "Isoscale Triangle"
  }else{
  	return "Scalene Triangle"
  }
}

console.log(checkTriangle(3,3,3)) 
*/


// 5): Sort an array elements --> Alphabetecally and Numbers also

// Method one:
/*
let numArrOne = [8, 5, 6, 4, 7, 0, 1, 4, 3, 5, 2];

function sortNumArr() {
  let temp;
  for (i = 0; i <= numArr.length - 1; i++) {
    for (j = i + 1; j <= numArr.length - 1; j++) {
      if (numArr[j] < numArr[i]) {
        temp = numArr[j];
        numArr[j] = numArr[i];
        numArr[i] = temp;
      }
    }
  }

  return numArrOne;

}

console.log("Sorted--> ", sortNumArr())

// Method second:
let numArrTwo = [8, 5, 6, 4, 7, 0, 1, 4, 3, 5, 2];

let sortNum = numArrTwo.sort();
console.log(sortNum)

// Method three
let stringsArr = ["a", "A", "b"].sort();
console.log(stringsArr); 

*/

// 6): Determine a given string is Palandrome or not. --> Ex: MADAM === MADAM  -> true
// 7): Find the Max in the given array
// 8): Find the Factorial finder of the number
// 9): Calculate the Average of given list of the numbers
// 10): Check given two arrays are equal or not.
// 11): Write a function that takes a number as input and returns the sum of its digits.
// 12): Remove duplicates from an array integer.
// 13): Count the Vowels in the given list of string.
// 14): Check base 2 and power 3 = 8 or others.
// 15): Find the sum of square of each array element.
// 16): Find min value from array. Array may have any types of number like +, - or empty array
// 17): Write a function to convert a string to camel case and snake_case.
// Ex:- Anil kumar saini  ---> anilKumarSaini   (camel case)
// Ex:- anilKumarSaini  ---> anil_kumar_saini  (snake_case)

// 18): Write a function to check if a character is uppercase or lowercase.
// 19): Write a function to check if a given string starts with a specific substring.
// 20): Write a function to reverse a string without using any built in methods or library. Note: The function should take a string as input and return the reversed string.

// 21):Write a function to take a parameter as array of numbers input and return the mean (average), medien and mode of it.
// 22): Find the occurance of each array element
// 23): Find the factorial of number using recursion
// 24): Fibonic using recursion
// 25): Repeat String  -> in js we have repeat method  --> repeatFunc("anil", 3) // anilanilanil
// 26): Truncate a String  -->  truncFunc("anil kumar saini", 5) // kumar saini
// 27): write a function to generate an array containing consecutive numbers from a and b inclusive both --> generateNum(0,5) // [0,1,2,3,4,5]  and Do it as well recursion

