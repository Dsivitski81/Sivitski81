//2
let i = 89;
while (i >= 11) {
  console.log(i);
  i--;
}
console.log("");
//3
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);
console.log("");
//4
let sum2 = 0;
for (let i = 1; i <= 5; i++) {
  sum2 = 0;
  for (let j = 1; j <= i; j++) {
    sum2 = sum2 + j;
  }
  console.log(`Сумма числа ${i}=${sum2}`);
}
console.log("");
//6
let p = 1;
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    p = i * j;
    console.log(`${i} * ${j} = ${p}`);
  }
  console.log("");
}
console.log("");
//7
let iteration = 0;
for (let i = 1000; i > 50; i = i / 2) {
  iteration = iteration + 1;
  console.log(i);
}
console.log(`Количество итераций цикла = ${iteration} `);
console.log("");

//9.1
let string = "4 98 4 6 1 32 4 65 4 3 5 7 87 7 10 1 36";
let myArray = string.split(" ").map((i) => Number(i));
console.log(myArray);
let minvalue = myArray[0];
for (let i = 1; i <= myArray.length; i++) {
  if (myArray[i] < minvalue) {
    minvalue = myArray[i];
  }
}
console.log(minvalue);
console.log("");
//9.1
let string1 = "4 98 4 6 1 32 4 65 4 3 5 7 87 7 10 1 36";
let myArray1 = string.split(" ").map((i) => Number(i));
console.log(myArray);
let maxvalue = myArray[0];
for (let i = 1; i <= myArray.length; i++) {
  if (myArray[i] > maxvalue) {
    maxvalue = myArray[i];
  }
}
console.log(maxvalue);
console.log("");
//10
let n = 123;
let digits = ("" + n).split("").map((i) => Number(i));
sum1 = 0;
iteration1 = 0;
for (let i = 0;  i< digits.length; i++) { 
      iteration1=iteration1+1;
      sum1=sum1 +digits[i];
  console.log(digits[i]);
  }
  console.log("");
  console.log(sum1);
  console.log("");
  console.log(iteration1);
  console.log("");
for (let i = digits.length-1;  i>=0; i--) { 
  console.log(digits[i]);
}
console.log("");




//10.2;
/*let n1 = 123;
let resalt = 0;
for (let i = n1; i <= 0; i++) {
  n1 = n1 / 10;
  resalt = resalt + (n1 % 10);
}
console.log(resalt);*/
