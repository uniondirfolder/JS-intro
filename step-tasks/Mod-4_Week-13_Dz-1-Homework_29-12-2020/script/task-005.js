/**Задание 5
Создать html-страницу, на которой пользователь может ввести номер месяца, год, и получить календарь на указанный месяц.
Календарь можно генерировать с помощью таблицы. Начальный
день недели всегда должен быть понедельник. */

const dom = {
    month: document.querySelector('#month'),
    year: document.querySelector('#year'),
    btnGenerate: document.querySelector('.btn_Generate'),
    calendar: document.querySelector('.show_table')
}

dom.btnGenerate.addEventListener('click', () => {
    if (dom.year.value !== '' & dom.month.value !== ''
        & dom.year.value >= 1900 & dom.year.value <= 2100
        & dom.month.value >= 1 & dom.month.value <= 12) {
        genCalendar(dom.year.value, dom.month.value);
    } else {
        dom.calendar.style.display = 'none';
    }
});

function genCalendar(year, month) {
    const firstDateMonth = new Date(year, month - 1),
        lastDateMonth = new Date(year, month, 0);
    let day = (firstDateMonth.getDay() == 0) ? 6 : firstDateMonth.getDay() - 1,
        dateNum = firstDateMonth.getDate(),
        start = false;

    dom.calendar.style.display = 'table';

    clearCalendar();

    [...dom.calendar.rows].forEach((tr, i) => {
        [...tr.cells].map((td, j) => {
            (i == 1 & j == day) ? start = true : false;
            if (i > 0 & start) {
                if (dateNum <= lastDateMonth.getDate()) {
                    td.innerText = dateNum++;
                } else if (j == 0) {
                    tr.style.display = 'none';
                }
            }
        });
    });
}

function clearCalendar() {
    [...dom.calendar.rows].forEach((tr, i) => {
        [...tr.cells].map((td, j) => {
            if (i > 0) {
                td.innerText = '';
                tr.style.display = '';
            }
        });
    });
}