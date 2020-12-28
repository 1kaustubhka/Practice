function compound(){
    var p=prompt("Enter principle");
    var r=prompt("Enter rate");
    var n=prompt("Enter No. of years");
    var v=(1+(r/100));
    
    var m=v;
    for(var i=1;i<n;i++)
    {
        v=v*m;
      
    }
   
    var c=(p*v)-p;
    alert("COMPOUND INTEREST = "+c);
}