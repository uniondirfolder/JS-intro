/**Задание 3
Создать html-страницу с блоками информации, которые открываются по щелчку на заголовок. В один момент времени может
быть развернут только один блок информации. */


const dom = {
    title: document.querySelectorAll('.title'),
    text: document.querySelectorAll('.text')
}

dom.title.forEach((el) => {
    el.addEventListener('click', (ev) => {
        let textBlock = ev.target.nextElementSibling;
        dom.text.forEach((el) => (ev.target.nextElementSibling != el) ? el.classList.add('none') : false);
        ev.target.nextElementSibling.classList.toggle('none');
    });
});
