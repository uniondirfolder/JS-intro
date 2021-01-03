/**
 * Задание 5
Создать html-страницу со списком книг.
При щелчке на книгу, цвет фона должен меняться на оранжевый.
Учтите, что при повторном щелчке на другую книгу, предыдущей –
необходимо возвращать прежний цвет.
 */

let flag = false;
let lastPath;
document.querySelector("ol").addEventListener("click", function(event){
    if(flag) lastPath.style.backgroundColor = "white";
    lastPath = event.path[0];
    event.path[0].style.backgroundColor = "orange";
    flag=true;
});