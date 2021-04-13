// Задан двумерный массив - объединить каждый внутренний массив с верхнем массивом - только по уникальным значениям. 
// Например [1,2,4[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3], получаем в результате: [1,2,4,8,12,13,29,11,0,5,3,6,7,21]

let mas = [
    1,
    2,
    4,
    [8, 4, 12],
    [13, 29, 11],
    [0, 5, 3, 11],
    5,
    6,
    7,
    [3,8,21],
    3
];
function masOfUniqVal(mas) {
    let newMas = [];
    for (let posit of mas) {
        if (typeof posit === "object") {
            for (let posEl of posit) {
                if (!masVal(newMas, posEl)) {
                    newMas.push(posEl);
                } 
            }
        }else{
            if (!masVal(newMas, posit)) {
                newMas.push(posit);
            }
        }
    }
return newMas;
}
function masVal(arr, val) {
    for (let el of arr) {
        if (el === val) {
            return true;
        }
    }
    return false;
}
let res = masOfUniqVal(mas);
console.log(res);

// Написать функцию которая возвращает true/false в зависимости от того - все ли уникальные значения в массиве или есть не уникальные
let mas1 = [1, 2, 3, 4, 5, 6, 1];
function uniqMas(mas) {
    let newMas = [];
    for (let pos of mas) {
        if (!masVal(newMas, pos)) {
            newMas.push(pos);
        }
    }
if (mas1.length == newMas.length) {
    return true;
} else {
    return false;
}
}
let res1 = uniqMas(mas1);
console.log(res1);

// Задан массив объектов студентов.
// Написать функцию которая возвращает: среднюю оценку студентов в разрезе каждого курса: {1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5} 
// с учетом только тех студентов которые активны. 
// Посчитать количество неактивных студентов в разрезе каждого курса и общее количество неактивных студентов.

let students = [
    {
        name: "Ivan",
        esimate: 4,
        course: 1,
        active: true,
    }, 
    {
        name: "Max",
        esimate: 3,
        course: 1,
        active: false,
    },
    {
        name: "Vasya",
        esimate: 5,
        course: 2,
        active: true,
    },
    {
        name: "Alex",
        esimate: 5,
        course: 1,
        active: false,
    },
    {
        name: "Jonn",
        esimate: 3,
        course: 2,
        active: false,
    }
];
function avarMarkOfKurs(students) {
    let arr = [];
    for (let j = 0; j <= 5; j++){
        let temp = [];
        let sum = 0;
        for (let i = 0; i < students.length; i++) {
            if (students[i].course == j && students[i].active == true) {
                temp.push(students[i].esimate);
                sum += students[i].esimate;
            }
        }
        arr[j] = sum / temp.length;
        if (isNaN(arr[j])) {
            arr[j] = 0;
        }
    }
    return arr;
}
function inactiveStudOfKurs(students){
    let arr = [];
    for (let j = 0; j <= 5; j++){
        let sum = 0;
        let count = 0;
        for (let i = 0; i < students.length; i++) {
            if (students[i].course ==j) {
                sum ++;
                if (!students[i].active) {
                    count ++;
                }
            }
        }
        arr[j] = count / sum * 100;
        if (isNaN(arr[j])) {
            arr[j] = 0;
        }
    }
    return arr;
}
function numOfInactivStud(students) {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        if (!students[i].active){
            count++;
        }
    }
    return (count / students.length * 100);
}

let result = avarMarkOfKurs(students);
console.log(result);
let proc = inactiveStudOfKurs(students);
console.log(proc);
let allProc = numOfInactivStud(students);
console.log(allProc);