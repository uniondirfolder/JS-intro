/**Задание 7
Создать html-страницу с деревом вложенных директорий.
При клике на элемент списка, он должен сворачиваться или
разворачиваться. При наведении на элемент, шрифт должен ста-
новится жирным (с помощью CSS). */


for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); 
}

tree.onclick = function (event) {

    if (event.target.tagName != 'SPAN') {
        return;
    }

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
}