//#region Задание 1 +
/*
 Реализовать класс, описывающий окружность. 
 В классе долж-ны быть следующие компоненты:
    - поле, хранящее радиус окружности;
    - get-свойство, возвращающее радиус окружности;
    - set-свойство, устанавливающее радиус окружности;
    - get-свойство, возвращающее диаметр окружности;
    - метод, вычисляющий площадь окружности;
    - метод, вычисляющий длину окружности.
 Продемонстрировать работу свойств и методов.
*/
class Circle {
    radius = 0.00                           //поле, хранящее радиус окружности;
    constructor(radius) {
        this.radius = radius;
    }

    get Radius() {                          //get-свойство, возвращающее радиус окружности;
        return this.radius;
    }

    set Radius(value) {                     //set-свойство, устанавливающее радиус окружности;
        this.radius = value;
    }

    get Diameter() {                        //get-свойство, возвращающее диаметр окружности;
        return this.radius * 2;
    }

    calcSquare() {                          //метод, вычисляющий площадь окружности;
        return this.radius ** 2 * Math.PI;
    }

    calcCircumference() {                   //метод, вычисляющий длину окружности.
        return this.Diameter * Math.PI;
    }

    toSring() {
        return `${this.Radius}`;
    }
}

let testCircle = new Circle(15);
console.log(testCircle);
console.log('Radius = ', testCircle.Radius);
console.log('Square = ', testCircle.Diameter);
console.log('Square = ', testCircle.calcSquare());
console.log('Circumference = ', testCircle.calcCircumference());