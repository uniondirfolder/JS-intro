/*Задание 4
Реализовать класс StyledEmpTable, который наследуется от
класса EmpTable. Добавить метод getStyles(), который возвращает
строку со стилями для таблицы в тегах style. Переопределить
метод getHtml(), который добавляет стили к тому, что возвращает
метод getHtml() из родительского класса.
Создать объект класса StyledEmpTable и вывести на экран
результат работы метода getHtml().*/

class StyledEmpTable extends EmpTable{
    constructor(arrEmployees){
        super(arrEmployees);
    }
    getStyles(){
        let stylesCode=`<style>\n #task004 table {
            border-spacing: 2px;
            width: 100%; 
        }
        #task004 thead th{
            background: #ebc807; 
            color: #333;
        }
        #task004 td {
            padding: 5px; 
            background: #013616; 
            color: #f5e8d0; 
        }\n</style>`;
        return stylesCode;
    }
    getHtml(){
        let htmlCode = this.getStyles() + super.getHtml();
        return htmlCode;
    }
}

let styledEmpTable = new StyledEmpTable(arrEmployees);
document.querySelector("#task004").innerHTML += styledEmpTable.getHtml();