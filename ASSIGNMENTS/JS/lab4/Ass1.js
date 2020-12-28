var arr = new Array();
function add()
{
    var inp = document.getElementById('inp');
    arr.add(String(inp.value));  
    
    
}

function display()
{
    document.writeln("<h2>List Of Strudents</h2><hr>");
    for(var i=0;i<arr.length;i++)
    {
        document.writeln("arr[i]<br>");
    }
}