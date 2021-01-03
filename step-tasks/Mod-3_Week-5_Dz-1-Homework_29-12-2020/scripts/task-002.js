/**Задание 2
Создать html-страницу с кнопкой Открыть и модальным
окном. На модальном окне должен быть текст и кнопка Закрыть.
Изначально модальное окно не отображается. При клике на
кнопку Открыть появляется модальное окно, на кнопку Закрыть –
исчезает. */

document.querySelector("#openWindow").addEventListener("click", () => {
    let div = document.querySelector(".modal");
    div.style.display = "block";
    document.querySelector("#close").addEventListener("click",()=>{
        div.style.display = "none";
    })
});