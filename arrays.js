// 2 ways of creating an arrays
let fruits = ['Mango','Banana','Orange'];

let arr = new Array(20, 30);

console.log({fruits});
console.log({arr});

fruits[1]= 2;
console.log({fruits});

console.log('last item', fruits.slice(-1)) 
 fruits[fruits.length -1] // use this
//to get the last item in a string or array
// slice takes two values, the end finishes at the  value before and ignores the last index

let addLast = fruits.push('Apple')  // used when you want to add an item at the end of an array
console.log({fruits})

let addStart = fruits.unshift('Pineapple')
console.log({fruits})

let removeLast = fruits.pop();  //to remove the last item
console.log({fruits})

let removeFirst = fruits.shift() // to remove the first item
console.log({fruits})
 //to add an item at index 2,slice upto index 2 add the item then join

let newFruits = fruits.push(['Tomato','Pear']); //concat is used to add a new array
console.log({fruits})

//reduce function => call back function
let items = [20,30,40,50,60];
let add = items.reduce((acc, cur) => acc+cur); //=> means return value  acc= accumulator, cur= currentValue
console.log({add});

//map is a function that goes thru every item manipulates it and returns an array
//from item is a function which takes another function (item)
//append is to add(happens at the background)
let multiply = items.map(item => item * 2);
console.log({multiply});

//when using for each,you canot return,it gives undefined
let square = [];
let total = 0

items.forEach(item => {
    const multiple = item * item;
    console.log(multiple);
    square.unshift(multiple);
    total+=item
});
console.log({square});
console.log({total})

//Destructuring

let [num1, num2, num3, ...rest] = items;  // ... restructuring operator
console.log ({num1});
console.log ({num2});
console.log ({num3});
console.log ({rest})