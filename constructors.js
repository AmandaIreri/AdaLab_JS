function Person (name,age){             // constructor
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
};

//instance objects
const adam = new Person ('Adam', 30);
console.log ({adam});
adam.language = 'English';
console.log({adam})

const eve = new Person('Eve',20);
console.log(eve);

//prototypes - prototype object {} .... prototype - used to create propertie and methods within a class constructor
Person.prototype.nationality = 'Kenyan';
console.log({adam});
console.log('adam-nationality', adam.nationality);
console.log('eve-nationality', eve.nationality);

eve.nationality = 'Ugandan'
console.log({eve});
console.log({adam});

//calling the method greet
adam.greet();