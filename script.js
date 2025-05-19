let a=3;
let b=5;

//operation functions!------------------------------------------------------------------------
function add(a,b)
{
    return a+b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    return a/b;
}

function substract(a,b)
{
    return a-b;
}

function precent(a)
{
    return a/100;
}

function changesign(a)
{
    return a*(-1);
}

//before showing a number add .tofixed(2)

//Making the buttons functional----------------------------------------------------------------

let buttons=document.querySelectorAll("button");
console.log(buttons);
buttons.forEach( (button) => button.addEventListener("click", function(e){
    console.log(e.target.innerText+" has been pressed!")
    let item=e.target.innerText;
    
}))