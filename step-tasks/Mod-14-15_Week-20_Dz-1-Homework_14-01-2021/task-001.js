/**Для реализации всех заданий необходимо использовать
библиотеку jQuery.
Задание 1
Реализовать генератор случайных строк.
Пользователь должен иметь возможность указать:
■■ длину строки;
■■ из каких символов строка может состоять:
• цифры;
• латинские буквы в верхнем регистре;
• латинские буквы в нижнем регистре.
При нажатии на кнопку Generate необходимо вывести сгенери-
рованную по пользовательским критериям строку в текстовое поле. */

$(document).ready(function () {
    $('#btn__generate__password').click(function (e) {
        e.preventDefault();
        
        let result = '';
        let charset = '';
        const uppChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowChar = 'abcdefghijklmnopqrstuvwxyz';
        const digits = '0123456789';

        charset += $('#uppercase__letter__check').is(':checked') ? uppChar : '';
        charset += $('#lowercase__letter__check').is(':checked') ? lowChar : '';
        charset += $('#numeric__check').is(':checked') ? digits : '';

        const passwLength = $('#password__length').val();
        for (let i = 0; i < passwLength; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        $('#generate__result').val(result);
    });

    let chkCount = 0;

    $("input[type=checkbox]").click(function () {
        ShowButton();
    });
    $('#password__length').click(function () {
        ShowButton();
    });
    $('#password__length').keyup(function () {
        ShowButton();
    });


    function ShowButton() {
        chkCount = $("input:checked").length;
    
        if (chkCount > 0 && $('#password__length').val() > 0 && $('#btn__generate__password').css('display') == 'none') {
            $('#btn__generate__password').slideDown();
        }
        else if (chkCount <= 0 | $('#password__length').val() <= 0) {
            $('#btn__generate__password').slideUp();
        }
    }
});