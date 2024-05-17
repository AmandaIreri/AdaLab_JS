//closure is the ability of an inner function to access the variables in the outer function
//lexical - inner fnction

function nums (){
    const a = 2;
    console.log({a});
    function add(){
        const b = 3;
        console.log(a+b);
    };
    add();
}

nums();