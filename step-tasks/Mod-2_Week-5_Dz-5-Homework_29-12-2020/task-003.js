/*Задание 3
Реализовать класс Employee, описывающий работника, и со-
здать массив работников банка.
Реализовать класс EmpTable для генерации html кода таблицы
со списком работников банка. Массив работников необходимо
передавать через конструктор, а получать html код с помощью
метода getHtml().
Создать объект класса EmpTable и вывести на экран результат
работы метода getHtml().*/

class Employee {
    constructor(name, position, salary) {
        this.name = name,
            this.position = position,
            this.salary = salary;
    }
    get getName() {
        return this.name;
    }
    get getPosition() {
        return this.position;
    }
    get getSalary() {
        return this.salary;
    }
}
let employee1 = new Employee("Steve Rom", "Bo$$", 4000000);
let employee2 = new Employee("Employee2", "Clean manager", 20000);
let employee3 = new Employee("Employee3", "CashMan", 7000);
let employee4 = new Employee("Employee4", "CashMan Manager", 7000);
let employee5 = new Employee("Employee5", "Middle JavaScript Developer", 160000);
let employee6 = new Employee("Someone", "Senior JavaScrit Developer", 1900000);
let arrEmployees = [employee1, employee2, employee3, employee4, employee5, employee6];

class EmpTable {
    constructor(arrEmployees) {
        this.arrEmployees = arrEmployees;
    }
    getHtml() {
        let htmlCode ="<h3>Task 003</h3>";
        htmlCode += "<table><thead><tr><th>Фамилия работника</th><th>Должность работника</th><th>Оклад работника</th></thead></tr>";
        for (let i = 0; i < this.arrEmployees.length; ++i) {
            htmlCode += `<tr><td>${this.arrEmployees[i].getName}</td><td>${this.arrEmployees[i].getPosition}</td><td>${this.arrEmployees[i].getSalary}</td></tr>`;
        }
        htmlCode += "</table>";
        return htmlCode;
    }
}
let empTable = new EmpTable(arrEmployees);
document.querySelector("#task003").innerHTML = empTable.getHtml();