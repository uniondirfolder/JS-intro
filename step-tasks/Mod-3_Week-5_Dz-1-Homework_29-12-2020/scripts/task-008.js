/**Задание 8
Создать html-страницу с блоком текста в рамочке.
Реализовать возможность изменять размер блока, если зажать
мышку в правом нижнем углу и тянуть ее дальше. */

let block;
let block_r;
let delta_w = 0;
let delta_h = 0;

onload = function () {
    block = document.getElementById("block_008");
    block_r = document.getElementById("block_resize_008");
    document.onmouseup = clearXY;
    block_r.onmousedown = saveWH;
}

function getXY(obj_event) {
    if (obj_event) {
        x = obj_event.pageX;
        y = obj_event.pageY;
    } else {
        x = window.event.clientX;
        y = window.event.clientY;
    }
    return new Array(x, y);
}

function saveWH(obj_event) {
    let point = getXY(obj_event);
    w_block = block.clientWidth;
    h_block = block.clientHeight;
    delta_w = w_block - point[0];
    delta_h = h_block - point[1];
    document.onmousemove = resizeBlock;
    return false;
}

function clientWidth() {
    return document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement
        .clientWidth;
}

function clientHeight() {
    return document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement
        .clientHeight;
}

function clearXY() {
    document.onmousemove = null;
}

function resizeBlock(obj_event) {
    let point = getXY(obj_event);
    new_w = delta_w + point[0];
    new_h = delta_h + point[1];
    block.style.width = new_w + "px";
    block.style.height = new_h + "px";
    if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = (clientWidth() - block
        .offsetLeft) + "px";
    if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = (clientHeight() - block
        .offsetTop) + "px";
}