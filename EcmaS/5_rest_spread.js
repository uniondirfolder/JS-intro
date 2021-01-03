//Rest
function averange(a, b, ...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length;
}

console.log(averange(10,20,30,40));


//Spread
const array = [1,2,3,4,5,6,7];
console.log(...array);

console.log(Math.max.apply(null,array));
console.log(Math.max(...array));
console.log(Math.min(...array));

const som = [1, ...array];
console.log(som);

//Destracturing
const array1 =[1,undefined,3,4,5,6,7];
//const a2 = array1[0];
//const b2 = array1[1];
const [a2,b2=42, ...c]=array1;
console.log(a2,b2,c);

const [a,,c]=array1;

//Object
const address={
    country: 'Uk',
    city:'By',
    street:'Ret',
    concat:function(){
        return `${this.country}, ${this.city},${this.street}`
    }
}
const {city,country,street = 'Momo',concat: newaddressConcat}=address;
console.log(newaddressConcat.call(address));

const {city, ...rest}=address
console.log(city);
console.log(rest);

const newObj ={...address, street:'Newstreet', code:123}
