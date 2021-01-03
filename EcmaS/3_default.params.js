function compute(a, b = 20) {
    return a + b;
}

function compute(a = 10, b) {//!NaN 
    return a + b;
}

const defaultB = 30;
function compute(a, b = defaultB) {
    return a + b;
}

function compute(a, b = defaultB) {
    return a + b;
}


console.log(compute(3));