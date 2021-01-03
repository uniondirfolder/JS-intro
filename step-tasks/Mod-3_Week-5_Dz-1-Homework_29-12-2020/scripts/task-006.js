/**Задание 6
Создать html-страницу с несколькими кнопками.
При наведении на кнопку, должна появляться подсказка с тек-
стом. По умолчанию – подсказка появляется сверху от кнопки. Но
если она не помещается сверху от кнопки, тогда отображается снизу */

/*version 2*/
let tooltipMainBody;
let tooltipFairy;

document.onmouseover = function (event) {
    let target = event.target;

    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipFairy = document.createElement('div');
    tooltipFairy.className = 'tooltip-arrow';
    document.body.append(tooltipFairy);

    tooltipMainBody = document.createElement('div');
    tooltipMainBody.className = 'tooltip';
    tooltipMainBody.innerHTML = tooltipHtml;
    document.body.append(tooltipMainBody);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipMainBody.offsetWidth) / 2;
    let leftTa = coords.left + (target.offsetWidth - tooltipFairy.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipMainBody.offsetHeight - 5;
    let topTa = coords.top - tooltipFairy.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
        topTa = coords.top + tooltipFairy.offsetHeight + 5;
    }

    tooltipMainBody.style.left = left + 'px';
    tooltipMainBody.style.top = top + 'px';


    tooltipFairy.style.left = leftTa + 'px';
    tooltipFairy.style.top = topTa + 'px';
};

document.onmouseout = function (e) {

    if (tooltipMainBody) {
        tooltipMainBody.remove();
        tooltipMainBody = null;
    }

    if (tooltipFairy) {
        tooltipFairy.remove();
        tooltipFairy = null;
    }

};
