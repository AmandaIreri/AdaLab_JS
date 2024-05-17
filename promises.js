const internship = false;
const ourPromise = new Promise((resolve, reject) => {
    if(internship){
        resolve('I made it');
    }
    else{
        reject('I will try harder')
    }
})

ourPromise.then((response)=>{
    console.log({response})
    console.log('I will continue working hard');
})
.catch((error)=>{
    console.log({error})
    console.log('I will continue applying for jobs');
})
.finally(()=>{
    console.log('I will be a Software Engineer');console.log('I will continue applying for jobs')
});

console.log({ourPromise})

async function myAkiraChixDream(){
    try{
        console.log('This is my dream');
        await ourPromise;
    }
    catch{
        console.log('our dream is not yet successful');
    }
}

myAkiraChixDream();

//promise chaining then()- if promise is successful,catch-rejected,finally-resolved/rejected ---all take callbacks as arguments
//asynchronous is a function that returns promises
//try

