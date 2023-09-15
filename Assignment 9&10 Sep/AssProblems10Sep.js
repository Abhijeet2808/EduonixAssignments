// 1.   find minimum number in array

let arr1 = [1, 6, 8, 3, 18, 15, 3, 88];
if (arr1.length !== 0) {
  let minimum = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < minimum) {
      minimum = arr1[i];
    }
  }
  console.log(`Minumum: ${minimum}`);
} else {
  console.log("Array is empty");
}
//_________________________________________________________________________________________
//Problem 2: Reverse an Array

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80];
if (arr2.length !== 0) {
  let reverseArr = [];
  for (let i = arr2.length - 1; i >= 0; i--) {
    reverseArr.push(arr2[i]);
  }
  console.log(reverseArr);
} else {
  console.log("Array is empty");
}

//_________________________________________________________________________________________________
//Problem 3: Find the Average of an Array

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

//______________________________________________________________________________________
//Problem 4: Remove Even Numbers

let arr3 = [1, 6, 8, 3, 18, 15, 3, 88];
let oddArray = [];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 !== 0) {
    oddArray.push(arr3[i]);
  }
}
console.log(oddArray);
