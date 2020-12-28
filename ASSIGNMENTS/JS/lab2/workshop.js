"use strict";
var no1 = 0;
var no2 = 0;
var op_presssed=false;
var op;
var result = 0;

function initial() //RESET ALL VALUES
{
    no1=undefined;
    no2=undefined;
    op_presssed=false;
    result=undefined;
    op=undefined;
}

function operate(o)
{
    if(no1==undefined)
    {
        alert("NO number entered");
        initial();
    }
    else
    {
        op_presssed=true;
        op=String(o);
        alert("operator pressed: "+op);
    }
}

function accept(v)
{
    alert("accept called");
    var val=Number(v);
    if(op_presssed==false)
    {
        
        if(no1==undefined)
        {
            no1=val;
            alert("No1 = "+no1);
        }
        else{
            no1=no1*10;
            no1=no1+val;
            alert("No1 = "+no1);
        
        }
    }
    else{
       
        if(no2==undefined)
        {
            no2=val;
            alert("No2 = "+no2);
        }
        else{
            no2=no2*10;
            no2=no2+val;
            alert("No2 = "+no2);
        
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
            no1=no1%10;
            alert(no1);
        
        }
    }
    else{
       
        if(no2==undefined)
        {
            alert("No Number present");
        }
        else{
           no2=no2%10;
           alert(no2);
        }
    }
    
}