//1. Find the longest word in a sentence without using functions.

let sentence = "Find the longest word in a sentence without using functions.";
let curr_Word = "";
let longest_word = "";
let current_char;

for (let i = 0; i < sentence.length; i++) {
  current_char = sentence[i];

  if (current_char !== " ") {
    curr_Word += current_char;
  } else {
    if (curr_Word.length > longest_word.length) {
      longest_word = curr_Word;
      curr_Word = "";
    }
  }
  if (curr_Word.length > longest_word.length) {
    longest_word = curr_Word;
  }

  console.log(longest_word);
}

//___________________________________________________________________________________________________

// 4. Truncate a string to a specified length and add "..."
//    at the end if the string is longer than the specified length without using functions.

let input2 =
  "Truncate a string to a specified length and add '...'at the end if the string is longer than the specified length without using functions";
const maximum_length = 40;
let truncate_String = "";

for (let i = 0; i < maximum_length; i++) {
  if (i < input2.length) {
    truncate_String += input2.charAt(i);
  } else {
    break;
  }
}

if (input2.length > maximum_length) {
  truncate_String += "...";
}

console.log(truncate_String);
