/*Переменная хранит в себе значение от 0 до 9. 
Написать скрипт который будет выводить слово “один”, если переменная хранит 
значение 1. Выводить слово “два” - если переменная 
хранит значение 2, и т.д. для всех цифр от 0 до 9. */
function getWord(a) {
    switch(a){
        case 0:console.log("Ноль"); break;
        case 1:console.log("Один"); break;
        case 2:console.log("Два"); break;
        case 3:console.log("Три"); break;
        case 4:console.log("Четыре"); break;
        case 5:console.log("Пять"); break;
        case 6:console.log("Шесть"); break;
        case 7:console.log("Семь"); break;
        case 8:console.log("Восемь"); break;
        case 9:console.log("Девять"); break;
    }
}
getWord(2);

function getWordAnother(b) {
    if (b == 0){
        console.log("Ноль");
    } else if (b == 1) {
        console.log("Один");
    } else if (b == 2) {
        console.log("Два");
    } else if (b == 3) {
        console.log("Три");
    } else if (b == 4) {
        console.log("Четыре");
    } else if (b == 5) {
        console.log("Пять");
    } else if (b == 6) {
        console.log("Шесть");
    } else if (b == 7) {
        console.log("Семь");
    } else if (b == 8) {
        console.log("Восемь");
    } else if (b == 9) {
        console.log("Девять");
    }
}
getWordAnother(7);

// Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том, 
// что число является нулевым либо положительным либо отрицательным.
function getPositiveOrNegative(c) {
    if (c > 0) {
        console.log("Число положительное");
    } else if (c < 0) {
        console.log("Число отрицательное");
    } else {
        console.log("Число нулевое");
    }
}
getPositiveOrNegative(9);


// Переменная хранит в себе единицу измерения одно из возможных 
// значений (Byte, KB, MB, GB), Вторая переменная хранит в себе целое число. 
// В зависимости от того какая единица измерения написать скрипт, который выводит 
// количество байт. Для вычисления принимает счет что в каждой 
// последующей единицы измерения хранится 1024 единиц более меньшего измерения.
function getNumberOfBytes(unit, num) {
    let cof = 1;
    if (unit == "GB") {
        cof = 1024 * 1024 * 1024;
    } else if (unit == "MB") {
        cof = 1024 * 1024;
    } else if (unit == "KB"){
        cof = 1024;
    }
    console.log(num * cof);
}
getNumberOfBytes("MB", 5);


// Переменная хранит процент кредита, вторая переменная хранит объем тела кредита, 
// третья переменная хранит длительность кредитного договора в годах. Написать скрипт который вычислит:
// - Сколько процентов заплатит клиент за все время
// - Сколько процентов заплатит клиент за один календарный год
// - Какое общее количество денежных средств клиента банка выплатит за все года
function getCreditInfo(percent, val, year) {
    console.log(val * percent / 100 * year + " - грн процентов клиент заплатит за все время");
    console.log(val * percent / 100 + " - грн процентов клиент заплатит за один год");
    console.log(val * percent / 100 * year + val + " - грн всего клиент вернет банку");
}
getCreditInfo(18, 100000, 5);


