/*function sum(a,b) {
   return a + b
}
function cube(a) {
    return a**3
}*/

/*
const sum = (a,b)=>{
    return a + b
}
var cube = a =>{ //if one param
    return a**3
}
let sum2 = (a,b) => a + b //if one action

console.log(sum(41,1));
console.log(cube(3));

setTimeout(function(){
    console.log('After one second')
},1000);

setTimeout(() => {
    console.log('After one second')
}, 1000);*/

//Context

function log(){
    console.log(this);
}

const arrowLog =()=>console.log(this);

const persone={
    name: 'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,
    delayLog: function () {
        //const self = this
        global.setTimeout(() =>{ //window
            console.log(this.name + ' ' + this.age)
        },500)
    }
}

//persone.log()
//console.log(global);
//persone.arrowLog()//global if browther obj window

persone.delayLog()