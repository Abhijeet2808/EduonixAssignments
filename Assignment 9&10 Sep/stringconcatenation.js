/*String Concatenation

Write a JavaScript function that takes an array of strings and concatenates them into a single string,
separated by a specified delimiter.For example, if the array is["apple", "banana", "cherry"] and the delimiter is "-",
the function should return "apple-banana-cherry." */

let arr = ["apple", "banana", "cherry", "watermelon", "pineapple"];
if (arr !== 0) {
  let stringConcatenate = arr.join("-");
  console.log(stringConcatenate);
} else {
  console.log("Array is empty");
}
