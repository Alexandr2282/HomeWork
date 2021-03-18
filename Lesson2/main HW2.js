// Переменная содержит в себе строку. Вывести строку в обратном порядке.
let str = "qwerty";
let newStr = "";

for (let i = str.length-1; i >= 0; i--) {
    newStr += str[i];
}
console.log(newStr);


// Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.
let factorial = 5;
let res = factorial;
for (let i = factorial - 1; i > 0; i--) {
    res *= i;
}
console.log(res);


//Дано число - вывести первые N делителей этого числа нацело.
let num = 10000;
let numDividers = 4;
let arr = [];
let caunt = 0;
for (let i = 2; i <= num; i++) {
    if (num % i == 0 && caunt < numDividers) {
        arr.push(num / i);
        caunt++;
    }
}
console.log(arr);


//Найти сумму цифр числа которые кратны двум
let bigNum = 123456789;
let bigString = bigNum + "";
let sum = 0;
for (i of bigString) {
    if (i % 2 == 0) {
        sum += +i;
    }
}
console.log(sum);


//Найти минимальное число которое больше 300 и нацело делиться на 17
let minNum = 300;
let divider = 17;
for (let i = minNum; i <= (minNum * divider); i++) {
    if (i % 17 == 0) {
        console.log(i);
        break;
    }
}


//Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа.
let num1 = 80;
let num2 = 15;
while ( num1 != 0 && num2 != 0) {
    if (num1 > num2) {
        num1 = num1 % num2;
    } else {
        num2 = num2 % num1;
    }
}
console.log(num1 + num2);