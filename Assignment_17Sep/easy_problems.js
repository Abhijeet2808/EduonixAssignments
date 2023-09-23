// 1. Reverse a string without using the reverse method or a function.

let input = "Abhijeet";
let rev_input = "";

for (let i = input.length - 1; i >= 0; i--) {
  rev_input += input.charAt(i);
}
console.log(`Reverse of ${input} is ${rev_input}`);

//__________________________________________________________________________________________________________________

//2. Count the number of vowels in a string without using functions.

let input1 = "Abhijeet Mehetre";
let count = 0;
let curr_char;
let flag;

for (let i = -0; i <= 0; i++) {
  flag = false;
  curr_char = input1.charAt(i);
  curr_char = curr_char.toLocaleLowerCase();

  switch (curr_char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      count++;
  }
}
console.log(count);

//_______________________________________________________________________________________________________________________

// 3. Check if a string is a palindrome without using functions.

let input2 = "Mom";
let reverse_input = "";

for (let i = input2.length - 1; i >= 0; i--) {
  reverse_input += input2.charAt(i);
}
if (input2.toLocaleLowerCase === reverse_input.toLocaleLowerCase) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

//______________________________________________________________________________________________________________________

// 4. Capitalize the first letter of each word in a sentence without using functions.

let input3 = "hi this is abhijeet mehetre";
let capitilize_input = "";
let current_char;
let flag = true;
for (let i = 0; i < input3.length; i++) {
  current_char = input3.charAt(i);

  if (flag == true && current_char !== " ") {
    capitilize_input += current_char.toLocaleUpperCase();
    flag = false;
  } else {
    capitilize_input += current_char;
    if (current_char === " ") {
      flag = true;
    }
  }
}
console.log(capitilize_input);

//__________________________________________________________________________________________________________

// 5. Remove all spaces from a string without using functions.

let input4 = "Remove all spaces from a string without using functions";
let Remove_space = "";

for (i = 0; i < input4.length; i++) {
  if (input4.charAt(i) !== " ") {
    Remove_space += input4.charAt(i);
  }
}
console.log(Remove_space);
