//Find the sum of all the numbers in the array.
let num1 = [20, 60, 80, 100, 200, 400];
if (num1.length != 0) {
  let sum = 0;

  for (let i = 0; i < num1.length; i++) {
    sum += num1[i];
  }
  console.log("The sum of all number in array:" + sum);
} else {
  console.log("Array is empty");
}

//Find the largest number in the array.
let num2 = [10, 60, 70, 90, 50, 100, 5];
if (num2.length != 0) {
  let largeNum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < num2.length; i++) {
    if (num2[i] > largeNum) {
      largeNum = num2[i];
    }
  }
  console.log("Largest is Number in array is " + largeNum);
} else {
  console.log("Array is empty");
}

//Find the smallest number in the array.
let num3 = [10, 60, 70, 90, 50, 100, 5];
if (num3.length != 0) {
  let smallNum = Number.POSITIVE_INFINITY;
  for (let i = 0; i < num3.length; i++) {
    if (num3[i] < smallNum) {
      smallNum = num3[i];
    }
  }
  console.log("Smallesr Number in array is:" + smallNum);
} else {
  console.log("Array is empty");
}

//Calculate the average of all the numbers in the array
let num4 = [10, 60, 70, 90, 50, 100, 5];
if (num4.length !== 0) {
  let sum = 0;
  let avrg = 0;
  for (let i = 0; i < num4.length; i++) {
    sum += num4[i];
  }
  avrg = sum / num4.length;
  console.log(`Average of all numbers: ${avrg}`);
} else {
  console.log("Array is empty");
}
