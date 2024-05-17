let a = 'Hello';
let b = "World";
let c = `There` //template literals

console.log('length', a.length);
console.log({character: a[2]})
console.log({index: a.indexOf('e')})

//string concatenation
let add = a+b;
console.log({add})

let concatenate = `${a}${b}.I like coding`;
console.log({concatenate})