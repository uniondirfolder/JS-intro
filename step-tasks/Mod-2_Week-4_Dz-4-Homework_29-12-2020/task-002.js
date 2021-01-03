/*
Реализовать класс, описывающий html элемент.
Класс HtmlElement должен содержать внутри себя:
    - название тега;
    - самозакрывающийся тег или нет;
    - текстовое содержимое;
    - массив атрибутов;
    - массив стилей;
    - массив вложенных таких же тегов;
    - метод для установки атрибута;
    - метод для установки стиля;
    - метод для добавления вложенного элемента в конец теку-щего элемента;
    - метод для добавления вложенного элемента в начало те-кущего элемента;
    - метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов.
*/

class MyHtmlElement {
    nameTag = '';                //- название тега;
    isSelfClosing = false;       //- самозакрывающийся тег или нет;
    textContent = '';            //- текстовое содержимое;
    attributes = [];             //- массив атрибутов;
    styles = [];                 //- массив стилей;
    tags = [];                   //- массив вложенных таких же тегов;

    constructor(nameTag, isSelfClosing, textContent = undefined) {
        this.nameTag = nameTag,
        this.isSelfClosing = isSelfClosing,
        this.textContent = textContent
        this.attributes = [],
        this.styles = [],
        this.tags = [];
    }


    setAttribute(attribute) {                   //- метод для установки атрибута;
        if (this.attributes == null) {
            this.attributes = [attribute];
        }
        else {
            this.attributes.push(attribute);
        }
    }

    setStyle(style) {                           //- метод для установки стиля;
        if (this.styles == null) {
            this.styles = [style];
        }
        else {
            this.styles.push(style);
        }
    }

    unshiftIhInnerTag(tag) {                         //- метод для добавления вложенного элемента в конец теку-щего элемента;
        if (!this.isSelfClosing) {
            if (this.tags == null) {
                this.tags = [tag];
            }
            else {
                this.tags.push(tag);
            }
        }
    }

    pushInnerTag(tag) {                      //- метод для добавления вложенного элемента в начало те-кущего элемента;
        if (!this.isSelfClosing) {
            if (this.tags == null) {
                this.tags = [tag];
            }
            else {
                this.tags.unshift(tag);
            }
        }
    }

    toStringAttributies() {
        let str = '';
        for (let index = 0; index < this.attributes.length; index++) {
            str += `${this.attributes[index].name}="${this.attributes[index].value}" `;
            if (index != this.attributes.length - 1) {
                str += ' ';
            }
        }
        return str;
    }

    toStringStyles() {
        let str = 'style="';
        for (let index = 0; index < this.styles.length; index++) {
            str += this.styles[index].name + ': ' + this.styles[index].value + ';';
        }
        return str + '"';
    }

    toStringTags() {
        let str = '';
        for (let index = 0; index < this.tags.length; index++) {
            str += this.tags[index].getHtml();
            if (index != this.tags.length - 1) {
                str += '\n';
            }
        }
        return str;
    }

    getHtml() {
        let str = '<';
        if (this.isSelfClosing) {

            str += this.nameTag;

            if (this.styles.length > 0) {
                str += ' ';
                str += this.toStringStyles();
            }

            if (this.attributes.length > 0) {
                str += ' ';
                str += this.toStringAttributies();
            }



            str += '/>';
        }
        else {

            str += this.nameTag;

            if (this.attributes.length > 0) {
                str += ' ';
                str += this.toStringAttributies();
            }

            if (this.styles.length > 0) {
                str += ' ';
                str += this.toStringStyles();
            }

            str += '>';

            if (this.textContent != undefined) {
                str += this.textContent;
            }

            if (this.tags.length > 0) {
                str += this.toStringTags();
            }

            str += `</${this.nameTag}>`;
        }

        return str;
    }
}

/**
 * С помощью написанного класса реализовать следующий блок
и добавить его на страницу с помощью document.write().
 */

let wrapper = new MyHtmlElement("div", false);
wrapper.setStyle({
    name: "display",
    value: "flex"
});
wrapper.setAttribute({
    name: "id",
    value: "wrapper"
});

let div = new MyHtmlElement("div", false);
div.setStyle({
    name: "width",
    value: "300px"
});
div.setStyle({
    name: "margin",
    value: "10px"
});

let h3 = new MyHtmlElement("h3", false, "What is Lorem Ipsum?");

let img = new MyHtmlElement("img", true);
img.setStyle({
    name: "width",
    value: "100%"
});
img.setAttribute({
    name: "src",
    value: "lipsum.jpg"
});
img.setAttribute({
    name: "alt",
    value: "lorem Ipsum"
});

div.pushInnerTag(h3);
div.unshiftIhInnerTag(img);

let p = new MyHtmlElement("p", false, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

let a = new MyHtmlElement("a", false, "More...");
a.setAttribute({
    name: "href",
    value: "https://www.lipsum.com/"
});
a.setAttribute({
    name: "target",
    value: "_blank"
});

p.setStyle({
    name: "text-align",
    value: "justify"
});
p.pushInnerTag(a);

div.unshiftIhInnerTag(p)
wrapper.pushInnerTag(div);
wrapper.unshiftIhInnerTag(div);

document.write(wrapper.getHtml());
