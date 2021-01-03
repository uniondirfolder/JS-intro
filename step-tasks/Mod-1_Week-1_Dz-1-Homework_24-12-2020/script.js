function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
}


/*Запросите у пользователя его имя и выведите в ответ:«Привет, его имя!».*/
function alertTask_1() {
    let name = prompt("Ваше имя?", "");
    alert('«Привет, ' + name + ' !»');
}
document.getElementById('btn-task').addEventListener('click', function () {
    alertTask_1();
});

/*Запросите у пользователя год его рождения, посчитайте,сколько ему лет и выведите результат. Текущий год укажите в коде как константу.*/

const  CURRENTYEAR = 2020;
function alertTask_2() {   
    let userYearBirth = parseInt(prompt("Ваш год рождения?", ""));
    if (isNumeric(userYearBirth)) {
        CURRENTYEAR - userYearBirth > 0 ? alert("Вам " + (CURRENTYEAR - userYearBirth) + "лет.") : alert("Что вы делаете в прошлом?");
    }
    else {
        alert("Введие число! например : 1789");
    }
}
document.getElementById('btn-task2').addEventListener('click', function () {
    alertTask_2();
});

/*Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.*/
function alertTask_3() {
    let askString = "Квадрат > Какая длинна стороны ! ?";
    isNumeric(num1 = prompt((askString = askString.replace('!','A')),""))&
    isNumeric(num2 = prompt((askString = askString.replace('A','B')),""))&
    isNumeric(num3 = prompt((askString = askString.replace('B','C')),""))&
    isNumeric(num4 = prompt((askString = askString.replace('C','D')),""))
    ?((+num1)==(+num2)&num1==(+num3)&num1==(+num4)?alert("Периметр квадрата = "+ (num1 = parseInt(num1)+parseInt(num1)+parseInt(num1)+parseInt(num1)) )
    :alert("У квадрата все стороны должны быть равны!")):alert("Введены не числовые значения!");
}
document.getElementById('btn-task3').addEventListener('click', function () {
    alertTask_3();
});

/*4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.*/

function alertTask_4() {
    const Pi = 3.1415;
    askString = "Окружность > Какой радиус окружности? ";
    isNumeric(num = prompt(askString, "")) ? alert("Площадь такой окружности = " + (num * num * Pi)) : alert("Должно быть числовое значение");
}
document.getElementById('btn-task4').addEventListener('click', function () {
    alertTask_4();
});

/*5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.*/
function alertTask_5() {
    isNumeric(distance = prompt("Растояние между городами?", ""))
        ? isNumeric((time = (prompt("За сколько часов Вы хотите добраться?", ""))))
            ? alert("Вы должны двигаться со скоростью " + (parseFloat(distance)/parseFloat(time)) + " км/ч") : alert("Должно быть целое числовое значение")
        : alert("Должно быть целое числовое значение");
}
document.getElementById('btn-task5').addEventListener('click', function () {
    alertTask_5();
});

/*6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.*/

function alertTask_6() {
    const EQDollEuro = 1.25;
    isNumeric(num = prompt("Конвертер долларов в евро курс -" + EQDollEuro + "> укажите сумму", "")) & num > 0 ? alert((num * EQDollEuro) + " евро") : alert("Значение должно быть больше нуля и числом");
}
document.getElementById('btn-task6').addEventListener('click', function () {
    alertTask_6();
});

/*7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку*/

function alertTask_7() {
    const SIZE_FILE = 820;
    isNumeric(num = parseFloat(prompt("Количество файлов размером -" + SIZE_FILE + " Мб > на флешке (в Гб)", ""))) ? alert(parseInt(num / SIZE_FILE* 1000) + " шт") : alert("Значение должно быть больше или равно размеру файла и больше нуля, а также числом (целым)");
}
document.getElementById('btn-task7').addEventListener('click', function () {
    alertTask_7();
});

/*8.Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется*/
function alertTask_8() {

    isNumeric(money = parseFloat(prompt("Сумма денег? ", "")))
        ? (
            isNumeric(price = parseFloat(prompt("Стоимость шоколадки", "")))
                ? (
                    ((money >= price) & (price > 0)) ? alert(parseInt(money / price) + " можете купить шт") : alert("Не возможно купить шоколадку!")
                ) : alert("Не возможно купить шоколадку!")
        ) : alert("Значение должно быть больше нуля, а также числом");
}
document.getElementById('btn-task8').addEventListener('click', function () {
    alertTask_8();
});

/*9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).*/
function alertTask_9(params) {
    isNumeric(num = prompt("Введите трехзначное число >","")) & num > 0 ? alert( (num1=(num%10)*100)+ (num%100)-(num%10) + parseInt(num/100) ):alert("Значение должно быть больше нуля и числом");
}
document.getElementById('btn-task9').addEventListener('click', function () {
    alertTask_9();
});

/*10.Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch*/
function alertTask_10() {
    isNumeric(num = prompt("Введите число >", "")) & num > 0 ? (num % 2 == 0 ? alert("четное") : alert("не четное")) : alert("Значение должно быть больше нуля и числом");
}
document.getElementById('btn-task10').addEventListener('click', function () {
    alertTask_10();
});







