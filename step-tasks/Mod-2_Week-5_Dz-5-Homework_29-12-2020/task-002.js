/*Задание 2
Реализуйте класс ExtendedDate, унаследовав его от стандарт-
ного класса Date и добавив следующие возможности:
■■ метод для вывода даты (числа и месяца) текстом;
■■ метод для проверки – это прошедшая дата или будущая
(если прошедшая, то метод возвращает false; если буду-
щая или текущая, то true);
■■ метод для проверки – високосный год или нет;
■■ метод, возвращающий следующую дату.
Создайте объект класса ExtendedDate и выведите на экран
результаты работы новых методов.*/

class ExtendedDate extends Date {
    constructor(year, month, day) {
        super(year, month, day),
            this.year = year,
            this.month = month,
            this.day = day;
    }
    print() {
        document.querySelector("#task002").innerHTML += `<p>${this.toLocaleDateString("ru", {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })}</p>`;
    }
    isPastDate() {
        if (this >= new Date()) return true;
        else return false;
    }
    isLeapYear() {
        if(!!(this.year % 4) && !!(this.year % 100)){
            document.querySelector("#task002").innerHTML += `<p>${this.year} - невисокосный год</p>`;
        }
        else {
            document.querySelector("#task002").innerHTML += `<p>${this.year} - високосный год</p>`;
        }
    }
    nextDate() {
       return this.setDate(this.getDate() + 1);
    }
}
document.body.style.color = "black";
let extentedDate = new ExtendedDate(2020, 12, 26);
extentedDate.print();
(extentedDate.isPastDate()) ? document.querySelector("#task002").innerHTML += "<p>Будущая или текущая дата</p>" : document.querySelector("#task002").innerHTML +="<p>Прошедшая дата</p>";
extentedDate.isLeapYear();
extentedDate.nextDate();
extentedDate.print();
