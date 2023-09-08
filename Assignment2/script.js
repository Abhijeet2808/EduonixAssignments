/* 
1)  Write a JavaScript program that asks the user for their age. 
    If the user is over 18, the program should display the message "You are an adult.
    Otherwise, the program should display the message "You are a minor."
*/

let age = prompt("Enter your age"); //ask user for age
if (age >= 18) {
  //check user is over 18
  console.log("You are an adult");
} else {
  console.log("you are a minor");
}

/*______________________________________________________________________________________________________________________________________

2)  Write a JavaScript program that asks the user for their username and password.
    If the username and password are correct, the program should display the message "Login successful."
    Otherwise, the program should display the message "Login failed." */

const validuserName = "Abhijeet"; //correct username
const validpassWord = "Abhijeet@2808"; //correct password

const inputuserName = prompt("Enter your User Name"); //ask user for username
const inputpassWord = prompt("Enter your password"); //ask user for password

//check the username and password is correct
if (validuserName === inputuserName && validpassWord === inputpassWord) {
  console.log("Loging Successful");
} else {
  console.log("Login failed");
}

/*___________________________________________________________________________________________________________________________________________

3)  Write a JavaScript program that generates a random number between 1 and 100. If the random number is even, 
    the program should display the message "The number is even." Otherwise, the program should display the message "The number is odd." */

const randomNum = Math.floor(Math.random() * 100) + 1; //Generate a random number between 1 and 100

if (randomNum % 2 === 0) {
  // Check if the random number is even or odd
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

/*_____________________________________________________________________________________________________________________________________

4)  Write a JavaScript program that asks the user for their favorite color. If the user's favorite color is red, 
    the program should display the message "Red is a beautiful color." Otherwise, the program should display the message
    "I like your choice of color." */

//Ask the user for their favorite color
let userfavColor = prompt("What is your favorite color?");

// Check if the favorite color is "red"
if (userfavColor.toLowerCase() === "red") {
  console.log("Red is a beautiful color.");
} else {
  console.log("I like your choice of color.");
}

/*____________________________________________________________________________________________________________________________________

5)  Write a JavaScript program that asks the user for their grade in school. If the user's grade is A, the program should display the message 
    "Congratulations on your excellent work!" Otherwise, the program should display the message "Keep working hard!" */

//Ask the user for their grade
let userGrade = prompt("Enter your Grade");

//check if the grade is "A"
if (userGrade.toUpperCase() === "A") {
  console.log("Congratulations on your excellent work!");
} else {
  console.log("Keep working hard!");
}
