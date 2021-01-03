/*  Задание 3
        Реализовать класс, который описывает css класс.
        Класс CssClass должен содержать внутри себя:
            ■ название css класса;
            ■ массив стилей;
            ■ метод для установки стиля;
            ■ метод для удаления стиля;
            ■ метод getCss(), который возвращает css код в виде строки.
            */

class CssClass {
    constructor(nameClass) {
        this.nameClass = nameClass,
            this.arrStyle = [];
    }

    setStyle(style) {
        this.arrStyle.push(style);
    }

    deleteStyle(style) {
        let index = this.arrStyle.findIndex(s => s.name == style.name && s.value == style.value);

        if (index != -1) {
            this.arrStyle.splice(index, 1);
        }
    }

    getCss() {
        let str = `.${this.nameClass}{`;

        for (let index = 0; index < this.arrStyle.length; index++) {
            str += `\n${this.arrStyle[index].name}:${this.arrStyle[index].value};`;

        }

        str += "\n}";
        return str;
    }
}

let cssClass = new CssClass("btn");
cssClass.setStyle({
    name: "width",
    value: "400px"
});
cssClass.setStyle({
    name: "margin",
    value: "15px"
});
console.log(cssClass.getCss());

cssClass.deleteStyle({
    name: "margin",
    value: "15px"
});
console.log(cssClass.getCss());