// Переменная содержит в себе строку. Вывести строку в обратном порядке.
function getLineInReverse(str) {
    let newStr = "";
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
getLineInReverse("zxcvb");


// Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.
function getFactorial(factorial) {
    let res = factorial;
    for (let i = factorial - 1; i > 0; i--) {
        res *= i;
    }
    return res;
}
getFactorial(4);


//Дано число - вывести первые N делителей этого числа нацело.
function getFirstDivisorsNumber(num, numDividers) {
    let arr = [];
    let caunt = 0;
    for (let i = 2; i <= num; i++) {
        if (num % i == 0 && caunt < numDividers) {
            arr.push(num / i);
            caunt++;
        }
    }
    console.log(arr);
}
getFirstDivisorsNumber(20000, 3);

//Найти сумму цифр числа которые кратны двум
function getSumDigitsDivisibleTwo(num) {
    let str = num + "";
    let sum = 0;
    for (i of str) {
        if (i % 2 == 0) {
            sum += +i;
        }
    }
    return sum;
}
getSumDigitsDivisibleTwo(122344566788);

//Найти минимальное число которое больше 300 и нацело делиться на 17
function getMinDivisibleNumOf(num, divider) {
    for (let i = num; i <= (num * divider); i++) {
        if (i % divider == 0) {
            let minNum = i;
            break;
        }
    }
    return minNum;
}
getMinDivisibleNumOf(300, 17);


//Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа.
function getMaxDivisorOfTwoNum(num1, num2) {
    while ( num1 != 0 && num2 != 0) {
        if (num1 > num2) {
            num1 = num1 % num2;
        } else {
            num2 = num2 % num1;
        }
    }
    return(num1 + num2);
}
getMaxDivisorOfTwoNum(120,15);

// Переменная содержит в себе строку. Вывести строку в обратном порядке. Рекурсия.
function getLineInReverse(str, index){
    index = index || 0;
    let newStr = str[index];
    if(str.length <= ++index){
        return newStr;
    }
    newStr = getLineInReverse(str, index) + newStr;
    return newStr;
}
let res = getLineInReverse("zxcvbnm");


// Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.
function findFactorialOfNum(total) {
    if (total != 1) {
        return total * findFactorialOfNum(total-1);
    }
    return total;
}
findFactorialOfNum(6);

//Дано число - вывести первые N делителей этого числа нацело. Рекурсия.
function getFirstDivisorsNumber(num, numDividers, index) {
    index = index || 0;
    if (numDividers > 0) {
        if (num % (index+2) == 0) {
            console.log(num/(index+2));
            getFirstDivisorsNumber(num, numDividers-1, index+1);
        }else {
            getFirstDivisorsNumber(num, numDividers, index+1);
        }
    }
    return;
}
getFirstDivisorsNumber(20000, 4);

//Найти сумму цифр числа которые кратны двум. Рекурсия
function recursive(str, index) {
    index = index || 0;
    let char = str[index];
    if (str.length <= ++index) {
        if (str[index-1] % 2 === 0){
            return +char;
        } else {
            return 0;
        }
    }
    return (str[index-1] % 2 === 0) ? recursive(str, index) + +char : recursive(str, index);
}
console.log(recursive("434333832333"));

//Найти минимальное число которое больше 300 и нацело делиться на 17. Рекурсия
function getMinDivisibleNumOf(minNum, divider) {
    if (minNum % divider != 0) {
        return getMinDivisibleNumOf(minNum+1, divider);
    }
    return minNum;
}
console.log(getMinDivisibleNumOf(300, 17));

//Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа. Рекурсия
function getMaxDivisorOfTwoNum(num1, num2, index) {
    index = index || num1 || num2;
    if (num1 % (index-1) !== 0 || num2 % (index-1) !== 0) {
        return getMaxDivisorOfTwoNum (num1, num2, index-1);
    }
    return index-1;
}
console.log(getMaxDivisorOfTwoNum(30, 18));

// Написать функцию, которая транспонирует матрицу
let mas1 = 
    [[1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]];

function transMatrix(mas1){
    if (mas1.length == 0) {
        return 0;
    }
    let newTransArr = [];
    for (let i = 0; i < mas1[0].length; i++){
        newTransArr[i] = [];
        for (let j = 0; j < mas1.length; j++){
            newTransArr[i][j] = mas1[j][i];
        }
    }
    
    return newTransArr;
}
transMatrix(mas1);

//Написать функцию, которая умножает две матрицы
let mas2 = 
    [[2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 96, 7, 28]];

function multipliArreys(mas1, mas2) {
    if (mas1.length == 0 || mas2.length == 0) {
        return 0;
    }
    let multipliArrey = [];
    for (let i = 0; i < mas1.length; i++) {
        multipliArrey[i] = [];
        for (let j = 0; j < mas1[0].length; j++) {
            multipliArrey[i][j] = mas1[i][j] * mas2[i][j];
        }
    }
    return multipliArrey;
}
multipliArreys(mas1, mas2);


//Найти номер строки двумерного массива сумма которого является максимальной
function strArrMaxSum(mas2) {
    if (mas2.length == 0) {
        return 0;
    }
    let arrey = [];
    for (let i = 0; i < mas2.length; i++) {
        arrey[i] = [];
        let temp = 0;
        for (let j = 0; j < mas2[0].length; j++) {
            temp += mas2[i][j];
            arrey[i] = temp;
        }
    }
    let max = arrey[0];
    let num = 0;
    for (let i = 1; i < arrey.length; i++) {
        if (max < arrey[i]) {
            max = arrey[i];
            num = i;
        }
    }
    return num+1;
}
console.log(strArrMaxSum(mas2) + " строка массива имеет максимальную сумму");

// Найти номер столбца двумерного массива сумма которого является максимальной
function columnArrMaxSum(mas2) {
    if (mas2.length == 0) {
        return 0;
    }
    let arrey = [];
    for (let i = 0; i < mas2[0].length; i++) {
        arrey[i] = [];
        let temp = 0;
        for (let j = 0; j < mas2.length; j++) {
            temp += mas2[j][i];
            arrey[i] = temp;
        }
    }
    let max = arrey[0];
    let num = 0;
    for (let i = 1; i < arrey.length; i++) {
        if (max < arrey[i]) {
            max = arrey[i];
            num = i;
        }
    }
    return num+1;
}
console.log(columnArrMaxSum(mas2) + " столбец массива имеет максимальную сумму");

//Удалить из массива все столбцы которые не имеют ни одного нулевого элемента и сумма которых положительна
let mas3 = 
    [[0, 5, 8, -7, -4],
    [-3, -4, -9, 5, 1],
    [0, -9, 0, 6, 0]];

function delColumn(mas3){
    if (mas3.length == 0) {
        return 0;
    }
    let newArr = [];
    for (let i = 0; i < mas3[0].length; i++){
        newArr[i] = [];
        for (let j = 0; j < mas3.length; j++){
            newArr[i][j] = mas3[j][i];
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        let temp = 0;
        for (let j = 0; j < newArr[0].length; j++) {
            temp += newArr[i][j];
        }
        if (temp > 0 || newArr[i].indexOf(0, 0) == -1) {
            newArr.splice(i, 1);
            i--;
        }
    }
    let backArr = [];
    for (let i = 0; i < newArr[0].length; i++){
        backArr[i] = [];
        for (let j = 0; j < newArr.length; j++){
            backArr[i][j] = newArr[j][i];
        }
    }
    return backArr;
}
delColumn(mas3);