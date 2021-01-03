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
1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
*/
function alertSum(x, n) {
    let i = 0;
    for (; x < n; x++) {
        i += x;
    }
    alert("Сумма диапазона чисел = " + i);
}
document.getElementById('btn-task1').addEventListener('click', function () {
    let arg1 = prompt("Укажите положительное целое число - нижний индекс ", "");
    let arg2 = prompt("Укажите положительное целое число - верхний индекс ", "")
    alertSum(parseInt(arg1), parseInt(arg2));

});
/*
2. Запросить 2 числа и найти только наибольший общий делитель.
 */
function getGcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) { let temp = a; a = b; b = temp; }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}
document.getElementById('btn-task2').addEventListener('click', function () {
    let arg1 = prompt("Укажите положительное целое число", "");
    let arg2 = prompt("Укажите положительное целое число", "")
    let res = getGcd(arg1, arg2);
    alert("наибольший общий делитель " + arg1 + "|" + arg2 + " = " + res);
});
/*3. Запросить у пользователя число и вывести все делители этого числа.*/
function consoleAllDivNum(number) {
    for (let i=2; i<=number; i++) {
        if (number%i==0  & i!=number ) {
          console.log(i);
        }
    }
}
document.getElementById('btn-task3').addEventListener('click', function () {
    let arg1 = prompt("Укажите число ", "");
    let result = consoleAllDivNum(parseInt(arg1));

});
/*4. Определить количество цифр в введенном числе.*/
function getCountDg(n) {
    for (var i = 0; n > 1; i++) {
        n /= 10;
    }
    return i;
}
document.getElementById('btn-task4').addEventListener('click', function () {
    let arg1 = prompt("Укажите число ", "");
    let res = getCountDg(arg1);
    alert("Количество цифр = " + res);
});
/*5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной пере- менной (не 10) для ввода чисел пользователем.*/
function alertTask_5() {
    let i = 10;
    let arr = [0, 0, 0, 0, 0];//положительных,отрицательных,нулей,четных,нечетных
    do {
        let ask = parseInt(prompt("укажите число ", ""));
        if (ask != null) {
            if (ask > 0) arr[0] += 1;
            if (ask < 0) arr[1] += 1;
            if (ask == 0) arr[2] += 1;
            if (ask % 2 == 0 & ask != 0) arr[3] += 1;
            if (ask % 2 != 0 & ask != 0) arr[4] += 1;
        }
        else break;
        i--;
    } while (i != 0);
    alert("положительных = " + arr[0] + " отрицательных = " + arr[1] + " нулей = " + arr[2] + " четных = " + arr[3] + " нечетных = " + arr[4]);
}
document.getElementById('btn-task5').addEventListener('click', function () {
    alertTask_5();
});

/*6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хо- чет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.*/
function alertTask_6() {
    while (true) {
        let arg1 = prompt("Укажите число ", "");
        let arg2 = prompt("Укажите число ", "");
        let arg3 = prompt("Укажите  знак математической операции ", "");
        if (arg1 != null & arg2 != null & arg3 != null) {
            try {
                arg1 = parseFloat(arg1);
                arg2 = parseFloat(arg2);
                if (arg3 == '/') {
                    if (arg2 == 0) throw 'Деление на нуль!';
                    alert(arg1 / arg2);
                }
                else if (arg3 == '*') alert(arg1 * arg2);
                else if (arg3 == '-') alert(arg1 - arg2);
                else if (arg3 == '+') alert(arg1 + arg2);
                else { throw 'Не верный знак!' }
            } catch (error) {
                alert(error);
            }
        }
        else { alert('Не все параметры введены!') }
        let ask = prompt('Хотите еще решить? введите -Y')
        if (ask == null | ask != 'Y') break;
    }
}
document.getElementById('btn-task6').addEventListener('click', function () {
    alertTask_6();
});

/*7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).*/
function alertTask_7() {
    let arg1 = prompt("Укажите число ", "");
    let arg2 = prompt("Насколько его сдвинуть (если число 123456 сдвинуть на 2 цифры, то получится 345612)", "");
    try {
        arg1 = parseInt(arg1);
        arg2 = parseInt(arg2);

        let arr = Array.from(arg1.toString());
        if (arg2 > arr.length) arg2 = arg2 / arr.length;
        if (arg2 < arr.length & arg2 > 0) {
            do {
                let temp = arr[0];
                arr.shift();
                arr.push(temp);
                arg2--;
            } while (arg2 != 0);

            arr = arr.toString();

            let i = 0;
            while (i != arr.length - 1) {
                arr = arr.replace(',', '');
                i++;
            }
            alert(arr);
        }
    } catch (error) {
        alert('Не численые значения!')
    }

}
document.getElementById('btn-task7').addEventListener('click', function () {
    alertTask_7();
});
/*8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.*/
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
function alertTask_8() {
    let date = new Date();
    let str = "«День недели: " + getWeekDay(date) + " | Хотите увидеть следующий день?»";
    while (confirm(str)) {
        date.setDate(date.getDate() + 1);
        str = "«День недели: " + getWeekDay(date) + " | Хотите увидеть следующий день?»";
    }
}
document.getElementById('btn-task8').addEventListener('click', function () {
    alertTask_8();
});
/*9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.*/
function consoleTask_9() {
    for (let i = 2; i < 10; i++) {
        for (let y = 1; y <= 10; y++) {
            let str = i + "x" + y + "=" + i * y;
            console.log(str);
        }
    }
}
document.getElementById('btn-task9').addEventListener('click', function () {
    consoleTask_9();
});

/*10. Игра «Угадай число». 
Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
каждую итерацию цикла делите диапазон чисел пополам, 
записываете результат в N 
и спрашиваете у пользователя «Ваше число < N, > N или == N?». 
В зависимости от того что указал пользователь, уменьшаете диапазон.
Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100.
И так до тех пор, пока пользова- тель не выберет == N.*/
function alertTask_10() {
    alert("Загадайте число от 0 до 100.");
    let array = new Int32Array(100);
    for (let index = 0; index < array.length; index++) {
        array[index] = index;
    }

    let N = 50;
    let unswer = true;
    do {

        N = parseInt(array.length / 2);

        if (N == 2) {
            answer = confirm("«Ваше число == " + array[N - 1] + "?");
            if (answer) { break; }
            else { "«Ваше число == " + array[0] + "!"; break; }
        }

        if (array.length == 1) { alert("«Ваше число == " + array[0] + "!"); break; }

        if(confirm("«Ваше число == " + array[N] + "?")){break;}

        answer = confirm("«Ваше число > " + array[N] + "?");

        if (answer) { array = array.slice(N, array.length - 1); }
        else {array = array.slice(0, N) }

        console.log(array.length);

        N = parseInt(array.length / 2);

        if (N == 2) {
            answer = confirm("«Ваше число == " + array[N-1] + "?");
            if (answer) { break; }
            else { "«Ваше число == " + array[0] + "!"; break; }
        }

        if (array.length == 1) { alert("«Ваше число == " + array[0] + "!"); break; }
        
        if(confirm("«Ваше число == " + array[N] + "?")){break;}

        answer = confirm("«Ваше число < " + array[N] + "?");
        if (answer) {array = array.slice(0, N) }
        else {array = array.slice(N, array.length - 1);}

    } while (true);
}
document.getElementById('btn-task10').addEventListener('click', function () {
    alertTask_10();
});
