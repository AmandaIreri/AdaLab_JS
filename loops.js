
// for  loop iterates by indexes    initial value, threshhold, accumulator
const multiply = (num) =>{
    let newArray = [];

    for (let i = 0; i < num.length; i++){
        const multiplyByTwo = num[i] * 2;
        newArray.push(multiplyByTwo);
    }
    return newArray;
}

console.log(multiply([2, 3, 4, 5, 6, 7,8 ]))


//for...of returns a single element
const totalSum = (numbers) => {
    let sum = 0 ;
    for (let num of numbers){

        if(num ===5){
            break;
        }
        sum+=num;
    }
    return sum;
}
console.log (totalSum([2,3,4,5,6,7,8]))

//while loop
const students = (studentNames) =>{
    while (studentNames.length >2){
        console.log('Teach Students');

        studentNames.pop();                              
        if (studentNames.length ===2){                           //
            console.log('You are left with two students')
        }
    }
};
students(['Ema', 'Eve','Ann','Judith'])

//do while loop   do first then checks
const kickBall = (leg) =>{
    do{
        console.log('Kick the ball');
    }while (leg)
};
kickBall(false)

