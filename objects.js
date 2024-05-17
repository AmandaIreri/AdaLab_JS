const cup = {
    color: 'red',
    size: 'small',
    texture: 'smooth',
    shape:'round',
    functionality:{
        drinkType: 'tea',
        temperature: 'hot'

    },
    // in a method, the value (insice the brackets) is a function

    drink: function(){
    console.log("Use me to drink")
    console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`);
    }
    //incase you use arrow function 'this' does not work
};

console.log({color: cup.color})
console.log('size', cup.size);
console.log('temperature', cup.functionality.temperature)
console.log('texture', cup['texture'])
console.log(cup.shape,cup.texture)

// to add a property
cup.model = 'glass';    // it is not among the main building blocks
console.log({cup})

delete cup.model
console.log({cup})

//to change a value
cup.color = 'red'
console.log({cup})

//callling the function drink
cup.drink()

//to get all the keys
const keys = Object.keys(cup)
console.log({keys})

//to get all values
const values = Object.values(cup)
console.log({values})

//looping
Object.keys(cup). forEach(item => {
    console.log({key:item, value:cup[item]})
})

// const loop= Object.keys(cup). map(item => {
//     return({key:item, value:cup[item]})
// })