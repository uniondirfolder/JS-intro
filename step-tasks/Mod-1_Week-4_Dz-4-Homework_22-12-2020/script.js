function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

/*
1. Написать функцию, которая принимает 2 числа 
и возвращает -1, если первое меньше, чем второе;
 1 – если первое больше, чем второе;
  и 0 – если числа равны.
*/
function getCompareNums(num1, num2) {
    if (isNumeric(num1) & isNumeric(num2)) {
        return num1 === num2 ? 0 : 1;
    }
    else {
        return NaN;
    }
}
document.getElementById('btn-task1').addEventListener('click', function () {
    let arg1 = prompt("Укажите первое число ", "");
    let arg2 = prompt("Укажите второе число", "");
    let result = getCompareNums(arg1, arg2);
    if (result == 1) { alert(1); }
    else if (result == 0) { alert(0); }
    else { alert("Нужно указать числовые значения!") }
});
/*
2. Написать функцию, которая вычисляет факториал переданного ей числа.
 */
function getFactorialCycle(number) {
    if (isNumeric(number)) {
        let num = parseInt(number);
        //console.log(num);
        if (num > -1) {
            let result = 1;
            for (let index = 0; index < number; index++) {
                result = result * (num - index);
                //console.log(result);
            }
            return result;
        }
        else {
            return NaN;
        }
    }
    else {
        return NaN;
    }
}
document.getElementById('btn-task2').addEventListener('click', function () {
    let arg1 = prompt("Укажите число для которого нужно расчитать факториал", "");
    let result = getFactorialCycle(arg1);
    if (result != NaN) { alert(result); }
    else { alert("Нужно указать числовое значение!") }
});
/*Написать функцию, которая принимает три отдельные
цифры и превращает их в одно число. Например: цифры
1, 4, 9 превратятся в число 149. */
function checkIfSingleArg(...arg) {
    return arg.length == 1 ? true : false;
}
function getNumFromConcatgNums() {
    let result = 0;
    let iter = arguments.length;
    let mult = 1;
    while (iter != 1) {
        mult = mult * 10;
        iter--;
    }

    for (let index = 0; index < arguments.length; index++) {
        if (checkIfSingleArg(arguments[index]) & isNumeric(arguments[index])) {
            iter = arguments[index];
            result += (iter * mult);
            mult = mult / 10;
        }
        else {
            return NaN;
        }
    }
    return result;
}
document.getElementById('btn-task3').addEventListener('click', function () {
    let arg1 = prompt("Укажите первое число", "");
    let arg2 = prompt("Укажите второе число", "");
    let arg3 = prompt("Укажите третие число", "");
    let result = getNumFromConcatgNums(arg1, arg2, arg3);
    if (result != NaN) { alert(result); }
    else { alert("Нужно указать числовое значение!") }
});
/*
4. Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию
передали 1 параметр, то она вычисляет площадь квадрата.
*/
function getSquareRectglMathS() {
    if (arguments.length < 2 || arguments.length > 0) {
        if (arguments.length == 2 & isNumeric(arguments[0]) & isNumeric(arguments[1])) {
            return (arguments[0] * arguments[1]);
        }
        else if (arguments.length == 1 & isNumeric(arguments[0])) {
            return (arguments[0] * arguments[0]);
        }
        else {
            return -1;
        }
    }
    else {
        return -1;
    }
}
document.getElementById('btn-task4').addEventListener('click', function () {
    let arg1 = prompt("Укажите длину прямоугольника", "");
    let arg2 = prompt("Укажите ширину прямоугольника", "");
    let result = 0;
    if (arg1.length > 0 && arg2.length > 0) {
        result = getSquareRectglMathS(arg1, arg2);
    }
    if (arg1.length > 0 && arg2.length == 0) { result = getSquareRectglMathS(arg1); }
    if (result != -1 & result != 0) { alert("Площадь = " + result); }
    else { alert("Нужно указать числовое значение!") }
});
/*
/*5. Написать функцию, которая проверяет, является ли пере-
данное ей число совершенным. Совершенное число – это
число, равное сумме всех своих собственных делителей.*/
function getSumDivs(number) {
    let result = 1;
    for (let index = 2; index <= (number / 2); index++) {
        if (number % index == 0) {
            result += index;
        }
    }
    return result;
}
function isPerfectNum(number) {
    return (isNumeric(number) & number == getSumDivs(number) & number > 0) ? true : false;
}
document.getElementById('btn-task5').addEventListener('click', function () {
    let arg1 = prompt("Укажите целое положительное число", "");
    if (isPerfectNum(arg1)) { alert("Совершенное число."); }
    else { alert("Не совершенное число.") }
});
/*6. Написать функцию, которая принимает минимальное и
максимальное значения для диапазона, и выводит только
те числа из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать,
совершенное число или нет.*/
function getArrayPerfectNums(lowBound, upperBound) {
    let arr = [0];
    if (isNumeric(lowBound) & isNumeric(upperBound) & upperBound >= lowBound & lowBound > 0) {
        arr.shift();
        for (let index = lowBound; index <= upperBound; index++) {
            if (isPerfectNum(index)) {
                arr.push(index);
            }
        }
    }
    return arr;
}
function alertPerfectNum(lowBound, upperBound) {
    let array = getArrayPerfectNums(lowBound, upperBound);
    let stringShow = "Числа из диапозона которые являются совершенными: ";
    for (let index = 0; index < array.length; index++) {
        stringShow += array[index] + " ";

    }
    alert(stringShow);
}
document.getElementById('btn-task6').addEventListener('click', function () {
    let min = prompt("Укажите минимальное значение диапазона", "");
    let max = prompt("Укажите максимальное значение диапазона", "");
    alertPerfectNum(min, max);
});
/*7. Написать функцию, которая принимает время (часы, мину-
ты, секунды) и выводит его на экран в формате «чч:мм:сс».
Если при вызове функции минуты и/или секунды не были
переданы, то выводить их как 00.*/
function timeToString(hh, mm, ss) {
    let string = "";
    if (hh < 10) { string += "0" + hh; }
    else { string += hh; }
    string += ":";
    if (mm < 10) { string += "0" + mm; }
    else { string += mm; }
    string += ":";
    if (ss < 10) { string += "0" + ss; }
    else { string += ss; }

    return string;
}
document.getElementById('btn-task7').addEventListener('click', function () {
    let hh = prompt("Укажите часы", "");
    let mm = prompt("Укажите минуты", "");
    let ss = prompt("Укажите секунды", "");
    alert(timeToString(hh, mm, ss));
});
/*8. Написать функцию, которая принимает часы, минуты и
секунды и возвращает это время в секундах. */
function getSeconds(hh, mm, ss) {
    let result = -1;
    if (isNumeric(hh) & isNumeric(mm) & isNumeric(ss) & hh >= 0 & hh <= 59 & mm >= 0 & mm <= 59 & ss >= 0 & ss <= 59) {
        let h = parseInt(hh);
        let m = parseInt(mm);
        let s = parseInt(ss);
        result = h * 3600 + m * 360 + s;
        return result;
    }
    return result;
}
document.getElementById('btn-task8').addEventListener('click', function () {
    let hh = prompt("Укажите часы", "");
    let mm = prompt("Укажите минуты", "");
    let ss = prompt("Укажите секунды", "");
    alert(getSeconds(hh, mm, ss));
});
/*9. Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс». */
function secondsToHhMmSs(seconds) {
    let result = [-1, -1, -1];
    if (isNumeric(seconds) & seconds > -1 & (seconds <= (24 * 3600))) {
        let temp = seconds;
        if (temp == (24 * 3600)) {
            result[0] = result[1] = result[2] = 0;
        }
        else {
            result[0] = parseInt(seconds / 3600);
            temp -= result[0] * 3600;
            console.log(result[0]);
            result[1] = parseInt(temp / 60);
            temp -= result[1] * 60
            console.log(result[1]);
            result[2] = temp;
            console.log(result[2]);
        }
    }
    return result;
}
document.getElementById('btn-task9').addEventListener('click', function () {
    let ss = prompt("Укажите секунды", "");
    let getArr = secondsToHhMmSs(ss);
    alert(timeToString(getArr[0], getArr[1], getArr[2]));
});
/*10. Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2
даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыду-
щих 2-х заданий: сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите
обратно в «чч:мм:сс». */
function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
function getSecondsDays(days) {
    return days * 24 * 3600;
}
function getSecondsMonth(monthInt, leapYear = false) {
    if (monthInt == 1 | monthInt == 3 | monthInt == 5 | monthInt == 7 | monthInt == 8 | monthInt == 10 | monthInt == 12) {
        return 31 * 24 * 3600;
    }

    if (monthInt == 2 && leapYear == true) {
        return 29 * 24 * 3600;
    }
    if (monthInt == 2 && leapYear == false) {
        return 28 * 24 * 3600;
    }
    return 30 * 24 * 3600;

}
function getSecondsYear(year) {
    let result = 0;
    let leap = isLeapYear(year);
    for (let index = 1; index <= 12; index++) {
        result += getSecondsMonth(index, leap);

    }
    return result;
}
function getDaysInMonth(monthInt, leapYear = false) {
    if (monthInt == 1 | monthInt == 3 | monthInt == 5 | monthInt == 7 | monthInt == 8 | monthInt == 10 | monthInt == 12) {
        return 31;
    }

    if (monthInt == 2 && leapYear == true) {
        return 29;
    }
    if (monthInt == 2 && leapYear == false) {
        return 28;
    }
    return 30;
}
function checkdDayOfMonth(year, month, day) {
    let leap = isLeapYear(year);
    let days = getDaysInMonth(month, leap);
    return (day <= days & day > 0 ? true : false);
}
function checkMonth(month) {
    return (month <= 12 & month > 0);
}
function checkYear(year) {
    return year > 0;
}
function checkDate(year, month, days) {
    let result = true;
    console.log(year);
    console.log(month);
    console.log(days);
    if (isNumeric(year) == false | checkYear(year) == false) { result = false; }
    if (isNumeric(month) == false | checkMonth(month) == false) { result = false; }
    if (isNumeric(days) == false | checkdDayOfMonth(year, month, days) == false) { result = false; }

    return result;
}
function getSecondsFromDate(year, month, day) {
    let result = -1;
    if (checkDate(year, month, day) == false) { return result; }
    else { result = 0; }

    let iter = year;
    while (iter != 0) {
        result += getSecondsYear(iter);
        iter--;
    }

    iter = month;
    let leap = isLeapYear(year);
    while (iter != 0) {
        result += getSecondsMonth(month, leap);
        iter--;
    }

    result += getSecondsDays(day);

    return result;
}
function getTimeDiffDates(year1, month1, day1, year2, month2, day2) {
    let result = [-1, -1, -1];
    if (checkDate(year1, month1, day1) == false | checkDate(year2, month2, day2) == false) { return result; }
    let arg1 = getSecondsFromDate(year1, month1, day1);
    let arg2 = getSecondsFromDate(year2, month2, day2);
    let iter = arg2 - arg1;
    result[2] = 0;
    result[1] = 0;
    result[0] = parseInt(iter / 3600);
    return result;
}
function parseStringData(string) {
    let result = [-1, -1, -1];
    console.log(string.length);
    if (string.length != 10) return result;
    if (
        isNumeric(string[0]) &
        isNumeric(string[1]) &
        (string[2] == '-') &
        isNumeric(string[3]) &
        isNumeric(string[4]) &
        (string[5] == '-') &
        isNumeric(string[6]) &
        isNumeric(string[7]) &
        isNumeric(string[8]) &
        isNumeric(string[9])
    ) {
        result[0]=getNumFromConcatgNums(string[0],string[1]);
        result[1]=getNumFromConcatgNums(string[3],string[4]);
        result[2]=getNumFromConcatgNums(string[6],string[7],string[8],string[9]);
        return result;
    }
    return result;
}
document.getElementById('btn-task10').addEventListener('click', function () {
    let date1 = prompt("Укажите  дату начала в формате dd-mm-yyyy", "");
    let date2 = prompt("Укажите  дату конца в формате dd-mm-yyyy", "");
    if(date1==null | date2==null){return;}

    let arr1 =  parseStringData(date1);
    let arr2 = parseStringData(date2);

    let result = getTimeDiffDates(arr1[2],arr1[1],arr1[0],arr2[2],arr2[1],arr2[0]);
    if(result[0]==-1)alert("Указаны не правильные исходные данные!")
    else{
        
        alert(timeToString(result[0], result[1], result[2]));
    }
    
});