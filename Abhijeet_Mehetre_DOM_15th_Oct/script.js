// Get the images and form
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const dice = document.getElementById("dice");
const image4 = document.getElementById("image4");
const form = document.getElementById("registration-form");
const coupon = document.getElementById("coupon");
const congrats = document.getElementById("congrats");

// Add event listeners to the images
image1.addEventListener("click", showForm);
image2.addEventListener("click", showName);
dice.addEventListener("click", rollDice);
image4.addEventListener("click", generateCoupon);

// Variables for the dice game
let diceCount = 0;
let diceSum = 0;

// Array to keep track of clicked images
const clickedImages = [];

// Function to show the registration form
function showForm() {
  form.style.display = "block";
  clickedImages.push("image1");
  image1.removeEventListener("click", showForm);
}

// Function to show the registered name and username
function showName() {
  const name = localStorage.getItem("name");
  const username = localStorage.getItem("username");
  alert(`Name: ${name}\nUsername: ${username}`);
  clickedImages.push("image2");
  image2.removeEventListener("click", showName);
}

// Function to roll the dice
function rollDice() {
  if (clickedImages.includes("image1") && clickedImages.includes("image2")) {
    if (diceCount < 3) {
      const value = Math.floor(Math.random() * 6) + 1;
      diceSum += value;
      diceCount++;
      alert(`Dice roll ${diceCount}: ${value}`);
    }
    if (diceCount === 3) {
      if (diceSum > 10) {
        clickedImages.push("dice");
        image4.style.opacity = 1;
      } else {
        alert("Try again after scoring more than 10");
      }
    }
    if (diceCount > 3) {
      alert("Bad luck");
      dice.removeEventListener("click", rollDice);
    }
  }
}

// Function to generate the coupon
function generateCoupon() {
  if (clickedImages.includes("dice")) {
    const couponCode = Math.random().toString(36).substring(2, 14);
    coupon.textContent = couponCode;
    coupon.style.display = "block";
    clickedImages.push("image4");
    image4.removeEventListener("click", generateCoupon);
    congrats.style.display = "block";
  }
}

// Function to handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const username = event.target.elements.username.value;
  localStorage.setItem("name", name);
  localStorage.setItem("username", username);
  form.style.display = "none";
  clickedImages.push("form");
  image2.style.opacity = 1;
});

// Disable images that have not been clicked yet
function disableImages() {
  if (!clickedImages.includes("image1")) {
    image2.style.opacity = 0.5;
    dice.style.opacity = 0.5;
    image4.style.opacity = 0.5;
  }
  if (!clickedImages.includes("image2")) {
    dice.style.opacity = 0.5;
    image4.style.opacity = 0.5;
  }
  if (!clickedImages.includes("dice")) {
    image4.style.opacity = 0.5;
  }
}

// Disable images on page load
disableImages();
