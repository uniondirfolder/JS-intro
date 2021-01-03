//'' ""
const title = 'Foo'
const isVisible=()=>Math.random()>0.5;
const template=`
${isVisible()? `<p>Visible</p>`: ''}
     "spaces_to_includ"
<h1 style="color: green" >${title}</h1>
`

const str = 'Hello';
console.log(str.startsWith('He'));
console.log(str.endsWith('lo'));
console.log(str.includes('llo'));
console.log(str.repeat(3));
console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());
console.log(str.padStart(10));
console.log(str.padEnd(10));