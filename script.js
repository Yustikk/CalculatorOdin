

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

function operate(a,operation,b)
{
    if(operation!="")
    {
            result=true;
                    
           switch(operation)
            {
                case "+":
                    number1=String(add(a,b));
                    break;
                case "-":
                    number1=String(substract(a,b));
                    break;
                case "*":
                    number1=String(multiply(a,b));
                    break;
                case "/":
                    number1=String(divide(a,b));
                    break;
            }
                    
    }
}

//before showing a number add .tofixed(2)

//making the display!

let display=document.getElementById("display");

//Making the buttons functional----------------------------------------------------------------
let number1='';
let number2='';
let operand='';
let result=false;


let buttons=document.querySelectorAll("button");
console.log(buttons);
buttons.forEach( (button) => button.addEventListener("click", function(e){
    
    let item=e.target.innerText;
    
    if((item <=9 && item>=0)|| item==".")
    {   
        if(!(item=="." && number2.indexOf(".")!=-1))
        {
                if(result)
        {
            number1='';
                number2='';
        }
        result=false;
        number2=number2+item;
        display.innerText=number2.slice(0,7);
        }
        
        

    }
    else
    {
        result=false;
        if(number1=='')
            number1=number2;
        switch(item)
        {

            case "AC":
                display.innerHTML="";
                number1='';
                number2='';
                operand="";
                break;
            case "+/-":
                number1=String(changesign(Number(number1)));
                break;
            case "%":
                number1=String(precent(Number(number1)));
                break;
            case "=":
                a=Number(number1);
                b=Number(number2);
                operate(a,operand,b);
                break;
            
            default:
                operand=item;
                number2="";
                break;
                
        }
        display.innerText=number1.slice(0,7);
        
        
    }
            console.log(number1+" "+operand+" " +number2+"\t"+result);

}))

function verifyNumberLenght()
{
    return (number2.length<7);
}