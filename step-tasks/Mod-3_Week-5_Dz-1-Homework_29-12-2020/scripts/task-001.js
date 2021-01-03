/**
 * Задание 1
Создать html-страницу для ввода имени пользователя.
Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input.
 */
document.checkname.yourname.addEventListener("input", () => {
    let pattern = /\d+/;
    let result = document.forms[0].yourname.value;
    if (pattern.test(result)) {
        document.forms[0].yourname.value = result.slice(0, result.length - 1);
    }
});