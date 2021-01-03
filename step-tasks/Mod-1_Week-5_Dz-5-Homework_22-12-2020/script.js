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
1. Написать функцию возведения числа в степень.
*/
function getPowR(x, n) {
    if (n == 1) {
        return x;
    }
    else {
        return x * getPowR(x, n - 1);
    }
}
document.getElementById('btn-task1').addEventListener('click', function () {
    let arg1 = prompt("Укажите число ", "");
    let arg2 = prompt("Укажите степень ", "")
    let result = getPowR(parseInt(arg1), parseInt(arg1));
    console.log(result);
});
/*
2. Написать функцию поиска наибольшего общего делителя.
 */
function getNodR(x, y) {
    if (y > x) return getNodR(y, x);
    if (!y) return x;
    return getNodR(y, x % y);
}
document.getElementById('btn-task2').addEventListener('click', function () {
    let arg1 = prompt("Укажите число ", "");
    let result = nodR(parseInt(arg1));
    console.log(result);
});
/*3. Написать функцию для поиска максимальной цифры в числе.*/
function getMaxInNumR(num, max = 0) {
    let x = num % 10;
    let y = (num - x) / 10;
    let z = 0;
    if (x > max) z = x;
    else z = max;
    if (y == 0) return z;
    return getMaxInNum(y, z);
}
document.getElementById('btn-task3').addEventListener('click', function () {
    let arg1 = prompt("Укажите число ", "");
    let result = getMaxInNum(parseInt(arg1));
    console.log(result);
});
/*4. Написать функцию, которая определяет простое ли переданное число.*/
const isPrimeR = (n, i = 3, limit = Math.floor(Math.sqrt(n))) => {
    if (n % i === 0) return false;
    if (i >= limit) return true;
    return isPrimeR(n, i += 2, limit);
}
document.getElementById('btn-task4').addEventListener('click', function () {
    let arg1 = prompt("Укажите число ", "");
    let result = isPrimeR(parseInt(arg1));
    console.log(result);
});
/*5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
Например: число 18 – множители 2 * 3 * 3.*/
function printMultNumR(n, div = 2) {
    if (n == 1) return;
    if (n % div == 0) {
        console.log(div);
        getMultNumR(n / div, div);
    }
    else {
        if (div == 2) {
            getMultNumR(n, div + 1);
        }
        else {
            getMultNumR(n, div + 2);
        }
    }
}
document.getElementById('btn-task5').addEventListener('click', function () {
    let arg1 = prompt("Укажите число ", "");
    printMultNumR(parseInt(arg1));

});

/*6. Написать функцию, которая возвращает число Фибоначчи
по переданному порядковому номеру.
Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
том, что каждое число равно сумме двух предыдущих чисел.
Например: порядковый номер 3 – число 2, порядковый
номер 6 – число 8.*/
function getFibR(m, i = 2, l = 1, r = 1) {
    if (m == 1 || m == 2) return 1;
    i++;
    let n = l + r;
    if (m == i) return n;
    return getFibR(m, i, r, n);
}
document.getElementById('btn-task6').addEventListener('click', function () {
    let arg1 = prompt("Укажите число ", "");
    let result = getFibR(parseInt(arg1));
    console.log(result);

});
