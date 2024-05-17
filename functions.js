function add (num1, num2){
    const sum = num1 + num2;
    console.log({console:sum});
    return {'sum':sum}
}

console.log(add(2,3));  //add(2,3) callback function
add(4,5);


const student = 'Agnes'  //global variable within global scope
function item (){
    const names = ['Anne','Eunice'];   //local scope variables declared here cannot be called outside or accessed
    console.log({names});

    let child;
}
item();   //

child = 'boy'
console.log({})

//function expression

const subtract = function (num1,num2){
    console.log(num1-num2);
}
subtract(20,10)

//arrow functions

const multiply = (num1,num2) => console.log(num1*num2); //to return omit the return function
multiply(6,9);


//IIFEs
(function(){
    console.log('hey');
})();

//Hoisting  to call a function before declaring. do not use let,var or const when hoisting
console.log({person});
var person = 'human';
console.log({person});

//right way
greet()

function greet (){
    console.log('Hi person')
}

// hello();
// const hello = () => console.log('This is a greeting');  you cannot use a fnction expression or arrow exp in hoisting