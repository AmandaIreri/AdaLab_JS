function greet(userName,callback){
    console.log(`Hello there ${userName}`);

    callback();
};

function intro(){
    console.log('This is me');
};

greet('Hellen',intro);

//set timeout takes in two arguments, callback function and time in milliseconds
setTimeout(intro, 2000)

setInterval(function(){
    console.log('This is an interval');
}, 3000)

// research clearInterval,clearTimeout

