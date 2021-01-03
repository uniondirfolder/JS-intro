/*  Задание 4
        Реализовать класс, описывающий блок html документ.
        Класс HtmlBlock должен содержать внутри себя:
            ■ коллекцию стилей, описанных с помощью класса CssClass;
            ■ корневой элемент, описанный с помощью класса HtmlElement;
            ■ метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом 
            все html  содержимое из корневого тега и его вложенных элементов).
        С помощью написанных классов реализовать следующий блок (см. рис. 2) и добавить его на страницу с помощью document.write().*/     
       
       
        class HtmlBlock {
            constructor(arrCssClass, htmlElement) {
                this.arrCssClass = arrCssClass,
                this.htmlElement = htmlElement;
            }
            getStylesCode(){
                let str = "<style>"
                for(let i = 0; i < this.arrCssClass.length; ++i) {
                    str += `\n${this.arrCssClass[i].getCss()}`;
                }
                str += "\n</style>\n";
                return str;
            }
            getCode() {
                return (this.getStylesCode() + this.htmlElement.getHtml());
            }
        }   

        let wrapper_1 = new MyHtmlElement("div",false);
        wrapper_1.setAttribute({
            name:"id",
            value:"wrapper"
        });
        wrapper_1.setAttribute({
            name:"class",
            value:"wrap"
        });

        let h3_1 = new MyHtmlElement("h3",false," What is Lorem Ipsum ?");

        let img_1 = new MyHtmlElement("img",true);
        img_1.setAttribute({
            name:"class",
            value:"img"
        });
        img_1.setAttribute({
            name: "src",
            value: "lipsum.jpg"
        });
        img_1.setAttribute({
            name: "alt",
            value: "Lorem Ipsum"
        })

        let p_1 = new MyHtmlElement("p",false,`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standart dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.`);
        
        let a_1 = new MyHtmlElement("a",false,"More...");
        a_1.setAttribute({
            name:"href",
            value: "https://www.lipsum.com/"
        });
        a_1.setAttribute({
            name:"target",
            value:"_blank"
        });
        p_1.setAttribute({
            name:"class",
            value:"text"
        });

        let div_1 = new MyHtmlElement("div",false);
        div_1.setAttribute({
            name:"class",
            value:"block"
        });

        
       
        div_1.pushInnerTag(p_1);
        div_1.pushInnerTag(img_1);
        div_1.pushInnerTag(h3_1);
        
        
        

        wrapper_1.unshiftIhInnerTag(div_1);
        wrapper_1.pushInnerTag(div_1);

        let cssClass1 = new CssClass("wrap");
        let cssClass2 = new CssClass("block");
        let cssClass3 = new CssClass("img");
        let cssClass4 = new CssClass("text");

        cssClass1.setStyle({
            name:"display",
            value:"flex"
        });
        cssClass2.setStyle({
            name:"width",
            value:"300px"
        });
        cssClass2.setStyle({
            name:"margin",
            value:"10px"
        });
        cssClass3.setStyle({
            name:"width",
            value:"100%"
        });
        cssClass4.setStyle({
            name:"text-align",
            value:"justify"
        });

        let arrStyles = [cssClass1,cssClass2,cssClass3,cssClass4];

        let htmlBlock = new HtmlBlock(arrStyles,wrapper_1);

        document.write(htmlBlock.getCode());
        console.log(htmlBlock.getCode());