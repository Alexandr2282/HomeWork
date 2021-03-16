let a = 7;
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

let b = 8;
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

let c = -5;
if (c > 0) {
    console.log("Число положительное");
} else if (c < 0) {
    console.log("Число отрицательное");
} else {
    console.log("Число нулевое");
}

let unit = "KB";
let num = 15;
let cof = 1;
if (unit == "GB") {
    cof = 1024 * 1024 * 1024;
} else if (unit == "MB") {
    cof = 1024 * 1024;
} else if (unit == "KB"){
    cof = 1024;
}
console.log(num * cof);

let percent = 12;
let val = 500000;
let year = 7;
console.log(val * percent / 100 * year + " - грн процентов клиент заплатит за все время");
console.log(val * percent / 100 + " - грн процентов клиент заплатит за один год");
console.log(val * percent / 100 * year + val + " - грн всего клиент вернет банку");