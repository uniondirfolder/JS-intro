function compute(a, b = 20) {
    return a + b;
}

function compute2(a = 10, b) {//!NaN 
    return a + b;
}

const defaultB = 30;
function compute3(a, b = defaultB) {
    return a + b;
}

const getDefault = c => c * 2;
function compute4(a, b = getDefault(a)) {
    return a + b;
}


console.log(compute(3));