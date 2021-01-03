function compute(a, b = 20) {
    return a + b;
}

function compute1(a = 10, b) {//!NaN 
    return a + b;
}

const defaultB = 30;
function compute2(a, b = defaultB) {
    return a + b;
}

const getDefault = c => c * 3;
function compute3(a, b = getDefault(10)) {
    return a + b;
}

console.log(compute3(20));