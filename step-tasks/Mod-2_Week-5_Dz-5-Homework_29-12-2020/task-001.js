/*Задание 1
Реализовать класс, описывающий простой маркер. В классе
должны быть следующие компоненты:
■■ поле, которое хранит цвет маркера;
■■ поле, которое хранит количество чернил в маркере (в про-
центах);
■■ метод для печати (метод принимает строку и выводит
текст соответствующим цветом; текст выводится до тех
пор, пока в маркере есть чернила; один не пробельный
символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер,
унаследовав его от простого маркера и добавив метод для заправки
маркера.
Продемонстрировать работу написанных методов.*/

class Marker {
    constructor(color, inkQuantity) {
        this.color = color,
            this.inkQuantity = inkQuantity,
            this.x = document.createElement("INPUT"),
            this.x.setAttribute("id", "myText"),
            this.x.setAttribute("type", "text"),
            this.x.style = "margin: 5px;",
            this.x.style = "color: " + `${this.color}`,
            this.x.size = 100,
            this.x.textContent = this.printDraw();

    }

    printDraw(code) {

        if (code != 'Space') {
            if (this.inkQuantity > 0) {
                document.getElementById("myBar").style = `width: ${this.inkQuantity}%`;
                document.getElementById("myBar").innerText = `${this.inkQuantity}%`;
                this.inkQuantity -= 0.5;

            }
            if (this.inkQuantity == 0) {
                document.getElementById("myBar").style = `width: ${0}%`;
                document.getElementById("myBar").innerText = `${0}%`;
                this.color = "white";
                this.x.style = "color: " + `${this.color}`;
            }
        }

    }
}

class RefillMarker extends Marker {
    constructor(color, inkQuantity) {
        super(color, inkQuantity);
    }
    refill() {
        if (this.inkQuantity < 100) {
            if(this.inkQuantity>90 && this.inkQuantity < 100){
                this.inkQuantity += (100 - this.inkQuantity);
            }
            else{
                this.inkQuantity = (this.inkQuantity + 10);
            }

            this.color = "red";
            this.x.style = "color: " + `${this.color}`;
            document.getElementById("myBar").style = `width: ${this.inkQuantity}%`;
            document.getElementById("myBar").innerText = `${this.inkQuantity}%`;
        }
    }
}

let marker = new RefillMarker("red", 10);
function btnClickFillMarker() {
    marker.refill();
}
document.getElementsByClassName("task-001")[0].appendChild(marker.x);
document.addEventListener('keydown', function (event) {
    if (document.activeElement === document.getElementById("myText")) {
        marker.printDraw(event.code);
    }
});


