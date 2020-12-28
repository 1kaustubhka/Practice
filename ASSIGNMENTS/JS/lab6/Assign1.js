function validateName(elem)
{
   if(elem.value=="")
   {
       throwclr(elem,"NAME IS MANDATORY");
   }
   else
   {
       elem.className="normal"
   }
 
}

function setPatDate(d)
{
    d.pattern = "[1-31]-[1-12]-[1000-9999]";
   
    
}

function validateDate(d)
{
    if(d.validity.patternMismatch)
    {
        throwclr(d,"DATE NOT IN FORMAT");
        alert("validate");
    }

}


function clearInp(d)
{
    var dt = d.value;
    alert(dt);
    if(isNaN(dt) && (dt[length]!="-"))
    {
        alert("char detected");
        d.value=dt.substring(0,dt.length-1);
    }
}


function throwclr(e,msg)
{

    e.className = "error";
    alert(msg);
    
   
}