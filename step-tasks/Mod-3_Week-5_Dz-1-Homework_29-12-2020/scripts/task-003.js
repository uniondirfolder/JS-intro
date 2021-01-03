/*Создать html-страницу с футбольным полем, которое зани-
мает всю ширину и высоту экрана, и мячом размером 100 на 100
пикселей.
Сделать так, чтобы при клике мышкой по полю, мяч плавно
перемещался на место клика. Учтите: необходимо, чтобы центр
мяча останавливался именно там, где был совершен клик мышкой.
Также предусмотрите, чтобы мяч не выходил за границы поля.*/


inner__field.onclick = function (event) {

    let fieldCoords = this.getBoundingClientRect();
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 + 12.5,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2 + 12.5
    };
    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth - 25;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight - 25;
    }
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}