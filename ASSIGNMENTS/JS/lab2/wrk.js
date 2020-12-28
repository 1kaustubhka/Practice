
"use strict";
var no1 = undefined;
var no2 = undefined;            //INITIALIZATION
var op_presssed=false;
var op;
var res = undefined;

function science()     // SCIENTIFIC BUTTON VISISBLITY
{
    if((document.getElementById("scintific").style.visibility)=="hidden")
    {
        document.getElementById("scintific").style.visibility="visible";
    }
    else
    {
        document.getElementById("scintific").style.visibility="hidden";
    }
}

function initial() //RESET ALL VALUES
{
    no1=undefined;
    no2=undefined;
    op_presssed=false;
    res=undefined;
    op=undefined;
    document.getElementById("inp").innerHTML="0";
}

function operate(o)
{
    if(op_presssed==true)     // IF SOME OPERATIONS HAVE ALREADY HAPPENED
    {
        if(no1==undefined || no2==undefined)
        {
            alert("No number enetered");
        }
        else{
            calculate();        //CALCULATE THE PREVIOUS ENTERED NOS AND THEN BEGIN NEXT OPERATION
            op_presssed=false;
            no1=res;
            no2=undefined;
            op=undefined;
        }
    }
    if(no1==undefined)  //OPERATOR PRESSED WITHOUT ANY NUMBER
    {
        alert("NO number entered");
        initial();
    }
    else
    {
        op_presssed=true;
        op=String(o);
        
    }
}

function accept(v)
{
    
    var val=Number(v);
    if(op_presssed==false)
    {
        
        if(no1==undefined)
        {
            no1=val;
            
            document.getElementById("inp").innerHTML=no1;
        }
        else{
            no1=no1*10;
            no1=no1+val;
            
            document.getElementById("inp").innerHTML=no1;
        
        }
    }
    else{
       
        if(no2==undefined)
        {
            no2=val;
   
            document.getElementById("inp").innerHTML=no2;
        }
        else{
            no2=no2*10;
            no2=no2+val;
          
            document.getElementById("inp").innerHTML=no2;
        
        }
    }
    
}

function back()
{

   
    if(op_presssed==false)
    {
        
        if(no1==undefined)
        {
            alert("No Number present");
        }
        else{
            no1=no1/10;
            no1=Math.floor(no1);
        
            document.getElementById("inp").innerHTML=no1;
        
        }
    }
    else{
       
        if(no2==undefined)
        {
            alert("No Number present");
        }
        else{
           no2=no2/10;
           no2=Math.floor(no2);
         
           document.getElementById("inp").innerHTML=no2;
        }
    }
    if(res!=undefined && op_presssed==true)
    {
        alert("clear all");
        initial();
    }
    
}

function calculate()
{
   if(no1==undefined)
   {
       no1=0;
   }
   if(no2==undefined)
   {
      no2=0;
   }
   if(op==undefined)
   {
       res=0;
       alert("Operation not defined");
       initial();
   }
   switch (op) {
       case "+":
           res=Number(no1)+Number(no2);
      
           break;

        case "-":
            res=Number(no1)-Number(no2);
           
            break;

        case "x":
            res=Number(no1)*Number(no2);
          
            break;

        case "/":
            res=Number(no1)/Number(no2);
         
            break;
   
       default:
           alert("ERROR");
   }
   document.getElementById("inp").innerHTML=res;
 
}


function square()
{
    if(res!=undefined)
    {
        res=res*res;
        
        no1=res;
    }
    else if(no1!=undefined)
    {
        res=no1*no1;
     
        no1=res;
    }
    else{
        alert("NO Number Entered");
    }
    document.getElementById("inp").innerHTML=res;
    no2=0;
    op_presssed=false;
}

function cube()
{
    if(res!=undefined)
    {
        res=res*res*res;
    
        no1=res;
    }
    else if(no1!=undefined)
    {
        res=no1*no1*no1;
 
        no1=res;
    }
    else{
        alert("NO Number Entered");
    }
    document.getElementById("inp").innerHTML=res;
    no2=0;
    op_presssed=false;
}
function squareroot()
{
    if(res!=undefined)
    {
        res=Math.sqrt(res);
       
        no1=res;
        
    }
    else if(no1!=undefined)
    {
        res=Math.sqrt(no1);
    
        no1=res;
    }
    else{
        alert("NO Number Entered");
    }
    document.getElementById("inp").innerHTML=res;
    no2=0;
    op_presssed=false;
}