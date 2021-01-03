let count = 1;
document.querySelector("#next").addEventListener("click", () => {
    ++count;
    switch (count) {
        case 1:
            document.querySelector("#red").style.backgroundColor = "red";
            document.querySelector("#green").style.backgroundColor = "darkgrey";
            break;
        case 2:
            document.querySelector("#red").style.backgroundColor = "darkgrey";
            document.querySelector("#yellow").style.backgroundColor = "yellow";
            break;
        case 3:
            document.querySelector("#yellow").style.backgroundColor = "darkgrey";
            document.querySelector("#green").style.backgroundColor = "green";
            break;
    }
    if (count >= 3) count = 0;
});