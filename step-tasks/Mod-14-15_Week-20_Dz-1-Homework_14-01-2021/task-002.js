/**Задание 2
Реализовать html-страницу, состоящую из 4-х блоков.
Страница должна занимать всю возможную ширину и высоту,
при этом ни горизонтальный, ни вертикальный скроллы не должны
никогда появляться.
При нажатии на серую стрелку – левый блок должен полностью
скрываться и стрелка меняться на противоположную (указывать
не в левую, а в правую сторону). При повторном щелчке по этой
же стрелке – левый блок должен возвращаться к первоначальной
ширине и стрелка снова меняется.
 При нажатии на ползунок (похож на символ =) и одновремен-
ном движении мышкой вверх или вниз, высота нижних и верхних
блоков должна изменяться в соответствии с положением мышки.
При этом высота блоков (и нижних, и верхних) не может стано-
виться меньше 100 пикселей.*/

$(document).ready(function () {

    $('main').resize(function () {
        $('main').height(window.innerHeight)
        $('main').width(window.innerWidth);
    });
    $('main').resize();


    let panelsPerc = [.2, .8];
    $('#left__panel').width($('main').width() * panelsPerc[0] - $('#outer__separator').width() / 2);
    $('#left__panel>.separator>p').css({ left: $('#left__panel').width() / 2 });
    $('#right__panel').width($('main').width() * panelsPerc[1] - $('#outer__separator').width() / 2);
    $('#right__panel>.separator>p').css({ left: $('#left__panel').width() + $('#right__panel').width() / 2 });

    $('#blue__section').height($('#left__panel').height() / 2 - $('#left__panel > .separator').height() / 2);
    $('#pink__section').height($('#left__panel').height() / 2 - $('#left__panel > .separator').height() / 2);

    $('#green__section').height($('#right__panel').height() / 2 - $('#right__panel > .separator').height() / 2);
    $('#orange__section').height($('#right__panel').height() / 2 - $('#right__panel > .separator').height() / 2);


    let isDragging = false;
    let dragable = null;
    $('#left__panel>.separator')
        .mousedown(function () {
            isDragging = true
            dragable = 'left'
        });

    $('#right__panel>.separator')
        .mousedown(function () {
            isDragging = true
            dragable = 'right'
        });

    $('*').mousemove(function (e) {
        if (isDragging == true) {

            if (e.clientY > 100 && e.clientY < $('main').height() - 100) {

                if (dragable == 'left') {
                    LeftPanelSizing(e.clientY)
                }
                else if (dragable == 'right') {
                    RightPanelSizing(e.clientY)
                }
            }
        }
    });

    $('*').mouseup(function () {
        isDragging = false
        dragable = null
    });

    function LeftPanelSizing(mouseY) {
        $('#blue__section').height(mouseY - $('.separator-horizontal').height() / 2)
        $('#pink__section').height($('#left__panel').height() - mouseY - $('.separator-horizontal').height() / 2)
    }

    function RightPanelSizing(mouseY) {
        $('#green__section').height(mouseY - $('.separator-horizontal').height() / 2)
        $('#orange__section').height($('#right__panel').height() - mouseY - $('.separator-horizontal').height() / 2)
    }

    $('#outer__separator')
        .mousedown(function () {
            TogglePanels()
        });


    function TogglePanels() {
        if ($('#left__panel').hasClass('toggled')) {
            $('#left__panel').removeClass('toggled');
            $('#right__panel').animate({ width: $('main').width() * panelsPerc[1] - $('#outer__separator').width() / 2 }, 600);
            $('#left__panel').animate({ width: 'toggle' }, 600);
            $('#left__panel>.separator>p').animate({ left: 'toggle' }, 600);
            $('#right__panel>.separator>p').animate({ left: $('#left__panel').width() + $('#right__panel').width() / 2.2 }, 600);
            $('#outer__separator>p').text('\u2039')
        } else {
            $('#left__panel').addClass('toggled');
            $('#left__panel').animate({ width: 'toggle' }, 600);
            $('#right__panel').animate({ width: $('main').width() - $('#outer__separator').width() }, 600);
            $('#left__panel>.separator>p').animate({ left: 'toggle' }, 500);
            $('#right__panel>.separator>p').animate({ left: $('#right__panel').width() / 2 }, 600);
            $('#outer__separator>p').text('\u203A')
        }
    }


});
