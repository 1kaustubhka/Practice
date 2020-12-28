function add()
{
    var n = [document.getElementById("no1").value, document.getElementById("no2").value];
    alert(n[0]+" "+n[1]);
   
    var adder = new Worker('adder.js');
    var result = document.getElementById("result");
    adder.postMessage(n);
    adder.onmessage = function(e) {
        result.value = e.data;
        alert(e.data);
      }
     //alert(result);
}