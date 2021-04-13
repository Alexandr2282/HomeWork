// Написать функцию которая генерирует массив случайных значений, 
// таким образом что все элементы результирующего массива являются уникальными. 
// Генерациями происходит в рамках чисел от N до M, где N,M - могут быть как положительные так и 
// отрицательными, и еще одним параметром количество значений которые нужно сгенерировать. 
// Если количество генерируемых значений больше чем чисел в диапазоне - отдавать пустой массив.

function getRandomInt(min, max, count) {
    let musInt = [];
    let temp = 0;
    if ((max - min + 1) < count) {
        return musInt;
    }
    for (let i = 0; i < count; i++){
        temp = Math.floor(Math.random() * (max + 1 - min) + min);
        if (musInt.indexOf(temp) == -1) {
            musInt[i] = temp;
        } else {
            i--;
        }
    }
    return musInt;
}
let arr = getRandomInt(-15, 15, 10);
console.log(arr);

// Использовать функцию из предыдущего задания чтобы получить массив из нужного количества значений. 
// Найти процентное соотношение отрицательных, положительных и нулевых элементов массива.


function getPositOrNegatProc(arr) {
    let positiveN = [];
    let negativeN = [];
    let zeroN = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            positiveN.push(arr[i]);
        } else if (arr[i] < 0) {
            negativeN.push(arr[i]);
        } else {
            zeroN.push(arr[i]);
        }
    }
    return "Положительных - " + positiveN.length / arr.length * 100 + "%\n" +
        "Отрицательных - " + negativeN.length / arr.length * 100 + "%\n" +
        "Нулевых - " + zeroN.length / arr.length * 100 + "%";
}
console.log(getPositOrNegatProc(arr));

// Все предыдущий задания на циклы - написать с помощью циклов for in и/или for of
function getPositOrNegatProc(arr) {
    let positiveN = [];
    let negativeN = [];
    let zeroN = [];
    for (let int of arr){
        if (int > 0) {
            positiveN.push(int);
        } else if (int < 0) {
            negativeN.push(int);
        } else {
            zeroN.push(int);
        }
    }
    return "Положительных - " + positiveN.length / arr.length * 100 + "%\n" +
        "Отрицательных - " + negativeN.length / arr.length * 100 + "%\n" +
        "Нулевых - " + zeroN.length / arr.length * 100 + "%";
}
console.log(getPositOrNegatProc(arr));

// Задано предложение - подсчитать количество вхождений каждого слова в предложении. 
// Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось

function numOccurrenWord(str) {
    let strNew = str.split(" ");
    let counts = {};
    let ch, count;
    for (let i = 0; i < strNew.length; i++) {
        ch = strNew[i];
        count = counts[ch];
        counts[ch] = count ? count + 1 : 1;
    }
return counts;
}
let str = "Hi my name is Sasha what is your name is";
console.table(numOccurrenWord(str));

// Написать рекурсивную функцию которая выводит абсолютно все элементы ассоциативного массива (объекта)
let arrAss = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);
function outputAssocArr(arr) {
    arr.forEach(function(key, value) {
        console.log(key, value);
    });
}
outputAssocArr(arrAss);
